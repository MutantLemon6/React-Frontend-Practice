import NavBar from './components/NavBar'
import "./App.css";
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import BoxesList from './components/Boxes/BoxesList/BoxesList';
import Box from './components/Boxes/Box/Box';
import { Suspense } from 'react';
import CreateBox from './components/Boxes/CreateBox/CreateBox';
import Spinner from './components/Spinner';
import Title from './components/Title/Title';
import { TitleProvider } from './components/Title/TitleProvider';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <NavBar />
        <TitleProvider>
          <Title />
          <Routes>
            <Route index element={<Suspense fallback={<Spinner />}><BoxesList /></Suspense>} />
            <Route path="box/:id" element={<Suspense fallback={<Spinner />}><Box /></Suspense>} />
            <Route path="create-box" element={<CreateBox />} />
          </Routes>
        </TitleProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
