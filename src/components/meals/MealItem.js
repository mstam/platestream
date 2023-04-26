import classes from "./MealItem.module.scss";
import PlusIcon from "../cart/PlusIcon";
import MenuContext from "../../contexts/MenuContext";

const MealItem = (props) => {
  return (
    <MenuContext.Consumer>
      {(ctx) => {
        return (
          <div className={classes.mealItem}>
            <div className={classes.thumbNail}>
              <img src="https://placehold.co/150x100" alt="placeholder" />
            </div>
            <h4 className={classes.mealTitle}>{props.meal.title}</h4>
            <p className={classes.mealDescription}>{props.meal.description}</p>
            <a className={classes.mealPrice} onClick={()=>{ ctx.addCartItem(props.meal)}}>
              {props.meal.price}€ <PlusIcon />{" "}
            </a>
          </div>
        );
      }}
    </MenuContext.Consumer>
  );
};

export default MealItem;
