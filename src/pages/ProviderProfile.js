import '../styles/Profile.css';
import defaultImage from '../resource/profile.jpg';
import BreadNavigation from '../components/BreadNavigation.js'
import ReadMore from '../components/ReadMore.js'
import { Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';

function ProviderProfile({ provider, setPage }) {
    const { 
        education,
        languages,
        location,
        bio,
        designation,
        name: providerName,
        title,
    } = provider

    return (
    <div className="profile-container">
        <BreadNavigation
            profileTitle={`${providerName}, ${title}`}
            setPage={setPage}
        />
        <div className="flex">
            <img src={defaultImage} alt="profile" className="profile-image"/>
            <div className="card">
                <div className="top-card">
                    <div className="profile-header">
                        <div className="profile-name-title">
                            {providerName}, {title}
                        </div>
                    </div>
                    <div className="profile-desi">
                        {designation}
                    </div>
                    <ReadMore text={bio} />
                </div>
                <div className="bot-card">
                    <div>
                        <p className="detail-label">Location</p>
                        <div className="detail-container">
                            <MapIcon className="detail-icon" />
                            {location}
                        </div>
                    </div>
                    <div>
                        <p className="detail-label">Education</p>
                        <div className="detail-container"> 
                            <SchoolIcon className="detail-icon" />
                            <p className="detail">{education}</p>
                        </div>
                    </div>
                    <div>
                        <p className="detail-label">Language</p>
                        <div className="detail-container"> 
                            <LanguageIcon className="detail-icon" />
                            <p className="detail">{languages}</p>
                        </div>
                    </div>
                </div>
                <Button> Book Now </Button>
            </div>
        </div>
    </div>
  );
}

export default ProviderProfile;