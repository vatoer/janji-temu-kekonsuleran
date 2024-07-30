import Image from "next/image";
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__content">
          <div className="topbar__content__left">
            <a href="/" className="topbar__content__left__logo">
              <Image src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="topbar__content__right">
            <div className="topbar__content__right__search">
              <input type="text" placeholder="Search" />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="topbar__content__right__icons">
              <a href="/">
                <i className="fas fa-user"></i>
              </a>
              <a href="/">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
