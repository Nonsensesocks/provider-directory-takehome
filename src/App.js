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
  const [fullProvider, setFullProvider] = useState();
  
  useEffect(() => {
    fetchProviderLocation().then((result) => setLocationOptions(result));
  }, [])

  useEffect(() => {
    fetchProviders().then((result) => {
      const filtered = result.filter(
        ({location}) => (location.split(',')[1]).trim() === selectedLocation
      )
      setLocalProviders(filtered)
      }
    );
  }, [selectedLocation])

  useEffect(() => {
    if (selectedProvider) {
      fetchProvider(selectedProvider.id).then((result) => setFullProvider(result))
    }
  }, [selectedProvider])

  useEffect(() => {
    setPage(page)
  }, [page])
  
  function openProvider(selProvider) {
    if(!fullProvider || selProvider.id !== fullProvider.id) {
      setFullProvider()
    }
    setSelectedProvider(selProvider)
    setPage('viewProvider')
    document.documentElement.scrollTop = 0;
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
          provider={fullProvider}
          setPage={setPage}
        />
      </div>
    );
  }
}

export default App;
