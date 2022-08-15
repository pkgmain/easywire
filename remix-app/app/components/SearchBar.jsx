import { useContext } from "react";
import { BellIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import ProfileMenu from "~/components/ProfileMenu";
import { TheMobileNavContext } from "~/components/TheMobileNav";

export default function SearchBar() {
  const { setShow: setShowMobileNav } = useContext(TheMobileNavContext);

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
      <button type="button"
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setShowMobileNav(true)}>
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="flex-1 flex">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">Search</label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input id="search-field" name="search-field"
                     className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                     placeholder="Search transactions" type="search" />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
