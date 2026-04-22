import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { BiMenu, BiX } from "react-icons/bi";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link, useLocation } from "react-router";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="inset-x-0 top-0 z-50 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Logo size="large" textColor="gradient" />
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="">
              <BiMenu aria-hidden="true" className="size-9" />
            </span>
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <NavBar type="row" />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link className="text-2xl font-brand-header text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo size="small" textColor="gradient" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <BiX aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6  divide-y divide-gray-500/10">
              <NavBar type="col" />
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-brand-header text-gray-900 hover:bg-gray-50 "
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
