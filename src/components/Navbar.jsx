import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Departments", path: "/departments" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-fluid">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-19 rounded-lg bg-primary-600 grid place-items-center text-white font-bold">APSIT</div>
            <h1 className="text-lg font-semibold">A. P. Shah Institute</h1>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link key={item.name} className="hover:text-primary-600" to={item.path}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-t">
            <ul className="flex flex-col">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link onClick={() => setOpen(false)} to={item.path} className="block px-2 py-2">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
