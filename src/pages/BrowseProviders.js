import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'

function BrowseProviders({locations, selectedLocation, localProviders, setSelectedLocation, setSelectedProvider}) {
  return (
    <div>
        <div>
            <Header 
              setSelectedLocation={setSelectedLocation}
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