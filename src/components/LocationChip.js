import '../styles/LocationMenu.css';
import LocationOn from '@mui/icons-material/LocationOn';
import { provinceAbbreviation } from '../utility/formatter';

function LocationChip({selectedLocation, locationClick}) {
  return (
    <div
      className="location"
      onClick={locationClick}
    >
      <LocationOn
        className="icon"
        htmlColor='#6277F0'
        fontSize="13px"
      />
      <label>
        {selectedLocation && provinceAbbreviation(selectedLocation)}
      </label>
    </div>
  )
}
  
export default LocationChip;