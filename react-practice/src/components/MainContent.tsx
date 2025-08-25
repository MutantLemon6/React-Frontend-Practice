import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import { TitleProvider } from "./Title/TitleProvider";
import { Suspense } from "react";
import Spinner from "./Spinner";
import BoxesGrid from "./Boxes/BoxesGrid/BoxesGrid";
import Box from "./Boxes/Box/Box";
import CreateBox from "./Boxes/CreateBox/CreateBox";
import Collection from "./Collection/Collection";

export default function MainContent() {
    return (
        <div className="col-md-10 min-vh-100 overflow-auto">
            <TitleProvider>
                <Title />
                <Routes>
                    <Route index element={<Suspense fallback={<Spinner />}><BoxesGrid /></Suspense>} />
                    <Route path="box/:id" element={<Suspense fallback={<Spinner />}><Box /></Suspense>} />
                    <Route path="create-box" element={<CreateBox />} />
                    <Route path="collection" element={<Suspense fallback={<Spinner />}><Collection /></Suspense>} />
                </Routes>
            </TitleProvider>
        </div>
    )
}