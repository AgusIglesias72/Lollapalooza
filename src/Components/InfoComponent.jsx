import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoComponent() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl">
        <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80 mb-5">
          {/* <!-- content - start --> */}
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Kidzapalooza
            </h2>

            <p class="mb-8 max-w-md text-gray-400">
              Los más chicos viven su propio festival con una agenda llena de
              actividades y talleres para disfrutar en familia.
            </p>

            <div class="mt-auto">
              <Link
                href="https://www.lollapaloozaar.com/kidzapalooza"
                class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Conocer
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <img
              src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/62b9c26f869bc7c25ce5f387_LOLLA_ARG2022_0318_174628-9676_GuiU.jpg"
              loading="lazy"
              alt="Photo by Dom Hill"
              class="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </div>

        <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
          {/* <!-- content - start --> */}
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 class="mb-4 text-xl text-end font-bold text-white md:text-2xl lg:text-4xl">
              Lolla Food
            </h2>

            <p class="mb-8 max-w-md text-end text-gray-400">
              Propuestas gastronómicas de los chefs argentinos más reconocidos
              del mundo para disfrutar de los mejores sabores mientras escuchas
              a tu artista favorito.
            </p>

            <div class="mt-auto text-end">
              <Link
                to="https://www.lollapaloozaar.com/"
                class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Conocer
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div class="order-first h-48 w-full bg-gray-700 sm:order-first sm:h-auto sm:w-1/2 lg:w-3/5">
            <img
              src="https://media.gettyimages.com/id/604507582/es/foto/visitors-take-photos-of-their-food-during-the-second-day-of-lollapalooza-festival-at-the.jpg?s=612x612&w=0&k=20&c=HTAHN2edgM4JWjJhXajADM5_yAHqmDOAyHGksAnI1Rs="
              loading="lazy"
              alt="Photo by Dom Hill"
              class="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  )
}
