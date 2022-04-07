import './App.css';
import { fetchProviderLocation,fetchProviders} from "./api";
import { useState, useEffect } from 'react';
import BrowseProviders from './pages/BrowseProviders'

function App() {
  const defaultLocation = 'Ontario'
  const [locations, setLocationOptions] = useState();
  const [localProviders, setLocalProviders] = useState();
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  
  useEffect(() => {
    // Gets locations from the mock data to display in location dropdowns
    fetchProviderLocation().then((result) => setLocationOptions(result));
    // Fetch providers, then filter the results based on the selected location
    fetchProviders().then((result) => {
        const filtered = result.filter(({location}) => (location.split(',')[1]).trim() === defaultLocation)
        setLocalProviders(filtered)
      }
    );
  }, [])

  return (
    <div className="App">
      <BrowseProviders
        locations={locations}
        selectedLocation={selectedLocation}
        localProviders={localProviders}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
}

export default App;
