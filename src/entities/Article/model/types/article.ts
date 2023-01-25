import { User } from 'entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

export interface ArticleBlockBase {
id: string;
type:ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
type:ArticleBlockType.CODE;
code:string
}

export interface ArticleImageBlock extends ArticleBlockBase {
type:ArticleBlockType.IMAGE;
src: string;
title:string
}

export interface ArticleTextBlock extends ArticleBlockBase {
type:ArticleBlockType.TEXT;
paragraphs: string[]
title?:string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
  LIST = 'LIST',
  BLOCK = 'BLOCK',
}

export interface Article {
  id:string;
  title:string;
  subtitle:string;
  img:string;
  views:number;
  createdAt: string;
  user: User;
  type:ArticleType[]
  blocks:ArticleBlock[]
}
