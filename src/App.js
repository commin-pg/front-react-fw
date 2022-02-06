import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/ScrollTop";
import Routes from "./router/Routes";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <>
    <AnimatedCursor
     innerSize={8}
     outerSize={44}
     color="255, 160, 1"
     outerAlpha={0.3}
     innerScale={0.7}
     outerScale={1.2}
    />
    <ScrollToTop/>
    <Routes />
    </>
  );
}

export default App;
