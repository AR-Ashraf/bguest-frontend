import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./components";
import { RouterConfig } from "./routes/Routes";
import { Menu, VideoPreview } from "./containers";
import "./App.css";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  const { pathname } = useLocation();

  const isMenu = useSelector((state) => state.isMenu);
  const isVideo = useSelector((state) => state.isVideo);
  return (
    <div className="App">
      <div className="bguest__bg">
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          {pathname.includes("/dashboard") ? null : <Navbar />}
          <div className="bguest__body">
            {isMenu ? <Menu /> : null}
            {isVideo ? <VideoPreview /> : null}
            <RouterConfig />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
