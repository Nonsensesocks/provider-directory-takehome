import '../styles/ProvidersMain.css';
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'

function BrowseProviders(props) {
  const {locations, localProviders} = props

  return (
    <div className="App">
        <div>
            <Header locations={locations}/>
        </div>
      <ProvidersList providers={localProviders} />
    </div>
  );
}

export default BrowseProviders;