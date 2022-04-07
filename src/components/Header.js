import Location from './Location'

function Header(props) {
  const { locations } = props

  return (
    <div>
      <header className="app-header">
        <div className="header" >
          <p className="title">Browse our providers</p>
          <p className="subtitle">Mental Wellness</p>
          <Location selectedLocation="ON" locations={locations}/>
        </div>
      </header>
    </div>
  );
}

export default Header;
