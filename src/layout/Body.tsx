import { LayoutRouteProps } from "react-router-dom";

function Body({ children }: LayoutRouteProps): JSX.Element {
  return <div>{children}</div>;
}
export default Body;
