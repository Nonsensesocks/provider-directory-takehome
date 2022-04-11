import '../styles/Provider.css';
import Avatar from '@mui/material/Avatar';
import { truncateText } from '../utility/formatter';

function ProviderMini({ provider, clickProvider }){
  const { availability, avatarUrl, bio } = provider
  let providerNameTitle = `${provider.name}, ${provider.title}`
  let providerNameTitleTruncate = truncateText(providerNameTitle, 30)

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
            src={avatarUrl}
            className="avatar"
          />
        </div>
        <div className="provider-name-title">
          {providerNameTitleTruncate}
          <div className="provider-designation">
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