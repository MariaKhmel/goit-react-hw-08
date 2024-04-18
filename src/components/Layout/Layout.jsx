import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import "../../index.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={null}> {children}</Suspense>
    </div>
  );
};
export default Layout;
