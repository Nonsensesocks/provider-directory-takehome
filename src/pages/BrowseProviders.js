import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'

function BrowseProviders({locations, selectedLocation, localProviders, setSelectedLocation, setSelectedProvider}) {
  return (
    <div>
      <Header 
        setSelectedLocation={setSelectedLocation}
        location={selectedLocation}
        locations={locations}
      />
      <ProvidersList
        location={selectedLocation}
        localProviders={localProviders}
        openProvider={(provider) => setSelectedProvider(provider)}
      />
    </div>
  );
}

export default BrowseProviders;