import photo from "../../assets/logo.png";
import { MdOutlineFoodBank } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-white ">
            <ul className="space-y-2 font-medium">
              <li>
                <Link to={"/"}>
                  <img src={photo} alt="" />
                </Link>
              </li>
              <li className="mt-16 bg-gray-100 rounded-lg">
                <NavLink
                  to={"/"}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-secondary  group"
                >
                  <div className="text-4xl">
                    <MdOutlineFoodBank />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Meals</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"#"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-secondary group"
                >
                  <div className="text-4xl">
                    <MdOutlineFoodBank />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Ingredients
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"#"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-secondary group"
                >
                  <div className="text-4xl">
                    <MdOutlineFoodBank />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Area</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
