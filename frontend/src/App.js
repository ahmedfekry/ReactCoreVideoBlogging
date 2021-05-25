import './App.css';
import Nav from "./Layout/nav";
import MainContent from "./Layout/MainContent";
// import SideBar from "./Layout/SideBar";
// import Test from './Layout/Test';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="preloader"></div>
        <Nav />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
