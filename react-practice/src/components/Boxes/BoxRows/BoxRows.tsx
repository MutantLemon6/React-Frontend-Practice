import type { IRow } from "../../../interfaces/row";
import CardList from "../CardList/CardList";

const BoxRow = ({ rows }: { rows: IRow[] }) => {
    return (
        <div className="row">
            {rows.map((row: IRow) => {
                return (
                    <CardList key={row.id} cards={row.cards} />
                )
            })}
        </div>
    );
};

export default BoxRow;