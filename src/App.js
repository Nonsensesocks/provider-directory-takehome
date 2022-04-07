import './App.css';
import { fetchProviderLocation, fetchProviders } from "./api";
import { useState, useEffect } from 'react';
import BrowseProviders from './pages/BrowseProviders'

function App() {
  const selectedLocation = 'Ontario'
  const [locations, setLocationOptions] = useState();
  const [localProviders, setLocalProviders] = useState();
  
  useEffect(() => {
    // get list of provinces for location dropdown
    fetchProviderLocation().then((result) => setLocationOptions(result));

    fetchProviders().then((result) => {
        const filtered = result.filter(({location}) => (location.split(',')[1]).trim() === selectedLocation)
        setLocalProviders(filtered)
      }
    );
  }, [])

  return (
    <div className="App">
      <BrowseProviders locations={locations} localProviders={localProviders}/>
    </div>
  );
}

export default App;
