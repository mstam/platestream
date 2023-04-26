import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore
const foodCatalogueOne = [
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
  ]

const MenuContext = React.createContext({'foodCatalogue': foodCatalogueOne, 'currentCart' : []});

export default MenuContext;