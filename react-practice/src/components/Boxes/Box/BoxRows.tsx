import type { IRow } from "../../../interfaces/row";
import CardList from "../CardList/CardList";

export default function BoxRow({ rows }: { rows: IRow[] }) {
    return (
        <div className="row">
            {rows.map((row: IRow) => {
                return (
                    <>
                        <CardList key={row.id} cards={row.cards} />
                        <button className="btn btn-primary">Add cards</button>
                    </>
                )
            })}
        </div>
    );
};