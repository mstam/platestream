import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/layout/Header";
import MenuContext from "./contexts/MenuContext";
import MenuNavigation from "./components/ui/MenuNavigation";
import MealCatalog from "./components/meals/MealCatalog";

// const MenuProvider = ({ children }) => {
//   const [name, setName] = useState("John Doe");
//   const [age, setAge] = useState(1);
//   const happyBirthday = () => setAge(age + 1);
//   return (
//     <MenuContext.Provider value={{ name, age, happyBirthday }}>
//       {children}
//     </MenuContext.Provider>
//   );
// };

function App() {
  const [foodCatalogue, setFoodCatalogue] = useState([
    {
      title: "Burgers",
      description: "",
      menuItems: [
        {
          title: "Americal Style",
          description:
            "Beef, Pickle sauce, Onion rings, Bacon, Sauteed mushrooms",
          price: 12,
        },
        {
          title: "Juicy Grill",
          description:
            "Pork Steak, Tomatoe, Onion, Cheese, Bacon, Mustard sauce",
          price: 14,
        },
        {
          title: "Blue Cheese Burger",
          description: "Beef, Blue Cheese, White Sauce, Bacon, Mushrooms",
          price: 13,
        },
        {
          title: "Hulk Hogan",
          description: "Beef, Mustard sauce, Egg, Sausage, Melted cheese",
          price: 15,
        },
        {
          title: "Chicken Lover",
          description:
            "Chicken fillet, Tomatoe, Lettuce, Cheese, Onion, Ketchup",
          price: 12,
        },
        {
          title: "Veggie Burger",
          description: "Onion Rings, Tomatoe, Lettuce, Mustard Sauce",
          price: 9,
        },
      ],
    },
    {
      title: "Pizzas",
      description: "",
      menuItems: [
        {
          title: "Margherita Pizza",
          description:
            "Tomato sauce,Fresh mozzarella cheese, Fresh basil leaves, Extra virgin olive oil",
          price: 10,
        },
        {
          title: "Pepperoni Pizza",
          description: "Tomato sauce, Mozzarella cheese, Pepperoni slices",
          price: 12,
        },
        {
          title: "BBQ Chicken Pizza",
          description:
            "BBQ sauce,Cooked chicken breast, shredded Red onion, thinly sliced Fresh cilantro, Mozzarella cheese",
          price: 15,
        },
        {
          title: "Veggie Pizza",
          description:
            "Tomato sauce, Mozzarella cheese, Bell peppers, Black olives, Fresh basil leaves",
          price: 12,
        },
        {
          title: "Meat Lovers Pizza",
          description:
            "Tomato sauce, Mozzarella cheese, Pepperoni slices, Italian sausage, Bacon",
          price: 17,
        },
      ],
    },
    {
      title: "Pasta",
      description: "",
      menuItems: [
        {
          title: "Margherita Pasta",
          description:
            "Tomato sauce,Fresh mozzarella cheese, Fresh basil leaves, Extra virgin olive oil",
          price: 10,
        },
        {
          title: "Pepperoni Pasta",
          description: "Tomato sauce, Mozzarella cheese, Pepperoni slices",
          price: 12,
        },
        {
          title: "BBQ Chicken Pasta",
          description:
            "BBQ sauce,Cooked chicken breast, shredded Red onion, thinly sliced Fresh cilantro, Mozzarella cheese",
          price: 15,
        },
        {
          title: "Veggie Pasta",
          description:
            "Tomato sauce, Mozzarella cheese, Bell peppers, Black olives, Fresh basil leaves",
          price: 12,
        },
        {
          title: "Meat Lovers Pasta",
          description:
            "Tomato sauce, Mozzarella cheese, Pepperoni slices, Italian sausage, Bacon",
          price: 17,
        },
      ],
    },
  ]);
  const [currentFoodCategory, setCurrentFoodCategory] = useState(0);
  const [cart, setCart] = useState([]);

  const updateCart = (meal) => {
    setCart( // Replace the state
    [ // with a new array
      ...cart, // that contains all the old items
      meal// and one new item at the end
    ]
  );
  }

  return (
    <MenuContext.Provider value={{'foodCatalogue': foodCatalogue, 'currentFoodCategory': currentFoodCategory,'currentCart': cart, 'addCartItem' : updateCart}}>
      <MenuContext.Consumer>
        {(ctx) => {
          return (
            <div className="App">
              <Header />
              <MenuNavigation onNavigateFoodCategory={setCurrentFoodCategory}/>
              <MealCatalog meals={foodCatalogue[currentFoodCategory]}/>
            </div>
          );
        }}
      </MenuContext.Consumer>
    </MenuContext.Provider>
  );
}

export default App;
