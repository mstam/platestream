import MenuContext from "../../contexts/MenuContext"
import classes from "./MenuNavigation.module.scss"

const MenuNavigation = (props) => {
  
 return (
    <MenuContext.Consumer>
        {(ctx) => {
            return (
              <div className={classes.menuNavigation}>
                <ul className={classes.menuList}>
                    { ctx.foodCatalogue.map((foodCategory, index)=>{
                        return <li key={foodCategory.title} className={index===ctx.currentFoodCategory ?  classes.activeMenu : ''} onClick={()=>{props.onNavigateFoodCategory(index)}}>{foodCategory.title}</li>
                    }) }
                </ul>
              </div>
            );
        }}
    </MenuContext.Consumer>
 )
}

export default MenuNavigation