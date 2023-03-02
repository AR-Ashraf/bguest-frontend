import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux';
import {Navbar} from "./components";
import {RouterConfig} from "./routes/Routes";
import { Menu, VideoPreview } from "./containers";
import './App.css';

function App() {
  const isMenu = useSelector(state => state.isMenu);
  const isVideo = useSelector(state => state.isVideo);
  return (
    <div className="App">
    <div className="bguest__bg">
      <Router>
        <Navbar/>
        <div className="bguest__body">
          {isMenu ? <Menu/> : null}
          {isVideo ? <VideoPreview/> : null}
          <RouterConfig/>
        </div>
      </Router>
    </div>
    
  </div>
  );
}

export default App;
