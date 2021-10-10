import logo from "./logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Atlas logo" className="nav__logo" id="logo" />
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#section--1">
              Whats new
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--2">
              Clothes & Accesories
            </a>
          </li>
        </ul>
        <form className="login">
          <input
            type="text"
            placeholder="username"
            className="login__input login__input--user"
          />
          <input
            type="password"
            placeholder="password"
            maxlength="8"
            className="login__input login__input--pass"
          />
          <button className="login__btn">&rarr;</button>
        </form>
      </nav>
    </header>
  );
}
export default Header;
