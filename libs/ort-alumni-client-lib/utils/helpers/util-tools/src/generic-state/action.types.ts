
export interface Action {
  type:string;
  data?:any;
}

export interface ActionHandler<T> {
  handleAction(currentState:T, action:Action) : T
}