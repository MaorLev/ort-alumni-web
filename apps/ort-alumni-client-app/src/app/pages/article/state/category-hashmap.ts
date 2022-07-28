export enum CategoryIdEnum {
  Events = 1,
  General = 2
}
export enum CategoryNameEnum {
  Events = "Events",
  General = "General"
}
export const HashCategoryIdToViewName:Record<number, string> = {
  [CategoryIdEnum.Events] : "אירועים",
  [CategoryIdEnum.General] : "כללי"
}
export const HashCategoryNameToId:Record<string, number> = {
  [CategoryNameEnum.Events] : 1,
  [CategoryNameEnum.General] : 2
}
export const HashCategoryIdToName:Record<number, string> = {
  [CategoryIdEnum.Events] : CategoryNameEnum.Events,
  [CategoryIdEnum.General] : CategoryNameEnum.General
}