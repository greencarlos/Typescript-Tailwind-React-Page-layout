const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-slate-800 shadow-md h-16 p-5 flex items-center justify-between between">
      <h2 className="text-white">InStock</h2>
      <input type="text" name="" id="" placeholder="Search"
        className="bg-gray-100 rounded-md px-2"
      />
      <button className="bg-lime-600 rounded-md px-2 py-1 text-white">Log In</button>
    </nav>
  )
}

export default Navbar
