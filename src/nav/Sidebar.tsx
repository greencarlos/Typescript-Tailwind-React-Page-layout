import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const linkStyle: string =
    "bg-slate-700 rounded-md px- py--1 hover:bg-lime-600 transition-colors";

  const activeStyle: string = "bg-lime-500 rounded-md px-3 py-1";

  return (
    <>
      <aside className="hidden md:flex w-50 bg-slate-600 text-white flex-col h-full">
        <nav className="flex flex-1 flex-col p-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeStyle : linkStyle}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `${isActive ? activeStyle : linkStyle}`
            }
          >
            Inventory
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? activeStyle : linkStyle}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${isActive ? activeStyle : linkStyle}`
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      <nav className="md:hdden fixed bottom-0 left-0 w-full text-white bg-slate-600 tesx-white flex justify-around py-3 shadow=lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
