import '../styles/ProvidersMain.css';
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'
import LocationMenu from '../components/LocationMenu'
import { useState } from 'react';

function BrowseProviders({locations, selectedLocation, localProviders, setSelectedLocation}) {
  const [menuState, setMenuState] = useState(false);

  function toggleMenu() {
    let show = menuState ? false : true
    setMenuState(show)
  }

  return (
    <div className="App">
        <div>
            <Header 
              toggleMenu={toggleMenu}
              location={selectedLocation}
            />
        </div>
        {menuState && 
        <div className="location-menu">
            <LocationMenu
              locations={locations}
              selectLocation={(location) => setSelectedLocation(location)}
            />
        </div>
        }
      <ProvidersList
        location={selectedLocation}
        localProviders={localProviders}
      />
    </div>
  );
}

export default BrowseProviders;