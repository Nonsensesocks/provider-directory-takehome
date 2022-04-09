import Location from './Location'

function Header({toggleMenu, location}) {
  return (
    <div>
      <header className="app-header">
        <div className="header" >
          <p className="title">Browse our providers</p>
          <p className="subtitle">Mental Wellness</p>
          <Location
            selectedLocation={location} 
            locationClick={() => toggleMenu()}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
