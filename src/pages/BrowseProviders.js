import '../styles/ProvidersMain.css';
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'
import LocationMenu from '../components/LocationMenu'
import { useState } from 'react';

function BrowseProviders(props) {
  const {locations, localProviders} = props
  const [menuState, setMenuState] = useState(false);

  function toggleMenu() {
    let show = menuState ? false : true
    setMenuState(show)
  }

  return (
    <div className="App">
        <div>
            <Header locations={locations} toggleMenu={toggleMenu}/>
        </div>
        {menuState && 
        <div className="location-menu">
            <LocationMenu locations={locations}/>
        </div>
        }
      <ProvidersList providers={localProviders} />
    </div>
  );
}

export default BrowseProviders;