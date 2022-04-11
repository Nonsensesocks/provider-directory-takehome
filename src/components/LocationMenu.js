import '../styles/LocationMenu.css';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

function LocationMenu({locations, selectLocation}) {

  return (
    <div>
        <MenuList>
          {(locations || []).map((location, key) =>
              <MenuItem
                key={key}
                onClick={() => selectLocation(location)}
              >
                <ListItemText>{location}</ListItemText>
              </MenuItem>
          )}
        </MenuList>
    </div>
  )
}
  
export default LocationMenu;