import '../styles/Provider.css';
import ProviderMini from './ProviderMini';
import Loading from './Loading';

function ProviderList({location, localProviders, openProvider}){
  const numberOfProviders = localProviders ? localProviders.length : false
  const providers = numberOfProviders > 1 ? 'providers' : 'provider'
  
  if(numberOfProviders > 0) {
    return (
      <div className="list">
        <div className="provider-count">
          <span className="bold">{numberOfProviders}</span> {providers} in {location}
        </div>
        <div>
          {(localProviders || []).map((provider, key) =>
            <ProviderMini 
              provider={provider}
              key={key} 
              clickProvider={() => openProvider(provider)}
            />
          )}
        </div>
      </div>
    )
  } else {
    return (
      <Loading />
    )
  }
  }
  
  export default ProviderList;