/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNFTS = /* GraphQL */ `
  subscription OnCreateNFTS($filter: ModelSubscriptionNFTSFilterInput) {
    onCreateNFTS(filter: $filter) {
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
export const onUpdateNFTS = /* GraphQL */ `
  subscription OnUpdateNFTS($filter: ModelSubscriptionNFTSFilterInput) {
    onUpdateNFTS(filter: $filter) {
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
export const onDeleteNFTS = /* GraphQL */ `
  subscription OnDeleteNFTS($filter: ModelSubscriptionNFTSFilterInput) {
    onDeleteNFTS(filter: $filter) {
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
export const onCreateAUTHOR = /* GraphQL */ `
  subscription OnCreateAUTHOR($filter: ModelSubscriptionAUTHORFilterInput) {
    onCreateAUTHOR(filter: $filter) {
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
export const onUpdateAUTHOR = /* GraphQL */ `
  subscription OnUpdateAUTHOR($filter: ModelSubscriptionAUTHORFilterInput) {
    onUpdateAUTHOR(filter: $filter) {
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
export const onDeleteAUTHOR = /* GraphQL */ `
  subscription OnDeleteAUTHOR($filter: ModelSubscriptionAUTHORFilterInput) {
    onDeleteAUTHOR(filter: $filter) {
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
export const onCreateEVENTS = /* GraphQL */ `
  subscription OnCreateEVENTS($filter: ModelSubscriptionEVENTSFilterInput) {
    onCreateEVENTS(filter: $filter) {
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
export const onUpdateEVENTS = /* GraphQL */ `
  subscription OnUpdateEVENTS($filter: ModelSubscriptionEVENTSFilterInput) {
    onUpdateEVENTS(filter: $filter) {
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
export const onDeleteEVENTS = /* GraphQL */ `
  subscription OnDeleteEVENTS($filter: ModelSubscriptionEVENTSFilterInput) {
    onDeleteEVENTS(filter: $filter) {
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
