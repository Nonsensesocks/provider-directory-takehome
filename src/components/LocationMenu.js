import '../styles/Location.css';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

function LocationMenu(props) {
  const { locations } = props

  return (
    <div>
      <div className="location-menu">
        <MenuList dense>
          {(locations || []).map((location, key) =>
              <MenuItem  key={key}>
                  <ListItemText>{location}</ListItemText>
              </MenuItem>
          )}
        </MenuList>
      </div>
    </div>
  )
}
  
export default LocationMenu;