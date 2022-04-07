import '../styles/Provider.css';
import ProviderMini from './ProviderMini';

function ProviderList(props){
    const {location, localProviders} = props

    const numberOfProviders = localProviders ? localProviders.length : false
    function openProvider(provider) {
        console.log(provider)
    }

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
                            onClick={() => openProvider(provider)
                        }/>
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