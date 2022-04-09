import { truncateText } from '../utility/formatter'
import { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ReadMore(props) {
    const bio = props.text

    const [readMore, setRead] = useState(false);

    useEffect(() => {
        setRead(readMore)
      }, [readMore])

      function readClick() {
          setRead(!readMore)
      }
      
    if(!readMore) {
        return (
            <div>
                <div className="bio">
                    {truncateText(bio, 310)}
                </div>
                <button
                    className="button"
                    onClick={readClick}
                >
                    Read More <ExpandMoreIcon />
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <div className="bio">
                    {bio}
                </div>
                <button
                    className="button"
                    onClick={readClick}
                >
                    Read Less <ExpandLessIcon />
                </button>
            </div>
        )
    }
}

export default ReadMore;