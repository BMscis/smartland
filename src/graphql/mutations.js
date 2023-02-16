/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNFTS = /* GraphQL */ `
  mutation CreateNFTS(
    $input: CreateNFTSInput!
    $condition: ModelNFTSConditionInput
  ) {
    createNFTS(input: $input, condition: $condition) {
      id
      title
      status
      item_type
      collections
      deadline
      category
      price
      bid
      max_bid
      likes
      description
      views
      priceover
      showcase
      preview_image {
        id
        name
        alternativeText
        width
        height
        url
      }
      chain
      owner {
        author
        username
      }
      bids {
        value
        nftId
        createdAt
      }
      history {
        value
        nftId
        createdAt
      }
      event {
        contractAddress
        tokenID
        walletAddress
        location
        tickets
        ticketSold
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNFTS = /* GraphQL */ `
  mutation UpdateNFTS(
    $input: UpdateNFTSInput!
    $condition: ModelNFTSConditionInput
  ) {
    updateNFTS(input: $input, condition: $condition) {
      id
      title
      status
      item_type
      collections
      deadline
      category
      price
      bid
      max_bid
      likes
      description
      views
      priceover
      showcase
      preview_image {
        id
        name
        alternativeText
        width
        height
        url
      }
      chain
      owner {
        author
        username
      }
      bids {
        value
        nftId
        createdAt
      }
      history {
        value
        nftId
        createdAt
      }
      event {
        contractAddress
        tokenID
        walletAddress
        location
        tickets
        ticketSold
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNFTS = /* GraphQL */ `
  mutation DeleteNFTS(
    $input: DeleteNFTSInput!
    $condition: ModelNFTSConditionInput
  ) {
    deleteNFTS(input: $input, condition: $condition) {
      id
      title
      status
      item_type
      collections
      deadline
      category
      price
      bid
      max_bid
      likes
      description
      views
      priceover
      showcase
      preview_image {
        id
        name
        alternativeText
        width
        height
        url
      }
      chain
      owner {
        author
        username
      }
      bids {
        value
        nftId
        createdAt
      }
      history {
        value
        nftId
        createdAt
      }
      event {
        contractAddress
        tokenID
        walletAddress
        location
        tickets
        ticketSold
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAUTHOR = /* GraphQL */ `
  mutation CreateAUTHOR(
    $input: CreateAUTHORInput!
    $condition: ModelAUTHORConditionInput
  ) {
    createAUTHOR(input: $input, condition: $condition) {
      id
      user
      followers
      author_sale {
        id
        sales
        volume
        daily_sales
        weekly_sales
        floor_price
        owners
        assets
        author
      }
      about
      banner {
        id
        name
        alternativeText
        width
        height
        url
      }
      photo {
        id
        name
        alternativeText
        width
        height
        url
      }
      social
      wallet
      bidHistory {
        value
        nftId
        createdAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAUTHOR = /* GraphQL */ `
  mutation UpdateAUTHOR(
    $input: UpdateAUTHORInput!
    $condition: ModelAUTHORConditionInput
  ) {
    updateAUTHOR(input: $input, condition: $condition) {
      id
      user
      followers
      author_sale {
        id
        sales
        volume
        daily_sales
        weekly_sales
        floor_price
        owners
        assets
        author
      }
      about
      banner {
        id
        name
        alternativeText
        width
        height
        url
      }
      photo {
        id
        name
        alternativeText
        width
        height
        url
      }
      social
      wallet
      bidHistory {
        value
        nftId
        createdAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAUTHOR = /* GraphQL */ `
  mutation DeleteAUTHOR(
    $input: DeleteAUTHORInput!
    $condition: ModelAUTHORConditionInput
  ) {
    deleteAUTHOR(input: $input, condition: $condition) {
      id
      user
      followers
      author_sale {
        id
        sales
        volume
        daily_sales
        weekly_sales
        floor_price
        owners
        assets
        author
      }
      about
      banner {
        id
        name
        alternativeText
        width
        height
        url
      }
      photo {
        id
        name
        alternativeText
        width
        height
        url
      }
      social
      wallet
      bidHistory {
        value
        nftId
        createdAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEVENTS = /* GraphQL */ `
  mutation CreateEVENTS(
    $input: CreateEVENTSInput!
    $condition: ModelEVENTSConditionInput
  ) {
    createEVENTS(input: $input, condition: $condition) {
      id
      AWSUSER
      WALLETADDRESS
      CONTRACTADDRESS
      TOKENID
      EVENTNAME
      EVENTLOCATION
      PRICE
      TICKETNUMBER
      TICKETSOLD
      EVENTIMAGE
      EVENTDETAILS
      ARTISTS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEVENTS = /* GraphQL */ `
  mutation UpdateEVENTS(
    $input: UpdateEVENTSInput!
    $condition: ModelEVENTSConditionInput
  ) {
    updateEVENTS(input: $input, condition: $condition) {
      id
      AWSUSER
      WALLETADDRESS
      CONTRACTADDRESS
      TOKENID
      EVENTNAME
      EVENTLOCATION
      PRICE
      TICKETNUMBER
      TICKETSOLD
      EVENTIMAGE
      EVENTDETAILS
      ARTISTS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEVENTS = /* GraphQL */ `
  mutation DeleteEVENTS(
    $input: DeleteEVENTSInput!
    $condition: ModelEVENTSConditionInput
  ) {
    deleteEVENTS(input: $input, condition: $condition) {
      id
      AWSUSER
      WALLETADDRESS
      CONTRACTADDRESS
      TOKENID
      EVENTNAME
      EVENTLOCATION
      PRICE
      TICKETNUMBER
      TICKETSOLD
      EVENTIMAGE
      EVENTDETAILS
      ARTISTS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
