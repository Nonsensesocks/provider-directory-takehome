import '../styles/Location.css';
import LocationOn from '@mui/icons-material/LocationOn';

function LocationChip({selectedLocation, locationClick}) {
  function locationAbbr(){
      switch (selectedLocation) {
      case('Ontario'):
          return 'ON'
      case('Quebec'):
          return 'QC';
      case('Alberta'):
          return 'AB';
      default:
          return 'ON';
      }
  }

    return (
    <div className="container" onClick={locationClick} >
        <div className="location">
            <LocationOn
              className="icon"
              htmlColor='#6277F0'
              fontSize="13px"
            />
            <label>
                {selectedLocation && locationAbbr()}
            </label>
        </div>
    </div>
    )
  }
  
  export default LocationChip;