import '../styles/Provider.css';
import ProviderMini from './ProviderMini';

function ProviderList(props){
    const {providers} = props
    const numberOfProviders = providers ? providers.length : false

    function openProvider(provider) {
        console.log(provider)
    }

    if(numberOfProviders > 0) {
        return (
            <div className="list">
                <div className="provider-count">
                    {numberOfProviders} providers in Ontario
                </div>
                <div className="cards">
                    {(providers || []).map((provider, key) =>
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
            <div>
                Loading
            </div>
        )
    }
  }
  
  export default ProviderList;