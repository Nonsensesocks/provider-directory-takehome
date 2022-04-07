import '../styles/Provider.css';
import Avatar from '@mui/material/Avatar';

function ProviderMini(props){
    const { provider } = props
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
        return bio.substring(0, 175);
    }
    
    return (
    <div className="provider-container" onClick={props.onClick}>
        <div className="provider-header">
            <div className="avatar-container">
                <Avatar alt={provider.name} src={avatarUrl} className="avatar"/>
            </div>
            <div className="provider-name-title">
                {provider.name}, {provider.title}
            </div>
            <div className="provider-desi">
                {provider.designation}
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