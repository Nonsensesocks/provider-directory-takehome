import '../styles/Location.css';
import LocationMenu from './LocationMenu'
import LocationOn from '@mui/icons-material/LocationOn';
import { useState } from 'react';

function Location({selectedLocation, locations}) {
    let show = true;
    const [menuState, setMenuState] = useState(false);

    return (
    <div className="container" onClick={() => setMenuState(!menuState)} >
        <div className="location">
            <LocationOn className="icon" color="primary" fontSize="13px"/>
            <label>
                {selectedLocation}
            </label>
        </div>
        {menuState && <LocationMenu locations={locations} show={show}/>}
    </div>
    )
  }
  
  export default Location;