import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    // you can get different background styles from https://bg.ibelick.com/
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
