import '../styles/Provider.css';
import Avatar from '@mui/material/Avatar';
import { truncateText } from '../utility/formatter';

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
            {truncateText(bio, 165)}
        </div>
        <div className="availability">
            {availabilityPresenter()}
        </div>
    </div>
    )
  }
  
  export default ProviderMini;