// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Nftcollectiontype = {
  "CARTOONISM": "CARTOONISM",
  "ABSTRACTION": "ABSTRACTION"
};

const Nftcategory = {
  "ART": "ART",
  "COLLECTIBLES": "COLLECTIBLES",
  "MUSIC": "MUSIC",
  "TICKET": "TICKET",
  "VIRTUAL": "VIRTUAL"
};

const Itemtype = {
  "SINGLE": "SINGLE",
  "BUNDLE": "BUNDLE"
};

const Nftstatus = {
  "ON_AUCTION": "ON_AUCTION",
  "BUY_NOW": "BUY_NOW",
  "HAS_OFFER": "HAS_OFFER"
};

const { NFTS, AUTHOR, EVENTS, EVENTINFO, ARTISTS, AVATAR, OWNER, BIDS, AUTHORSALE } = initSchema(schema);

export {
  NFTS,
  AUTHOR,
  EVENTS,
  Nftcollectiontype,
  Nftcategory,
  Itemtype,
  Nftstatus,
  EVENTINFO,
  ARTISTS,
  AVATAR,
  OWNER,
  BIDS,
  AUTHORSALE
};