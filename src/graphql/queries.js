/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNFTS = /* GraphQL */ `
  query GetNFTS($id: ID!) {
    getNFTS(id: $id) {
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
export const listNFTS = /* GraphQL */ `
  query ListNFTS(
    $filter: ModelNFTSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNFTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        chain
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNFTS = /* GraphQL */ `
  query SyncNFTS(
    $filter: ModelNFTSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNFTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        chain
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAUTHOR = /* GraphQL */ `
  query GetAUTHOR($id: ID!) {
    getAUTHOR(id: $id) {
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
export const listAUTHORS = /* GraphQL */ `
  query ListAUTHORS(
    $filter: ModelAUTHORFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAUTHORS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        followers
        about
        social
        wallet
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAUTHORS = /* GraphQL */ `
  query SyncAUTHORS(
    $filter: ModelAUTHORFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAUTHORS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user
        followers
        about
        social
        wallet
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEVENTS = /* GraphQL */ `
  query GetEVENTS($id: ID!) {
    getEVENTS(id: $id) {
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
export const listEVENTS = /* GraphQL */ `
  query ListEVENTS(
    $filter: ModelEVENTSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEVENTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEVENTS = /* GraphQL */ `
  query SyncEVENTS(
    $filter: ModelEVENTSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEVENTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
