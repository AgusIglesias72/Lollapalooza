export default function CTALineUp() {
  return (
    <div className="bg-white py-6 ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 md:flex-row md:h-80">
          <div className="flex w-full flex-col p-4 md:w-2/5 sm:p-8 lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Line Up
              <br />
              {/* Tus artistas favoritos */}
            </h2>

            <p className="mb-8 max-w-md text-gray-400">
              ¡Prepárate para la experiencia musical del año con el line up del
              Lolapalooza Argentina 2023!
            </p>

            <div className="mt-auto">
              <a
                href="https://www.lollapaloozaar.com/lineup"
                target="_blank"
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                ¡Ver el line up completo!
              </a>
            </div>
          </div>

          <div className="order-first h-48 w-full bg-gray-700 md:order-none sm:h-auto md:w-3/5 lg:w-3/5">
            <img
              src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/63ff5001351e4be3a6d6429c_LOLLA_1920x720%20DF-p-1600.png"
              loading="lazy"
              alt="Line Up for Lollapalooza Argentina 2023"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
