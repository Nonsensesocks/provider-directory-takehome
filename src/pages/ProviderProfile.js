import '../styles/Profile.css';
import defaultImage from '../resource/profile.jpg';
import BreadNavigation from '../components/BreadNavigation.js'
import ReadMore from '../components/ReadMore.js'
import Loading from '../components/Loading.js'
import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';

function ProviderProfile({ provider, setPage }) {
    if(provider) {
        const { 
            education,
            languages,
            location,
            bio,
            designation,
            name: providerName,
            title,
        } = provider

        function languagePresenter(){
            if(languages && languages.length > 1) {
                return languages.join(", ");
            }
            return languages
        }

        function bookNow(){
            console.log('booking click event')
        }

        return (
            <div className="profile-container">
                <BreadNavigation
                    profileTitle={`${providerName}, ${title}`}
                    setPage={setPage}
                />
                <div className="flex">
                    <img src={defaultImage} alt="profile" className="profile-image"/>
                    <div>
                        <div className="card">
                            <div className="profile-header profile-name-title">
                                {providerName}, {title}
                            </div>
                            <div className="profile-designation">
                                {designation}
                            </div>
                            <ReadMore text={bio} />
                        </div>
                        <div className="bot-card">
                            <div className="detail-container">
                                <MapIcon className="detail-icon" />
                                <div className="detail-sub"> 
                                    <p className="detail-label">Location</p>
                                    <p className="detail">{location}</p>
                                </div>
                            </div>
                            <div className="detail-container">
                                <SchoolIcon className="detail-icon" />
                                <div className="detail-sub"> 
                                    <p className="detail-label">Education</p>
                                    <p className="detail">{education}</p>
                                </div>
                            </div>
                            <div className="detail-container">
                                <LanguageIcon className="detail-icon"/>
                                <div className="detail-sub"> 
                                    <p className="detail-label">Language</p>
                                    <p className="detail">{languagePresenter()}</p>
                                </div>
                            </div>
                            <button
                                className="booking-button"
                                onClick={bookNow}
                            >
                                Book with us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return( 
            <div>
                <Loading />
            </div>
        )
    }
}

export default ProviderProfile;