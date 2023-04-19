import { useEffect, useState } from "react";
import DesktopComponent from "../components/desktop_component";
import TabletComponent from "../components/tablet_component";
import MobileComponent from "../components/mobile_component";

const Desktop = () => {
  const [screenSize, setScreenSize] = useState(1);

  const checkSizeToRender = () => {
    if (window.innerWidth <= 430 ) {
      setScreenSize(3);
    } else if (window.innerWidth <= 820) {
      setScreenSize(2);
    } else {
      setScreenSize(1);
    }
  };

  useEffect(() => {
    checkSizeToRender();
    window.addEventListener("resize", checkSizeToRender);
    return () => window.removeEventListener("resize", checkSizeToRender);
  }, []);

  let componentToRender;
  switch (screenSize) {
    case 1:
      componentToRender = <DesktopComponent />;
      break;
    case 2:
      componentToRender = <TabletComponent />;
      break;
    case 3:
      componentToRender = <MobileComponent />;
      break;
    default:
      componentToRender = <DesktopComponent />;
  }

  return <>{componentToRender}</>;
};

export default Desktop;