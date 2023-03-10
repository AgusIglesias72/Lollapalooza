import React from 'react'
import { Link } from 'react-router-dom'

function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mx-auto flex flex-col items-center text-center">
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link
            to="http://concerts.livenation.com/h/terms.html"
            target="_blank"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Términos y Condiciones
          </Link>

          <Link
            to="https://www.lollapaloozaar.com/privacy"
            target="_blank"
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </div>
  )
}

function BannerConsulta() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
          <div className="mb-4 sm:mb-8 lg:mb-0">
            <h2 className="text-center text-lg font-bold text-indigo-500 sm:text-xl lg:text-left lg:text-2xl py-2">
              ¿Tu consulta no está incluida aquí?
            </h2>
            <p className="text-center text-sm text-gray-500 lg:text-left px-2 md:px-0">
              Visita la página oficial de contacto para obtener más información.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end w-1/2 md:w-1/3">
            <Link
              to="https://www.lollapaloozaar.com/contact"
              target="_blank"
              className="w-full"
            >
              <button className="inline-block w-full rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Sitio Oficial
              </button>
            </Link>

            <p className="text-center text-xs text-gray-400 lg:text-right"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Questions() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Preguntas Frecuentes
        </h2>

        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Estas son algunas de las preguntas más frecuentes acerca del
          Lollapalooza Argentina 2023, esperamos que te ayuden a disfrutar del
          festival al máximo
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
        {/* <!-- question - start --> */}

        <div className="rounded-lg bg-gray-100 p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-md">
              ¿Cuándo y dónde se realizará el festival?
            </h3>

            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="text-gray-500 text-justify">
            Podrás disfrutar del festival Lollapalooza Argentina el{' '}
            <b>17, 18 y 19 de marzo del 2023</b>. <br /> <br /> El mismo se
            realizará en el Hipódromo de San Isidro, ubicado en Av. Bernabé
            Márquez 700, San Isidro, Provincia de Buenos Aires.
          </p>
        </div>
        {/* <!-- question - end --> */}

        {/* <!-- question - start --> */}
        <div className="rounded-lg bg-gray-100 p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-md">
              ¿A partir de qué edad pueden ingresar menores al festival?
            </h3>

            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="text-gray-500 text-justify">
            Podrán ingresar niños <b>de hasta 10 años inclusive</b>, o niños que
            cumplan los <b>11 años durante el festival</b> (17, 18 y 19 de marzo
            de 2023), acompañados de un adulto con entrada.
            <br />
            <br /> El deber de supervisión permanece en todo momento bajo
            responsabilidad de los padres o la persona acompañante.
          </p>
        </div>
        {/* <!-- question - end --> */}

        {/* <!-- question - start --> */}
        <div className="rounded-lg bg-gray-100 p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-md">
              ¿Cómo autorizo a un tercero a retirar mis entradas?
            </h3>

            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="text-gray-500 text-justify">
            El titular de la compra podrá autorizar a un tercero para que retire
            sus entradas con una nota constatada por un{' '}
            <b>escribano o por la entidad bancaria emisora de la tarjeta</b> con
            la cual fue realizada la compra, en la cual figure el DNI de la
            persona que realiza el retiro.
            <br />
            <br />
            Esta persona podrá acercarse, con la nota y el DNI en mano, a
            retirar dichas entradas en los{' '}
            <Link
              to="https://www.allaccess.com.ar/puntos-de-venta"
              target="_blank"
            >
              <span className="text-indigo-500">
                puntos de venta habilitados
              </span>
            </Link>{' '}
          </p>
        </div>
        {/* <!-- question - end --> */}

        {/* <!-- question - start --> */}
        <div className="rounded-lg bg-gray-100 p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-md">
              ¿Cuándo puedo retirar mi/s pulsera/s?
            </h3>

            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="text-gray-500">
            Ya comenzó el envío y retiro de pulseras
            <br /> <br /> Los centros de canje habilitados son:
            <br />
            <br />
            <b>La Rural - Av. Santa Fe 4201</b> - Lunes a Viernes de 12 a 19hs
            Dot <br />
            <b>Baires Shopping - Vedia 3600</b> - Todos los días de de 10 a 22hs{' '}
            <br />
            <br />
            <Link
              to="https://www.allaccess.com.ar/puntos-de-venta"
              target="_blank"
            >
              <span className="text-indigo-500">Más información</span>
            </Link>
          </p>
        </div>
        {/* <!-- question - end --> */}

        {/* <!-- question - start --> */}
        <div className="rounded-lg bg-gray-100 p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-md">
              ¿Cuántas entradas puedo adquirir por compra?
            </h3>

            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="text-gray-500 text-justify">
            Es posible adquirir hasta <b>4 entradas por compra</b>. <br />{' '}
            <br />
            Saca tus entradas y encontrá toda la información al respecto{' '}
            <Link
              to="https://www.allaccess.com.ar/event/lollapalooza-2023"
              target="_blank"
            >
              <span className="text-indigo-500">en este link</span>
            </Link>
          </p>
        </div>
        {/* <!-- question - end --> */}

        {/* <!-- question - start --> */}
        <div className="rounded-lg bg-gray-100 p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-md">
              ¿Cómo acreditar un menor para el festival?
            </h3>

            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="text-gray-500">
            Es necesario realizar la acreditación para menores que asistan al
            recital. Podrás encontrar toda la información relacionada{' '}
            <Link
              to="https://www.lollapaloozaar.com/kidzapalooza"
              target="_blank"
            >
              <span className="text-indigo-500">en este link</span>
            </Link>
          </p>
        </div>
        {/* <!-- question - end --> */}
      </div>
    </div>
  )
}

export default function FAQMain() {
  return (
    <div className="bg-white py-2 sm:py-2 lg:py-2">
      <Questions />

      <BannerConsulta />

      <TermsAndConditions />
    </div>
  )
}
