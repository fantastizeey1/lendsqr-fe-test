import "./_header.scss"

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn">
            <img src="/search.svg" alt="Search" />
          </button>
        </div>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Docs</a>
        <div className="notifications">
          <img src="/notification.svg" alt="Notifications" />
        </div>
        <div className="user-profile">
          <img src="/avatar.svg" alt="User" />
          <span>Adedeji</span>
          <span className="dropdown-arrow">
            <img src="/dropdown.svg"   alt="dropdown" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;