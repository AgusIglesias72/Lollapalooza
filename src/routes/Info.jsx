import { TextContent } from '../Components/ContentMainPage'
import InfoComponent from '../Components/InfoComponent'
import InfoTop from '../Components/InfoTop'
import MapLocation from '../Components/MapLocation'

export default function Information() {
  return (
    <div className="bg-white mt-24 pt-2">
      <div className="w-full px-6 md:px-0 m-auto">
        <div className="md:w-4/5 lg:w-4/5 m-auto">
          <InfoTop />
          <TextContent />
          <InfoComponent />

          <MapLocation />
        </div>
      </div>
    </div>
  )
}
