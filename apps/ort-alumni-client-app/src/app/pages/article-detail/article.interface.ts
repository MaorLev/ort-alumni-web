import { CategoryInterface } from './state/category.interface';
export interface ArticleInterface {
  id?:number;
  heading:string;
  subheading:string;
  date?:string;
  img:string;
  detail:string;
  category?:CategoryInterface;
  categoryid?:number;
}

