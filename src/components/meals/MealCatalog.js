import MealItem from "./MealItem"
import classes from "./MealCatalog.module.scss"

const MealCatalog = (props) => {
   return (
        <div className={classes.mealCatalog}>
           {console.log(props.meals.menuItems)}
            {props.meals.menuItems.map((menuItem) => {
                return (
                    <MealItem meal={menuItem}/>
                );
            })}
        </div>
   )
}

export default MealCatalog