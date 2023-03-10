export default function Hero() {
  return (
    <div className="bg-white mt-16 md:mt-20 pt-2 pb-2">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="min-h-96 flex justify-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-14 md:py-auto xl:pb-48">
          <img
            src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/62b3402b235ca60d759da2fd_LOLLA_ARG2022_0319_143401-1714_TATU.jpg"
            loading="lazy"
            alt="Image of people enjoying a concert"
            className="w-full h-full object-cover object-center absolute inset-0"
          />

          <div className="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>

          <div className="sm:max-w-xl flex flex-col content-between  relative p-4 space-y-20">
            <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
              <img
                src="https://global-uploads.webflow.com/61648208fbba11601a19f03a/61648208fbba11062a19f0ce_logo-lolla-b5ed578f.png"
                className="mr-3 w-96 h-auto md:w-fit"
                alt="Lollapalooza Logo"
              />
            </div>

            <div className="w-full grid place-items-center">
              <a
                href="https://www.allaccess.com.ar/event/lollapalooza-2023"
                target="_blank"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 w-1/2"
              >
                Entradas
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
