import "./App.css";
import { ErrorBoundary } from 'react-error-boundary';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from "./components/Main/MainContent";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="container-fluid translucent-bg">
          <div className="row">
            <Sidebar />
            <MainContent />
          </div>
        </div>

      </ErrorBoundary>
    </>
  )
}

export default App
