import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function BreadNavigation({profileTitle, setPage}) {
    function navigateToBrowse(){
        setPage('browseProviders')
    }

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
        >
            <div
                className="breadLink"
                onClick={navigateToBrowse}
            >
                Mental Wellness
            </div>,
            <div
                className="breadCurrent"
            >
                {profileTitle}
            </div>
        </Breadcrumbs>
    );
}

export default BreadNavigation;