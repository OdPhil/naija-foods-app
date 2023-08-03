import React from "react";
import ReactDOM from "react-dom/client";

const foodData = [
  {
    name: "Jollof Rice and Chicken",
    ingredients: "Rice cooked in tomato sauce, and fried chicken",
    price: 9,
    photoName: "foods/jollof-rice.jpeg",
    soldOut: false,
  },
  {
    name: "Pounded Yam and Egusi Soup",
    ingredients: "Boiled yam pounded to a pulp, melon soup",
    price: 8,
    photoName: "foods/p-yam-n-egusi.jpeg",
    soldOut: false,
  },
  {
    name: "Beans Porridge and Fried Plantain",
    ingredients: "Boiled beans in palm oil, and fried plantain slices",
    price: 8,
    photoName: "foods/bp-n-dodo.jpeg",
    soldOut: false,
  },
  {
    name: "Fufu and Ogbono Soup",
    ingredients: "Pounded cassava pulp, and african mango seed soup",
    price: 9,
    photoName: "foods/fufu-n-ogb.jpeg",
    soldOut: false,
  },
  {
    name: "Bread and Akara",
    ingredients: "Bread and fried beans-pulp balls",
    price: 6,
    photoName: "foods/bread-n-akara.jpg",
    soldOut: true,
  },
  {
    name: "Fried Yam and Egg Sauce",
    ingredients: "Fried yam slices, and whisked egg fried in tomato sauce",
    price: 7,
    photoName: "foods/yam-n-sauce.jpeg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Alata Naija Foods</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu:</h2>
      <Foods />
      <Foods />
      <Foods />
      <Foods />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we're closed.");

  return (
    <footer>
      {new Date().toLocaleTimeString()} - - We're currently open!!!
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Foods() {
  return (
    <div>
      <img src="foods/jollof-rice.jpeg" alt="Jollof Rice" />
      <h2>Jollof Rice and Chicken</h2>
      <p>Rice cooked in tomato sauce, and fried chicken</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
