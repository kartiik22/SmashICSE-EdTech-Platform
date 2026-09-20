import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropdown";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileClassOpen, setMobileClassOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data?.data || []);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
        setSubLinks([]);
      }
      setLoading(false);
    })();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileClassOpen(false);
  }, [location.pathname]);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <header
      className={`relative z-50 flex h-14 items-center justify-center border-b-[1px] border-b-richblack-800 ${
        location.pathname !== "/" ? "bg-black/95 backdrop-blur-md" : "bg-black/40 backdrop-blur-sm"
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Smash ICSE Logo"
            className="w-[125px] sm:w-[160px] h-auto object-contain"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25 items-center">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Class" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 font-oswald font-bold uppercase tracking-wide transition-colors ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-[#22c44c]"
                        : "text-richblack-25 hover:text-[#22c44c]"
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown className="transition-transform group-hover:rotate-180" />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[220px] translate-x-[-50%] translate-y-[3em] flex-col rounded-xl bg-richblack-800 border border-richblack-700 p-3 text-richblack-25 opacity-0 shadow-2xl transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[-50%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-800 border-l border-t border-richblack-700"></div>
                      {loading ? (
                        <p className="text-center py-2 text-sm text-richblack-300">Loading courses...</p>
                      ) : subLinks.length ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length >= 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg px-4 py-3 text-sm hover:bg-richblack-700 hover:text-[#22c44c] transition-colors"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center py-2 text-sm text-richblack-300">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`transition-colors hover:text-[#22c44c] ${
                        matchRoute(link?.path) ? "text-[#22c44c]" : "text-richblack-25"
                      }`}
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "700",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                      }}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}

            {/* Cart Icon */}
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <li>
                <Link to="/dashboard/cart" className="relative p-1 inline-block">
                  <AiOutlineShoppingCart className="text-2xl text-richblack-100 hover:text-[#22c44c] transition-colors" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-[#22c44c] text-center text-[10px] font-bold text-black">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-3 md:flex">
          {token === null && (
            <Link to="/login">
              <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-4 py-2 text-sm font-medium text-richblack-100 hover:border-richblack-500 transition-colors">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-lg bg-[#22c44c] px-4 py-2 text-sm font-semibold text-richblack-900 hover:bg-[#1fa940] transition-colors">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>

        {/* Mobile Header Actions (Cart + Hamburger) */}
        <div className="flex items-center gap-x-3 md:hidden">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative p-1.5 text-richblack-100">
              <AiOutlineShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-[#22c44c] text-[10px] font-bold text-black">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token !== null && (
            <div className="scale-90">
              <ProfileDropdown />
            </div>
          )}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="rounded-lg p-2 text-richblack-100 hover:bg-richblack-800 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <AiOutlineClose fontSize={22} fill="#AFB2BF" />
            ) : (
              <AiOutlineMenu fontSize={22} fill="#AFB2BF" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (iPhone 16 and all mobile screens) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-50 flex flex-col border-b border-richblack-800 bg-black/95 p-5 shadow-2xl backdrop-blur-xl md:hidden max-h-[calc(100vh-3.5rem)] overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col gap-y-3">
            {NavbarLinks.map((link, index) => (
              <div key={index} className="border-b border-richblack-800/60 pb-2.5">
                {link.title === "Class" ? (
                  <div>
                    <button
                      onClick={() => setMobileClassOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between py-1.5 text-left font-oswald text-base font-bold uppercase tracking-wider text-richblack-25"
                    >
                      <span className={matchRoute("/catalog/:catalogName") ? "text-[#22c44c]" : ""}>
                        {link.title}
                      </span>
                      <BsChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          mobileClassOpen ? "rotate-180 text-[#22c44c]" : "text-richblack-300"
                        }`}
                      />
                    </button>

                    {/* Expandable Categories on Mobile */}
                    {mobileClassOpen && (
                      <div className="mt-2 flex flex-col pl-4 gap-y-2 border-l-2 border-richblack-700">
                        {loading ? (
                          <p className="text-sm text-richblack-400 py-1">Loading courses...</p>
                        ) : subLinks.length ? (
                          subLinks
                            ?.filter((subLink) => subLink?.courses?.length >= 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                key={i}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm text-richblack-200 hover:text-[#22c44c] py-1 transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))
                        ) : (
                          <p className="text-sm text-richblack-400 py-1">No Courses Found</p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link?.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 font-oswald text-base font-bold uppercase tracking-wider transition-colors ${
                      matchRoute(link?.path) ? "text-[#22c44c]" : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            {token === null ? (
              <div className="mt-4 flex flex-col gap-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center rounded-lg border border-richblack-700 bg-richblack-800 py-2.5 text-sm font-semibold text-richblack-100 active:scale-95 transition-all"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center rounded-lg bg-[#22c44c] py-2.5 text-sm font-semibold text-richblack-900 active:scale-95 transition-all"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="mt-2 pt-2">
                <Link
                  to="/dashboard/my-profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center rounded-lg border border-richblack-700 bg-richblack-800 py-2.5 text-sm font-medium text-richblack-100"
                >
                  Go to Dashboard
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;