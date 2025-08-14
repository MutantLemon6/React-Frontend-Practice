import { Route, Routes } from "react-router-dom";
import Title from "../Title/Title";
import { TitleProvider } from "../Title/TitleProvider";
import { Suspense } from "react";
import Spinner from "../Spinner";
import BoxesList from "../Boxes/BoxesList/BoxesList";
import Box from "../Boxes/Box/Box";
import CreateBox from "../Boxes/CreateBox/CreateBox";

export default function MainContent() {
    return (
        <div className="col-lg-10 col-md-6">
            <TitleProvider>
                <Title />
                <Routes>
                    <Route index element={<Suspense fallback={<Spinner />}><BoxesList /></Suspense>} />
                    <Route path="box/:id" element={<Suspense fallback={<Spinner />}><Box /></Suspense>} />
                    <Route path="create-box" element={<CreateBox />} />
                </Routes>
            </TitleProvider>
        </div>
    )
}