import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-purple-300 flex items-center justify-center px-4">
      <div className="max-w-xl text-center text-white space-y-6">
        <h1 className="text-5xl font-extrabold">Welcome to Churchy.Manage</h1>
        <p className="text-lg opacity-90">
          A short, compelling tagline goes here. Describe what your app does and
          why people will love it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-md shadow transition"
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
