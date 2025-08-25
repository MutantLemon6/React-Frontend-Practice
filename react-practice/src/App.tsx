import "./App.css";
import { ErrorBoundary } from 'react-error-boundary';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from "./components/MainContent";
import { BoxesProvider } from "./components/Boxes/Box/context/BoxesProvider";
import Header from "./components/Header";
import Footer from "./components/Header";


function App() {
  return (
    <>
      <BoxesProvider>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>

          <div className="translucent-bg min-vh-100">
            <Header />
            <div className="container-fluid">
              <div className="row">
                <Sidebar />
                <MainContent />
              </div>
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
      </BoxesProvider>

    </>
  )
}

export default App