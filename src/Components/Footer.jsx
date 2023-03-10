import { Link } from 'react-router-dom'
import BannerSpotify from './BannerSpotify'

export default function Footer() {
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

  return (
    <>
      <BannerSpotify />
      <footer className="bg-indigo-500 ">
        <div className="pt-12 lg:pt-16">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-16"> */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-8 mb-16">
              <div className="col-span-full lg:col-span-2 place-items-center w-full md:w-1/3">
                <div className="lg:-mt-2 mb-4 flex justify-center md:justify-start">
                  <Link
                    to="https://www.lollapaloozaar.com/"
                    className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2"
                  >
                    <img
                      src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/61648208fbba11062a19f0ce_logo-lolla-b5ed578f.png"
                      className="h-6 mr-3 sm:h-9"
                      alt="Lollapalooza Logo"
                    />
                    <span className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"></span>
                  </Link>
                </div>

                <p className="text-white  mb-6 text-center md:text-left px-12 md:px-0">
                  Seguí al Lollapalooza Argentina 2023 en redes sociales y no te
                  pierdas ninguna novedad
                </p>

                <div className="flex flex-row gap-4 justify-center md:justify-start">
                  <Link
                    to="http://instagram.com/lollapaloozaar"
                    target="_blank"
                    className="text-white hover:text-gray-700 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>

                  <Link
                    to="http://twitter.com/lollapaloozaar"
                    target="_blank"
                    className="text-white hover:text-gray-700 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>

                  <Link
                    to="http://www.facebook.com/lollapaloozaar"
                    target="_blank"
                    className="text-white hover:text-gray-700 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="h-5 w-5 "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z" />
                    </svg>
                  </Link>

                  <Link
                    to="http://youtube.com/lollapaloozaar"
                    target="_blank"
                    className="text-white hover:text-gray-700 active:text-gray-600 transition duration-100"
                  >
                    <svg
                      className="h-5 w-5 "
                      width="24"
                      height="24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 461.001 461.001"
                    >
                      <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"></path>{' '}
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-between w-full px-4 md:w-2/3 sm:justify-around md:justify-end md:gap-28">
                <div>
                  <div className="text-white font-bold tracking-widest uppercase mb-4 text-xl">
                    Menú
                  </div>

                  <nav className="flex flex-col gap-4">
                    {menuOptions.map((option, index) => (
                      <div key={index}>
                        <Link
                          to={option.path}
                          className="text-white hover:text-black active:text-indigo-800 transition duration-100"
                        >
                          {option.name}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>

                <div>
                  <div className="text-white font-bold tracking-widest uppercase mb-4 text-xl">
                    Links Útiles
                  </div>

                  <nav className="flex flex-col gap-4">
                    <Link
                      to="https://www.lollapaloozaar.com/"
                      target="_blank"
                      className="text-white hover:text-black active:text-indigo-800 transition duration-100"
                    >
                      Página Oficial
                    </Link>
                    <Link
                      to="https://www.allaccess.com.ar/event/lollapalooza-2023"
                      target="_blank"
                      className="text-white hover:text-black active:text-indigo-800 transition duration-100"
                    >
                      Comprar Entradas
                    </Link>
                    <Link
                      to="https://www.lollapaloozaar.com/lineup"
                      target="_blank"
                      className="text-white hover:text-black active:text-indigo-800 transition duration-100"
                    >
                      Line Up
                    </Link>
                    <Link
                      to="https://www.lollapaloozaar.com/"
                      target="_blank"
                      className="text-white hover:text-black active:text-indigo-800 transition duration-100"
                    >
                      Contacto
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            <div className="text-white text-sm text-center border-t py-8">
              © 2023 - Agustín Iglesias.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
