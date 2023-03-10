import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoTop() {
  return (
    <div className="bg-white pb-8">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
          {/* <!-- image - start --> */}
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              src="https://media.gettyimages.com/id/1234300939/es/foto/general-atmosphere-on-day-one-of-lollapalooza-at-grant-park-on-july-29-2021-in-chicago-illinois.jpg?s=612x612&w=0&k=20&c=08Wi-WXhEFZrQFiz2diWgC22LjRoPfZSM6NAPRQIZZQ="
              loading="lazy"
              alt="Photo by Andras Vas"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- content - start --> */}
          <div className="grid grid-cols-1 gap-4 content-around px-8 py-6 sm:w-1/2  lg:w-3/5">
            <div className="grid place-items-center pb-4">
              <img
                src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/61648208fbba11062a19f0ce_logo-lolla-b5ed578f.png"
                className="w-72 h-auto"
                alt="Lollapalooza Logo"
              />
            </div>
            <p className="mb-8 text-gray-600 text-center w-full">
              3 días, 5 escenarios y más de 100 bandas de todo el mundo. Los
              mejores shows en vivo, los más variados sabores y un sinfín de
              experiencias.
            </p>

            <div className="flex justify-center">
              <Link
                to="https://www.allaccess.com.ar/event/lollapalooza-2023"
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Comprar Entradas
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  )
}
