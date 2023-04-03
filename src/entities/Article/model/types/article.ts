import { ArticleBlockType, ArticleType } from '../consts/articleConsts';
import { User } from '@/entities/User';

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
