import type { IRow } from "./row"

export interface IBox {
    id: number
    name: string
    createdDate: string | Date
    updatedDate: string | Date
    cardCount: number
    imageUrl?: string | undefined
    rows: IRow[]
}