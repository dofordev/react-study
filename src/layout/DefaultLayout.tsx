import { useEffect } from "react";
import { LayoutRouteProps } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
function DefaultLayout({ children }: LayoutRouteProps): JSX.Element {
  useEffect(() => {}, []);
  return (
    <>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Body>{children}</Body>
      <Footer></Footer>
    </>
  );
}
export default DefaultLayout;
