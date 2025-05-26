import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-indigo-200">
          YourAppName
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
        </div>
      </div>
    </nav>
  );
}
