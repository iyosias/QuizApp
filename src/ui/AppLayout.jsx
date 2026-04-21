import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    // you can get different background styles from https://bg.ibelick.com/
    <div class="absolute inset-0 -z-10 h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ecf5f5_40%,#b5b5c4_100%)] flex flex-col">
      <Header />

      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
