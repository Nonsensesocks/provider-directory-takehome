import './App.css';
import { fetchProviderLocation, fetchProviders, fetchProvider} from "./api";
import { useState, useEffect } from 'react';
import BrowseProviders from './pages/BrowseProviders'
import ProviderProfile from './pages/ProviderProfile'

function App() {
  const [page, setPage] = useState('browseProviders');
  const [locationOptions, setLocationOptions] = useState();
  const [localProviders, setLocalProviders] = useState();
  const [selectedLocation, setSelectedLocation] = useState('Ontario');
  const [selectedProvider, setSelectedProvider] = useState();
  
  // useEffect causes these functions to only be called once
  useEffect(() => {
    // Gets locations from the mock data to display in location menu dropdown
    fetchProviderLocation().then((result) => setLocationOptions(result));
  }, [])

  useEffect(() => {
    // Fetch providers, then filter the results based on the selected location
    fetchProviders().then((result) => {
        const filtered = result.filter(({location}) => (location.split(',')[1]).trim() === selectedLocation)
        setLocalProviders(filtered)
      }
    );
  }, [selectedLocation])

  useEffect(() => {
    if (selectedProvider) {
      fetchProvider(selectedProvider.id).then((result) => setSelectedProvider(result))
    }
  }, [selectedProvider])

  useEffect(() => {
    setPage(page)
  }, [page])
  
  function openProvider(selProvider) {
    setPage('viewProvider')
    setSelectedProvider(selProvider)
  }

  if(page === 'browseProviders') {
    return (
      <div className="App">
        <BrowseProviders
          locations={locationOptions}
          selectedLocation={selectedLocation}
          localProviders={localProviders}
          setSelectedLocation={setSelectedLocation}
          setSelectedProvider={openProvider}
        />
      </div>
    );
  } else if (page === 'viewProvider') {
    return (
      <div>
        <ProviderProfile
          provider={selectedProvider}
          setPage={setPage}
        />
      </div>
    )
  }
}

export default App;
