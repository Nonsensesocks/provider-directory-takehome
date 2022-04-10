import '../styles/ProvidersMain.css';
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'

function BrowseProviders({locations, selectedLocation, localProviders, setSelectedLocation, setSelectedProvider}) {
  function setLocation(location) {
    console.log(location)
    setSelectedLocation(location)
  }

  return (
    <div className="App">
        <div>
            <Header 
              setSelectedLocation={setLocation}
              location={selectedLocation}
              locations={locations}
            />
        </div>
      <ProvidersList
        location={selectedLocation}
        localProviders={localProviders}
        openProvider={(provider) => setSelectedProvider(provider)}
      />
    </div>
  );
}

export default BrowseProviders;