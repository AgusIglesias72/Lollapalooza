import { Link } from 'react-router-dom'

export default function BannerSpotify() {
  return (
    <div className="bg-white pt-6 lg:pt-12">
      <div
        className="mx-auto max-w-screen-2xl px-4 pb-4 md:px-8"
        style={{ maxWidth: '40rem' }}
      >
        <div
          style={{ backgroundColor: '#1DB954' }}
          className="relative flex flex-wrap  rounded-full px-1 py-1 shadow-lg sm:flex-nowrap sm:items-center sm:justify-around sm:gap-3"
        >
          <div
            className="p-2 rounded-full w-full flex flex-row justify-between "
            style={{ backgroundColor: '#191414' }}
          >
            <div className="justify-self-start">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                loading="lazy"
                alt="Spotify Logo"
                className="h-12 w-12 "
              />
            </div>

            <Link
              style={{ backgroundColor: '#1DB954' }}
              target="_blank"
              to="https://open.spotify.com/user/lollapaloozaar"
              className="btn rounded-full text-white text-sm font-semibold hover:bg-gray-800 hover:text-white"
            >
              Playlist Oficial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
