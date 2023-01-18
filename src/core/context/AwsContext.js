import { Auth, DataStore, Hub } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { AUTHOR, AVATAR, Itemtype, Nftcategory, Nftcollectiontype, NFTS, Nftstatus, OWNER } from "../../models"
import { loadStdlib } from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import auth from "../auth";
const stdlib = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"))
export const AwsContext = createContext();
const setMode = (mode) => {
  switch (mode) {
    case "WalletConnect":
      stdlib.setWalletFallback(stdlib.walletFallback({
        providerEnv: "TestNet", WalletConnect
      }));
      return "ALGO"
    case "MyAlgo":
      stdlib.setWalletFallback(stdlib.walletFallback({
        providerEnv: "TestNet", MyAlgoConnect
      }));
      return "ALGO"
  }
}
export const AwsHook = () => useContext(AwsContext)
export const AwsProvider = ({ children }) => {
  //AWS and AUTH
  const [authors, setAuthors] = useState(null)
  const [nfts, setNfts] = useState(null)
  const [wallet, setWallet] = useState(null)
  const [user, setUser] = useState(null)
  const [errorState,setErrorState] = useState({state:false,error:""})

  // REACH CONTRACT
  async function getAuthors() {
    const author = await DataStore.query(AUTHOR)
    setAuthors(author)
  }
  async function connectWallet(mode) {
    // const {rpc, rpcCallbacks} = await mkRPC(opts);
    const chain = setMode(mode)
    try {
      // const health = await rpc('/health')
      const acc = await stdlib.getDefaultAccount()
      const bal = await stdlib.balanceOf(acc)
      const balance = stdlib.formatCurrency(bal)
      const addr = acc.getAddress()
      const newUser = {
        "Account": addr,
        "Balance": balance,
        "Chain": chain,
        "Main": acc
      }
      setWallet(newUser)
    } catch (error) {
    }
  }
  async function getNFTS() {
    const nft = await DataStore.query(NFTS)
    setNfts(nft)
  }
  async function userClear(){
    setUser(null)
  }
  async function resetError(){
    setErrorState({state:false,error:""})
  }
  async function saveNFT(nft) {
    const sv = await DataStore.save(
      new NFTS(nft)
    )
  }
  const awsStore = {
    authors, user, stdlib,errorState,userClear,
    nfts, wallet, connectWallet,resetError,setErrorState
  }
  const getUser = async (x) => {
    try {
      const username = x.username
      const userNm = x.attributes.name
      const verified = x.attributes.email_verified
      const author = await DataStore.query(AUTHOR, c => c.user.eq(username))
      let usr = author ? author[0] : null
      let newObj = {}
      newObj["name"] = userNm
      newObj["verified"] = verified
      if (!usr) return
      setUser({
        ...usr, ...newObj
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    const removeStorageListener = Hub.listen("datastore", async (capsule) => {
      const { payload: { event, data } } = capsule

      if (event === "ready") {
        getAuthors()
        getNFTS()
      }
      if (event === "outboxStatus" && data.isEmpty) {
        await getAuthors()
        await getNFTS()
      }
      if (event === "outboxMutationProcessed" && data.model.name === "AUTHOR") {
        await getUser(auth.getUserInfo())
      }
    }
    )
    const removeAuthListener = Hub.listen('auth', async (capsule) => {
      const { payload: { event, data } } = capsule;

      if (event === "signIn_failure") {
        setErrorState({
          state:true,
          error:data.message
        })
      }
      if (event === "signUp_failure") {
        setErrorState({
          state:true,
          error:data.message
        })
      }
      if (event === "signIn") {
        getUser(data)
      }
      if (event === "autoSignIn") {
        const author = new AUTHOR({
          user: data.username,
          followers: 0,
          author_sale: null,
          about: null,
          banner: null,
          photo: new AVATAR({
            name: data.attributes.picture,
            alternativeText: data.attributes.picture,
            width: 200,
            height: 200,
            url: `https://sse11114-dev.s3.amazonaws.com/public/author/${data.attributes.picture}`
          }),
          social: `@${data.attributes.name}`,
          wallet: null,
          bidHistory: null,
        })
        await DataStore.save(author)
        auth.setUserInfo(data)
      }
    })

    DataStore.start()
    // Auth.
    return () => {
      removeStorageListener(); removeAuthListener()
    }
  }, [])
  return (
    <AwsContext.Provider value={awsStore}>
      {children}
    </AwsContext.Provider>
  );
};