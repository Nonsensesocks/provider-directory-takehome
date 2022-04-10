import LocationChip from './LocationChip'
import LocationMenu from '../components/LocationMenu'
import Popover from '@mui/material/Popover';
import { useState } from 'react';

function Header({location, locations, setSelectedLocation}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  function openLocationMenu() {
    let anchor = document.getElementById('locationChip')
    setAnchorEl(anchor);
  };

  function closeLocationMenu() {
    setAnchorEl(null);
  };

  function selectLocation(location) {
    closeLocationMenu()
    setSelectedLocation(location)
  }

  return (
    <div>
      <header className="app-header">
        <div className="header" >
          <p className="title">Browse our providers</p>
          <p className="subtitle">Mental Wellness</p>
          <div id="locationChip">
            <LocationChip
              selectedLocation={location} 
              locationClick={() => openLocationMenu()}
            />
          </div>
        </div>        
        {open && 
          <Popover
            open={open}
            onClose={closeLocationMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <LocationMenu
              locations={locations}
              selectLocation={(location) => selectLocation(location)}
            />
          </Popover>
        }
      </header>
    </div>
  );
}

export default Header;
