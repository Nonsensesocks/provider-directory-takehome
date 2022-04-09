import '../styles/Provider.css';
import Avatar from '@mui/material/Avatar';

function ProviderMini({ provider, clickProvider }){
    const { availability, avatarUrl, bio } = provider

    function availabilityPresenter() {
        let avail = availability.replace('-',' ');
        switch (avail) {
        case('tomorrow'):
            return `Available ${avail}`;
        case('next week'):
            return `Available in the ${avail}`;
        default:
            return `Available ${avail}`;
        }
    }

    function bioPresenter() {
        //trim the string to the maximum length
        var trimmedString = bio.substr(0, 165);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        trimmedString = trimmedString.slice(0).replace(regex, '');
        return trimmedString + '...';
    }
    
    return (
    <div className="provider-container" onClick={clickProvider}>
        <div className="provider-header">
            <div className="avatar-container">
                <Avatar
                  alt={provider.name}
                  src={avatarUrl}
                  className="avatar"
                />
            </div>
            <div className="provider-name-title">
                {provider.name}, {provider.title}
                <div className="provider-desi">
                    {provider.designation}
                </div>
            </div>
        </div>
        <div className="bio">
            {bioPresenter()}
        </div>
        <div className="availability">
            {availabilityPresenter()}
        </div>
    </div>
    )
  }
  
  export default ProviderMini;