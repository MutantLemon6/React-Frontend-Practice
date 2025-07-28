import type { IRow } from "./row"

export interface ICard {
    id: number
    name: string
    count: number
    imageUrl: string
    color: string[]
    colorIdentity: string[]
    rowId: number
    row?: IRow
}