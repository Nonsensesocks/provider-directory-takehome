import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function BreadNavigation({profileTitle, setPage}) {
    function navigateToBrowse(){
        setPage('browseProviders')
    }

    return (
        <Breadcrumbs
            aria-label="bread-crumb"
            separator={
                <NavigateNextIcon
                fontSize="small"
                htmlColor='#C6C9Cf'
                />
            }
        >
            <div
                className="bread-link"
                onClick={navigateToBrowse}
            >
                Mental Wellness
            </div>
            <div className="bread-current">
                {profileTitle}
            </div>
        </Breadcrumbs>
    );
}

export default BreadNavigation;