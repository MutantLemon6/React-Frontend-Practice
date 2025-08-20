import "./App.css";
import { ErrorBoundary } from 'react-error-boundary';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
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
    </>
  )
}

export default App