export enum CardDeckTypes {
  Plain = "Plain",
  Primary = "Primary"
}

export interface CardDeck {
  type:CardDeckTypes;
  heading?:string;
  subheading?:string;
  img?:string;
  detail?:string;
}
export interface CardDeckTemplateContext {
  $implicit:CardDeck;
}
