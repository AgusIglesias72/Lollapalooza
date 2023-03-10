export function TextContent() {
  return (
    <div className="mx-auto order-first lg:order-none flex flex-col justify-between">
      <div className="">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          Lollapalooza Argentina 2023
        </h1>

        <div className="mb-6 text-gray-500 sm:text-lg md:mb-8 text-justify">
          <p>
            El Lollapalooza Argentina 2023 es uno de los festivales de música
            más grandes y populares del país. Este año, el festival cuenta con
            un line up impresionante, con artistas de renombre internacional
            como{' '}
            <span className="font-bold">
              Billie Eilish, Drake, Twenty One Pilots, Time Impala, Rosalía y
              muchos más
            </span>
            . Con varios escenarios y géneros musicales, el Lolapalooza
            Argentina tiene algo para todos, desde rock y pop hasta electrónica
            y hip hop.
            <br />
            <br />
            Además de la música en vivo, el festival ofrece una amplia gama de
            actividades para todos los gustos, desde áreas de comida y bebida,
            ferias de merchandaising hasta juegos interactivos y áreas de
            descanso. Prepárate para disfrutar de una experiencia musical única
            y compartir momentos inolvidables con amigos y familiares.
            <br />
            <br />
            Las entradas para el Lollapalooza Argentina 2023 están disponibles
            en la página oficial del evento, pero se recomienda adquirirlas con
            anticipación debido a la gran cantidad de artistas de renombre y la
            popularidad del festival. No pierdas la oportunidad de ser parte de
            una de las mejores experiencias musicales del año.
            <br />
            <br />
          </p>
          <p className="text-center">
            El festival se lleva a cabo en el Hipódromo de San Isidro los días
            17, 18 y 19 de marzo.
          </p>
          <br />
          <p className="text-center font-bold">
            ¡Compra tus entradas el Lollapalooza Argentina 2023 ahora mismo y
            prepárate para vivir tres días de música, diversión y mucha energía!
          </p>
        </div>
      </div>
      <a
        href="https://www.allaccess.com.ar/event/lollapalooza-2023"
        target="_blank"
      >
        <button className="btn w-full text-white cursor-pointer">
          Comprar Entradas
        </button>
      </a>
    </div>
  )
}

export default function ContentMainPage() {
  return (
    <div className="bg-white py-6 ">
      <div className="grid gap-8 lg:grid-cols-2 mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-2 rounded-lg  md:h-auto h-2/3  md:px-0">
          <div className="flex flex-col gap-4">
            <img
              src="https://media.gettyimages.com/id/1331727005/es/foto/festival-goers-attend-day-3-of-lollapalooza-at-grant-park-on-july-30-2021-in-chicago-illinois.jpg?s=612x612&w=0&k=20&c=EVf5R447sva_NcMfjveNxwJ4x7aeFgRU8ED5qILocgI="
              loading="lazy"
              alt="Picture of Lollapalooza International"
              className="h-auto w-auto object-cover object-center rounded bg-gray-100 shadow-lg max-h-96 xl:max-h-80"
            />
            <img
              src="https://media.gettyimages.com/id/1234300939/es/foto/general-atmosphere-on-day-one-of-lollapalooza-at-grant-park-on-july-29-2021-in-chicago-illinois.jpg?s=612x612&w=0&k=20&c=08Wi-WXhEFZrQFiz2diWgC22LjRoPfZSM6NAPRQIZZQ="
              loading="lazy"
              alt="Picture of Lollapalooza International"
              className="h-auto w-auto object-cover object-center rounded hidden lg:block bg-gray-100 shadow-lg xl:max-h-80"
            />
            <img
              src="https://media.gettyimages.com/id/1331402644/es/foto/max-schneider-aka-max-performs-during-lollapalooza-at-grant-park-on-july-29-2021-in-chicago.jpg?s=612x612&w=0&k=20&c=h9fE6e2z_cr66EBqv1T5LU-X9TR-zNyffgDckXD8MCk="
              loading="lazy"
              alt="Picture of Lollapalooza International"
              className="h-auto w-auto object-cover object-top rounded hidden lg:block bg-gray-100 shadow-lg xl:max-h-80"
            />
          </div>

          <a href="https://global.lollapalooza.com/" target="_blank">
            <button className="btn btn-secondary w-full ">
              Lollapalooza Internacional
            </button>
          </a>
        </div>
        <TextContent />
      </div>
    </div>
  )
}
