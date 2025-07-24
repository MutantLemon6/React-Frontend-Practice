import NavBar from './components/NavBar'
import "./App.css";
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router';
import BoxesList from './components/Boxes/BoxesList/BoxesList';
import Box from './components/Boxes/Box/Box';
import { Suspense } from 'react';
import CreateBox from './components/Boxes/CreateBox/CreateBox';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Suspense fallback={<div className="spinner-border text-primary">Loading...</div>}><BoxesList /></Suspense>} />
            <Route path="box/:id" element={<Suspense fallback={<div>Loading...</div>}><Box /></Suspense>} />
            <Route path="/create-box" element={<CreateBox />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
