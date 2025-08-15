import { useEffect } from "react";
import { useTitle } from "../Title/useTitle";
import CollectionDetails from "./CollectionDetails";

export default function Collection() {
    const {setTitle} = useTitle();
    useEffect(() => {
        setTitle("Your Collection");
    }, [setTitle]);
    return (
        <div className="container bg-light rounded p-3 border">
            <CollectionDetails />
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p>placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
