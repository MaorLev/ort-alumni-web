import { ArticleInterface } from "./article.interface";

export interface ArticlesByCategory {
  categoryId: number;
  categoryView: string;
  categoryName: string;
  articles: ArticleInterface[];
}