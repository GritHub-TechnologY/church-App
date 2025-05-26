import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-blue-400 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold italic hover:text-indigo-200">
          Churchy.Manage
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-indigo-200">
            Home
          </Link>
          <Link to="/signup" className="hover:text-indigo-200">
            Sign Up
          </Link>
          <Link to="/signin" className="hover:text-indigo-200">
            Sign In
          </Link>
          <Link to="/profile" className="hover:text-indigo-200">
            Profile
          </Link>
          <Link to="/profile" className="hover:text-indigo-200">
            iconf
          </Link>
          <Link to="/profile" className="hover:text-indigo-200">
            iconf
          </Link>
        </div>
      </div>
    </nav>
  );
}
