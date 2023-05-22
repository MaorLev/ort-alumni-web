export enum CategoryIdEnum {
  Events = 3,
  News = 4,
  Education = 5
}
export enum CategoryNameEnum {
  Events = "אירועים",
  News = "חדשות",
  Education = "חינוך"
}
export enum ArticlesCategoryViewType {
  Events = CategoryIdEnum.Events,
  News = CategoryIdEnum.News,
  All = 50
}
// export const HashCategoryIdToViewName:Record<number, string> = {
//   [CategoryIdEnum.Events] : "אירועים",
//   [CategoryIdEnum.General] : "כללי"
// }
export const HashCategoryNameToId:Record<string, number> = {
  [CategoryNameEnum.Events] : 3,
  [CategoryNameEnum.News] : 4,
  [CategoryNameEnum.Education] : 5
}
export const HashCategoryIdToName:Record<number, string> = {
  [CategoryIdEnum.Events] : CategoryNameEnum.Events,
  [CategoryIdEnum.News] : CategoryNameEnum.News,
  [CategoryIdEnum.Education] : CategoryNameEnum.Education
}