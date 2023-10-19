import "./App.css";
import Names from "./Components/Names";
import Details from "./Components/Details/Details";
import { useState } from "react";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarsection from "./Components/Navbar/Navbar";

// const users = [
//   { Name: "heba", age: "21", gender: "female", id: 1 },
//   { Name: "Ali", age: "28", gender: "male", id: 2 },
//   { Name: "Nour", age: "24", gender: "female", id: 3 },
//   { Name: "Mohamed", age: "25", gender: "male", id: 4 },
// ];

function App() {
  // const [userslist, setUserList] = useState(users);
  // const user = userslist.map((el) => (
  //   <Names
  //     Name={el.Name}
  //     age={el.age}
  //     gender={el.gender}
  //     id={el.id}
  //     married={el.married}
  //   />
  // ));
  // const add = () => {
  //   setUserList(userslist.map((el) => ({ ...el, married: "yes" })));
  // };
  return (
    <BrowserRouter>
      <Navbarsection />
      {/* {user}
      <button onClick={add} style={{ marginLeft: "2rem" }}>
        add
      </button> */}
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
