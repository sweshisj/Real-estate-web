import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
const [menuOpen, setMenuOpen] = useState<boolean>(false);

return (
<>
<div className="fixed top-0 left-0 w-full z-50 h-[100px] bg-white shadow-lg flex items-center justify-between px-4 md:px-8">
<img className="w-[190px] h-[55px] cursor-pointer" src="Screenshot 2025-07-01 111212.png" alt="Logo" />
<div className="hidden md:flex gap-12">
<Link
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
to="/"
className="text-lg font-bold transition-all duration-300 hover:text-green-600 hover:text-xl cursor-pointer"
>
Home
</Link>
<Link
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
to="/client"
className="text-lg font-bold transition-all duration-300 hover:text-green-600 hover:text-xl cursor-pointer"
>
Clients
</Link>
<Link
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
to="/project"
className="text-lg font-bold transition-all duration-300 hover:text-green-600 hover:text-xl cursor-pointer"
>
Projects
</Link>
<Link
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
to="/about"
className="text-lg font-bold transition-all duration-300 hover:text-green-600 hover:text-xl cursor-pointer"
>
About Us
</Link>
</div>


    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="text-neutral-800 focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>
    </div>
  </div>

  {menuOpen && (
    <div className="fixed top:[100px] top-[100px] left-0 w-full bg-white shadow-lg z-40 md:hidden">
      <div className="flex flex-col py-4 space-y-2 px-4">
        {[
          { to: "/", label: "Home" },
          { to: "/client", label: "Clients" },
          { to: "/project", label: "Projects" },
          { to: "/about", label: "About Us" },
        ].map((link) => (
          <Link
            key={link.to}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            to={link.to}
            className="text-lg font-bold text-neutral-700 hover:text-green-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )}
</>
);
}

export default Navbar;