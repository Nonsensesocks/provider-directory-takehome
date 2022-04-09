import '../styles/ProvidersMain.css';
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'
import LocationMenu from '../components/LocationMenu'
import { useState } from 'react';

function BrowseProviders({locations, selectedLocation, localProviders, setSelectedLocation, setSelectedProvider}) {
  const [menuState, setMenuState] = useState(false);

  function toggleMenu() {
    let show = menuState ? false : true
    setMenuState(show)
  }
  
  function selectLocation(location) {
    toggleMenu()
    setSelectedLocation(location)
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
              selectLocation={(location) => selectLocation(location)}
            />
        </div>
        }
      <ProvidersList
        location={selectedLocation}
        localProviders={localProviders}
        openProvider={(provider) => setSelectedProvider(provider)}
      />
    </div>
  );
}

export default BrowseProviders;