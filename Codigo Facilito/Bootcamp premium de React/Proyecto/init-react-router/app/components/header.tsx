import { useState } from "react";
import { Link, NavLink } from "react-router";

import { useAuthStore } from "~/store/auth";



export default function Header() {
  const {user, signOut, isLoading} = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await signOut();
    
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              <span className="sr-only">Home</span>
              YourBrand
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `transition hover:text-indigo-600 dark:hover:text-indigo-400 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-medium"
                          : "text-gray-500 dark:text-gray-400"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `transition hover:text-indigo-600 dark:hover:text-indigo-400 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-medium"
                          : "text-gray-500 dark:text-gray-400"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `transition hover:text-indigo-600 dark:hover:text-indigo-400 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-medium"
                          : "text-gray-500 dark:text-gray-400"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `transition hover:text-indigo-600 dark:hover:text-indigo-400 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-medium"
                          : "text-gray-500 dark:text-gray-400"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
               {!!user && (
                <div className="sm:flex sm:gap-4 items-center">
                  <p className="text-gray-500 dark:text-gray-400">{user?.user_metadata?.full_name}</p>
                  <button                    
                    className="cursor-pointer text-sm hover:text-indigo-800 bg-indigo-600 px-2 py-2 rounded-sm text-white"
                    onClick={handleSignOut}
                  >Cerrar Sesión</button>
                </div>
              )}
              {!user && !isLoading  &&  (                
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-indigo-200 dark:hover:shadow-none"
                    to="/login"
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 dark:bg-gray-800 dark:text-indigo-400 transition hover:text-indigo-700 dark:hover:text-indigo-300"
                      to="/sign-up"
                    >
                      Register
                    </Link>
                  </div>
                </div>  
               )}
  


              <div className="block md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-4">
            <nav aria-label="Global">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="block text-sm text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block text-sm text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block text-sm text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-sm text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
