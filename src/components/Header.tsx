const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Docs</a>
        <div className="notifications">🔔</div>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40x40/CCCCCC/FFFFFF?text=U" alt="User" />
          <span>Adedeji</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </div>
  );
};
export default Header;