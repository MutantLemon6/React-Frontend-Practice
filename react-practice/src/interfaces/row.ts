import type { IBox } from "./box"
import type { ICard } from "./card"

export interface IRow{
    id?: number
    boxId?: number
    cards: ICard[]
    box?: IBox
}