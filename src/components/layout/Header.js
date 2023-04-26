import classes from "./Header.module.scss";
import logo from "../../assets/ui/logo.png";
import HeaderCartButton from "../cart/HeaderCartButton"

const Header = () => {
  return (
    <>
    <header>
        <div className={classes.headerNavigation}>
        <div className={classes.logo}>
            <a href="#">
                 <img src={logo} alt="logo" /> 
            </a>
        </div>
        <HeaderCartButton />
        </div>
        <div className={classes.headerVisual}></div>
    </header>

    </>
  );
};

export default Header;
