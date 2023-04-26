import classes from "./HeaderCartButton.module.scss";
import CartIcon from "./CartIcon";
import MenuContext from "../../contexts/MenuContext";

const HeaderCartButton = (props) => {
  return (
    <MenuContext.Consumer>
      {(ctx) => {
        return (
          <div className={classes.cart}>
            <a className={classes.cartButton} href="#">
              { ctx.currentCart.length === 0 && <CartIcon /> }
              { ctx.currentCart.length === 0 && <span>No items added</span> }
              { ctx.currentCart.length > 0 && <span>{ctx.currentCart.length} items</span>}
              { ctx.currentCart.length > 0 && (
                <span>Total: {
                    ctx.currentCart.reduce((accumulator, object) => {
                        return accumulator + object.price;
                      }, 0)
                    }€</span>
              )}
            </a>
          </div>
        );
      }}
    </MenuContext.Consumer>
  );
};

export default HeaderCartButton;
