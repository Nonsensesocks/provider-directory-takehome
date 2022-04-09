import '../styles/Provider.css';
import ProviderMini from './ProviderMini';

function ProviderList({location, localProviders, openProvider}){
    const numberOfProviders = localProviders ? localProviders.length : false
    
    if(numberOfProviders > 0) {
        return (
            <div className="list">
                <div className="provider-count">
                    {numberOfProviders} providers in {location}
                </div>
                <div className="cards">
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
            <div className="loading">
                Loading Providers 
            </div>
        )
    }
  }
  
  export default ProviderList;