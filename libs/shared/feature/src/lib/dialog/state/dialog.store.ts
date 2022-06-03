import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import {  map, mapTo, Observable, tap } from "rxjs";

export type DialogState = {
  output_word:string
}
export function createInitialSessionState(): DialogState {
  return {
    output_word:''
  }
}
@Injectable({ providedIn: "root" })
@StoreConfig({ name: "dialog" })
export class DialogStore extends Store<DialogState> {
  constructor() {
    super(createInitialSessionState());
  }

}