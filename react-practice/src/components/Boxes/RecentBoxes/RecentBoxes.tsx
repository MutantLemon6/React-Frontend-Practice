
import { useBoxes } from "../Box/context/useBoxes";
import BoxItem from "./BoxItem";

interface RecentBoxesProps {
    maxItems?: number;
}

export default function RecentBoxes({ maxItems = 5 }: RecentBoxesProps) {
    const {boxes, loading } = useBoxes();
    if (loading) {
        return (
            <div className="mt-3">
                <small className=" d-block mb-2">Recent Boxes</small>
                <small>Loading...</small>
            </div>
        )
    }

    const recentBoxes = boxes?.sort((a, b) => {
        const dateA = new Date(a.updatedDate);
        const dateB = new Date(b.updatedDate);
        return dateB.getTime() - dateA.getTime();
    })
        .slice(0, maxItems);

    if (!recentBoxes || recentBoxes.length === 0) {

        return <div className="mt-3">
            <small className=" d-block mb-2">Recent Boxes</small>
            <small>No boxes accessed recently</small>
        </div>
    }

    return (
        <div className="mt-3">
            <small className="d-block mb-2">Recent Boxes</small>
            <div className="list-group-flush">
                {recentBoxes?.map((box) => <BoxItem key={box.id} box={box} />)}
            </div>
        </div>
    );
}