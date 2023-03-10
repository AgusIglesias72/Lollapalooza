export default function MapLocation() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          style={{ height: '30rem' }}
          className="w-full  bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13155.520113998677!2d-58.5207523!3d-34.4805676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb040d363f587%3A0x78e513cecbc25f7f!2sHip%C3%B3dromo%20de%20San%20Isidro!5e0!3m2!1sen!2sar!4v1678401051515!5m2!1sen!2sar"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className=" px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Av. Bernabé Márquez 700, B1642 San Isidro, Provincia de Buenos
                Aires
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
