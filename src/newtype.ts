declare const M: unique symbol

export type NewType<Identifier extends string, Type> = Type & {
  readonly [M]: [Identifier]
}
export const make = <T>(value: any): T => value as T
