import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setNavStatus(false)
  }, [location])

  const menuOptions = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Galería',
      path: '/gallery',
    },
    {
      name: 'Información',
      path: '/info',
    },
    {
      name: 'FAQs',
      path: '/preguntas-frecuentes',
    },
  ]

  const toggleNav = () => {
    setNavStatus(!navStatus)
  }

  return (
    <nav className="bg-white py-2 rounded fixed top-0 z-50 w-full">
      <div className="container flex flex-wrap items-center justify-between max-w-screen-2xl px-4 md:px-8 mx-auto">
        <Link
          to="https://www.lollapaloozaar.com/"
          className="flex items-center"
        >
          <img
            src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/61648208fbba11062a19f0ce_logo-lolla-b5ed578f.png"
            className="h-6 mr-3 sm:h-9"
            alt="Lollapalooza Logo"
          />
          <span className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"></span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNav}
        >
          <span className="sr-only">Abrir Menú</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${navStatus ? '' : 'hidden'} w-full md:block md:w-auto `}
          id="navbar-default"
        >
          <ul className="flex flex-col gap-2 md:gap-0 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:justify-center md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white">
            {menuOptions.map((option) => {
              return (
                <li key={option.name}>
                  <Link
                    to={option.path}
                    onClick={
                      location.pathname === option.path
                        ? null
                        : () => window.scrollTo(0, 0)
                    }
                    className={
                      location.pathname === option.path
                        ? 'block py-3 md:py-1  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 pl-4 md:pl-0'
                        : 'block py-3 md:py-1  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 pl-4 md:pl-0'
                    }
                  >
                    {option.name}
                  </Link>
                </li>
              )
            })}

            <li>
              <a
                href="https://www.lollapaloozaar.com/"
                target="_blank"
                className="block py-3 md:py-1 pl-3 pr-4 text-gray-700 font-bold rounded bg-gray-300 md:hover:bg-gray-400 md:border-0 md:hover:text-gray-800 "
              >
                Sitio Oficial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
