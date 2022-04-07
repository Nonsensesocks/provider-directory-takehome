import '../styles/Location.css';
import LocationOn from '@mui/icons-material/LocationOn';

function Location({selectedLocation, locationClick}) {
    return (
    <div className="container" onClick={() => locationClick()} >
        <div className="location">
            <LocationOn className="icon" color="primary" fontSize="13px"/>
            <label>
                {selectedLocation}
            </label>
        </div>
    </div>
    )
  }
  
  export default Location;