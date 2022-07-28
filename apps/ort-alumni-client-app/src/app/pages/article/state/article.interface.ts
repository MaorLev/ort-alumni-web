import { CategoryInterface } from './category.interface';
export interface ArticleInterface {
  id?:number;
  heading:string;
  subheading:string;
  date?:string;
  img:string;
  originalimgname?:string;
  detail:string;
  category?:CategoryInterface;
  categoryid?:number;
}

