export default function VideoGallery() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-5xl">
            Reviví el 2022
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Disfruta de lo mejor de los recitales anteriores del Lollapalooza
            Argentina con nuestra selección de videos destacados, que te
            transportarán hacia una experiencia musical única e irrepetible.
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-2 justify-center align-center">
          <iframe
            width="450"
            height="315"
            src="https://www.youtube.com/embed/cAqz7MHKWTA"
            title="#LollaAR 2022  Recap Día 1 | Lollapalooza"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            // classNameName="h-full w-full object-cover object-center rounded"
          ></iframe>

          <iframe
            width="450"
            height="315"
            src="https://www.youtube.com/embed/JRVmy9yqWvE"
            title="#LollaAR 2022 Recap Día 2 | Lollapalooza"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            width="450"
            height="315"
            src="https://www.youtube.com/embed/ORHckoQPMHA"
            title="#LollaAR 2022 Recap Día 3 | Lollapalooza"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
