import { ArticleInterface } from './article.interface';
export interface CategoryInterface {
  id:number,
  name:string,
  articles?:Array<ArticleInterface>
}