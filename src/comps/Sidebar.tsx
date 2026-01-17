import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <aside className="hidden md:flex w-50 bg-slate-600 text-white flex-col h-full">
        <nav className="flex flex-1 flex-col p-4 space-y-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <nav className="md:hdden fixed bottom-0 left-0 w-full text-white bg-slate-600 tesx-white flex justify-around py-3 shadow=lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
