import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-100 text-indigo-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Churchy.Manage. All rights reserved.
        </p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
