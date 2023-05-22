// export function cloneDeep(obj: unknown) {
//   return JSON.parse(JSON.stringify(obj));
// }


export class cloneable {
  public static deepCopy<T>(source: T): T {
    return Array.isArray(source)
    ? source.map(item => this.deepCopy(item))
    : source instanceof Date
    ? new Date(source.getTime())
    : source && typeof source === 'object'
          ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
             // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
             Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop)!);
             o[prop] = this.deepCopy((source as { [key: string]: any })[prop]);
             return o;
          }, Object.create(Object.getPrototypeOf(source)))
    : source as T;
  }
}
interface MyObj {
  [key: string]: any;
}
export function cloneDeep(obj:any) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const clone: MyObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = cloneDeep(obj[key]);
    }
  }

  return clone;
}