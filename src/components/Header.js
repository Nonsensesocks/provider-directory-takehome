import LocationChip from './LocationChip'

function Header({toggleMenu, location}) {
  return (
    <div>
      <header className="app-header">
        <div className="header" >
          <p className="title">Browse our providers</p>
          <p className="subtitle">Mental Wellness</p>
          <LocationChip
            selectedLocation={location} 
            locationClick={() => toggleMenu()}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
