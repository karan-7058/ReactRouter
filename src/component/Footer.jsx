import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-2">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center text-center space-y-3">
        <div className=" text-sm ">&copy; {year} Wanderer Stay. All rights reserved.</div>

        <div className="flex space-x-3 mb-2">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
        </div>

        <div className="flex space-x-3">
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
          <a
            href="https://github.com/karan-7058"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}