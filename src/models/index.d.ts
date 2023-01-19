import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Nftcollectiontype {
  CARTOONISM = "CARTOONISM",
  ABSTRACTION = "ABSTRACTION"
}

export enum Nftcategory {
  ART = "ART",
  COLLECTIBLES = "COLLECTIBLES",
  MUSIC = "MUSIC",
  TICKET = "TICKET",
  VIRTUAL = "VIRTUAL"
}

export enum Itemtype {
  SINGLE = "SINGLE",
  BUNDLE = "BUNDLE"
}

export enum Nftstatus {
  ON_AUCTION = "ON_AUCTION",
  BUY_NOW = "BUY_NOW",
  HAS_OFFER = "HAS_OFFER"
}

type EagerEVENTINFO = {
  readonly contractAddress?: string | null;
  readonly tokenID?: string | null;
  readonly walletAddress?: string | null;
  readonly location?: string | null;
  readonly tickets?: number | null;
  readonly ticketSold?: number | null;
  readonly artists?: (ARTISTS | null)[] | null;
}

type LazyEVENTINFO = {
  readonly contractAddress?: string | null;
  readonly tokenID?: string | null;
  readonly walletAddress?: string | null;
  readonly location?: string | null;
  readonly tickets?: number | null;
  readonly ticketSold?: number | null;
  readonly artists?: (ARTISTS | null)[] | null;
}

export declare type EVENTINFO = LazyLoading extends LazyLoadingDisabled ? EagerEVENTINFO : LazyEVENTINFO

export declare const EVENTINFO: (new (init: ModelInit<EVENTINFO>) => EVENTINFO)

type EagerARTISTS = {
  readonly name?: string | null;
  readonly image?: AVATAR | null;
}

type LazyARTISTS = {
  readonly name?: string | null;
  readonly image?: AVATAR | null;
}

export declare type ARTISTS = LazyLoading extends LazyLoadingDisabled ? EagerARTISTS : LazyARTISTS

export declare const ARTISTS: (new (init: ModelInit<ARTISTS>) => ARTISTS)

type EagerAVATAR = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly alternativeText?: string | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly url?: string | null;
}

type LazyAVATAR = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly alternativeText?: string | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly url?: string | null;
}

export declare type AVATAR = LazyLoading extends LazyLoadingDisabled ? EagerAVATAR : LazyAVATAR

export declare const AVATAR: (new (init: ModelInit<AVATAR>) => AVATAR)

type EagerOWNER = {
  readonly author?: string | null;
  readonly banner?: AVATAR | null;
  readonly avatar?: AVATAR | null;
  readonly username?: string | null;
}

type LazyOWNER = {
  readonly author?: string | null;
  readonly banner?: AVATAR | null;
  readonly avatar?: AVATAR | null;
  readonly username?: string | null;
}

export declare type OWNER = LazyLoading extends LazyLoadingDisabled ? EagerOWNER : LazyOWNER

export declare const OWNER: (new (init: ModelInit<OWNER>) => OWNER)

type EagerBIDS = {
  readonly value?: number | null;
  readonly nftId?: string | null;
  readonly buyer?: OWNER | null;
  readonly createdAt?: string | null;
}

type LazyBIDS = {
  readonly value?: number | null;
  readonly nftId?: string | null;
  readonly buyer?: OWNER | null;
  readonly createdAt?: string | null;
}

export declare type BIDS = LazyLoading extends LazyLoadingDisabled ? EagerBIDS : LazyBIDS

export declare const BIDS: (new (init: ModelInit<BIDS>) => BIDS)

type EagerAUTHORSALE = {
  readonly id?: string | null;
  readonly sales?: number | null;
  readonly volume?: number | null;
  readonly daily_sales?: number | null;
  readonly weekly_sales?: number | null;
  readonly floor_price?: number | null;
  readonly owners?: number | null;
  readonly assets?: number | null;
  readonly author?: string | null;
}

type LazyAUTHORSALE = {
  readonly id?: string | null;
  readonly sales?: number | null;
  readonly volume?: number | null;
  readonly daily_sales?: number | null;
  readonly weekly_sales?: number | null;
  readonly floor_price?: number | null;
  readonly owners?: number | null;
  readonly assets?: number | null;
  readonly author?: string | null;
}

export declare type AUTHORSALE = LazyLoading extends LazyLoadingDisabled ? EagerAUTHORSALE : LazyAUTHORSALE

export declare const AUTHORSALE: (new (init: ModelInit<AUTHORSALE>) => AUTHORSALE)

type NFTSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AUTHORMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EVENTSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerNFTS = {
  readonly id: string;
  readonly title?: string | null;
  readonly status?: Nftstatus | keyof typeof Nftstatus | null;
  readonly item_type?: Itemtype | keyof typeof Itemtype | null;
  readonly collections?: Nftcollectiontype | keyof typeof Nftcollectiontype | null;
  readonly deadline?: string | null;
  readonly category?: Nftcategory | keyof typeof Nftcategory | null;
  readonly price?: number | null;
  readonly bid?: number | null;
  readonly max_bid?: number | null;
  readonly likes?: number | null;
  readonly description?: string | null;
  readonly views?: number | null;
  readonly priceover?: number | null;
  readonly showcase?: boolean | null;
  readonly preview_image?: AVATAR | null;
  readonly chain?: string | null;
  readonly owner?: OWNER | null;
  readonly bids?: (BIDS | null)[] | null;
  readonly history?: (BIDS | null)[] | null;
  readonly event?: EVENTINFO | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNFTS = {
  readonly id: string;
  readonly title?: string | null;
  readonly status?: Nftstatus | keyof typeof Nftstatus | null;
  readonly item_type?: Itemtype | keyof typeof Itemtype | null;
  readonly collections?: Nftcollectiontype | keyof typeof Nftcollectiontype | null;
  readonly deadline?: string | null;
  readonly category?: Nftcategory | keyof typeof Nftcategory | null;
  readonly price?: number | null;
  readonly bid?: number | null;
  readonly max_bid?: number | null;
  readonly likes?: number | null;
  readonly description?: string | null;
  readonly views?: number | null;
  readonly priceover?: number | null;
  readonly showcase?: boolean | null;
  readonly preview_image?: AVATAR | null;
  readonly chain?: string | null;
  readonly owner?: OWNER | null;
  readonly bids?: (BIDS | null)[] | null;
  readonly history?: (BIDS | null)[] | null;
  readonly event?: EVENTINFO | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NFTS = LazyLoading extends LazyLoadingDisabled ? EagerNFTS : LazyNFTS

export declare const NFTS: (new (init: ModelInit<NFTS, NFTSMetaData>) => NFTS) & {
  copyOf(source: NFTS, mutator: (draft: MutableModel<NFTS, NFTSMetaData>) => MutableModel<NFTS, NFTSMetaData> | void): NFTS;
}

type EagerAUTHOR = {
  readonly id: string;
  readonly user?: string | null;
  readonly followers?: number | null;
  readonly author_sale?: AUTHORSALE | null;
  readonly about?: string | null;
  readonly banner?: AVATAR | null;
  readonly photo?: AVATAR | null;
  readonly social?: string | null;
  readonly wallet?: string | null;
  readonly bidHistory?: (BIDS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAUTHOR = {
  readonly id: string;
  readonly user?: string | null;
  readonly followers?: number | null;
  readonly author_sale?: AUTHORSALE | null;
  readonly about?: string | null;
  readonly banner?: AVATAR | null;
  readonly photo?: AVATAR | null;
  readonly social?: string | null;
  readonly wallet?: string | null;
  readonly bidHistory?: (BIDS | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AUTHOR = LazyLoading extends LazyLoadingDisabled ? EagerAUTHOR : LazyAUTHOR

export declare const AUTHOR: (new (init: ModelInit<AUTHOR, AUTHORMetaData>) => AUTHOR) & {
  copyOf(source: AUTHOR, mutator: (draft: MutableModel<AUTHOR, AUTHORMetaData>) => MutableModel<AUTHOR, AUTHORMetaData> | void): AUTHOR;
}

type EagerEVENTS = {
  readonly id: string;
  readonly AWSUSER?: string | null;
  readonly WALLETADDRESS?: string | null;
  readonly CONTRACTADDRESS?: string | null;
  readonly TOKENID?: string | null;
  readonly EVENTNAME?: string | null;
  readonly EVENTLOCATION?: string | null;
  readonly PRICE?: number | null;
  readonly TICKETNUMBER?: number | null;
  readonly TICKETSOLD?: number | null;
  readonly EVENTIMAGE?: string | null;
  readonly EVENTDETAILS?: string | null;
  readonly ARTISTS?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEVENTS = {
  readonly id: string;
  readonly AWSUSER?: string | null;
  readonly WALLETADDRESS?: string | null;
  readonly CONTRACTADDRESS?: string | null;
  readonly TOKENID?: string | null;
  readonly EVENTNAME?: string | null;
  readonly EVENTLOCATION?: string | null;
  readonly PRICE?: number | null;
  readonly TICKETNUMBER?: number | null;
  readonly TICKETSOLD?: number | null;
  readonly EVENTIMAGE?: string | null;
  readonly EVENTDETAILS?: string | null;
  readonly ARTISTS?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EVENTS = LazyLoading extends LazyLoadingDisabled ? EagerEVENTS : LazyEVENTS

export declare const EVENTS: (new (init: ModelInit<EVENTS, EVENTSMetaData>) => EVENTS) & {
  copyOf(source: EVENTS, mutator: (draft: MutableModel<EVENTS, EVENTSMetaData>) => MutableModel<EVENTS, EVENTSMetaData> | void): EVENTS;
}