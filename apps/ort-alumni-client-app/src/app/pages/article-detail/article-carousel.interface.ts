// import { Blog } from "@features/feature-blog";


export interface ArticleCarousel {
  category:number,
  // articles:Blog [],
  perView:number,
  showBullets:boolean,
  bound:boolean,
  direction:'rtl'|'ltr',
  breakpoints:unknown
}