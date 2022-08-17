import { ArticleInterface } from './article.interface';
export interface CategoryInterface {
  id:number,
  name:string,
  hebName:string,
  articles?:Array<ArticleInterface>
}