<<<<<<< HEAD
import { useContext } from "react";
=======
>>>>>>> a58977127ed0e74f10a0b8463ab9102f99cbde9b
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
<<<<<<< HEAD
import Toggle from "./components/toggle/Toggle";
import { ThemContext } from "./context";

const App = () => {

  const theme = useContext(ThemContext)
  const darkMode = theme.state.darkMode;

  return <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
    <Toggle />
=======

const App = () => {
  return <div>
>>>>>>> a58977127ed0e74f10a0b8463ab9102f99cbde9b
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>;
};

export default App;