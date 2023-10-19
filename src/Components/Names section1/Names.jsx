import { useState } from "react";
const users = [
  { Name: "heba", age: "21", gender: "female", id: 1 },
  { Name: "Ali", age: "28", gender: "male", id: 2 },
  { Name: "Nour", age: "24", gender: "female", id: 3 },
  { Name: "Mohamed", age: "25", gender: "male", id: 4 },
];
const Names = ({ Name, age, gender, id, married }) => {
  return (
    <div>
      <ul>
        <li>name:{Name}</li>
        <li>age:{age}</li>
        <li>gender:{gender}</li>
        <li>id:{id}</li>
        {married ? <li>married:{married}</li> : null}
      </ul>
    </div>
  );
};
const Nameslist = () => {
  const [usersList, setUserList] = useState(users);

  const addUser = () => {
    setUserList(usersList.map((el) => ({ ...el, married: "yes" })));
  };

  const user = usersList.map((el) => (
    <Names
      key={el.id}
      Name={el.Name}
      age={el.age}
      gender={el.gender}
      id={el.id}
      married={el.married}
    />
  ));

  return (
    <div>
      {user}
      <button onClick={addUser} style={{ marginLeft: "2rem" }}>
        add
      </button>
    </div>
  );
};
export default Nameslist;
