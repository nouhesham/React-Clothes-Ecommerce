import { useState } from "react";
import { Container } from "react-bootstrap";
const users = [
  { Name: "heba", position: "Ceo", id: 1 },
  { Name: "Ali", position: "Senior Frontend", id: 2 },
  { Name: "Nour", position: "Senior Graphic designer", id: 3 },
  { Name: "Mohamed", position: "Manager", id: 4 },
];
const Names = ({ Name, position, gender, Contact }) => {
  return (
    <Container>
      <div className="row ms-5">
        <div className="col-lg-6 d-flex w-100">
          <p className="me-3 text-light ">Name:{Name}</p>
          <p className="me-3 text-light">Position:{position}</p>

          {Contact ? <p className="text-dark">Contact:{Contact}</p> : null}
        </div>
      </div>
    </Container>
  );
};
const Contact = () => {
  const [usersList, setUserList] = useState(users);

  const addUser = () => {
    setUserList(
      usersList.map((el) => ({
        ...el,
        Contact: (
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://support.google.com/mail/answer/56256?hl=en"
          >
            Email
          </a>
        ),
      }))
    );
  };

  const user = usersList.map((el) => (
    <Names
      key={el.id}
      Name={el.Name}
      position={el.position}
      Contact={el.Contact}
    />
  ));

  return (
    <div className="d-none d-lg-flex  justify-content-center align-items-center pt-5 ">
      <div>
        <h1 className="fs-4 text-light pt-3">Team Leaders :</h1>
        {user}
      </div>

      <button
        className="btn btn-primary"
        onClick={addUser}
        style={{ marginLeft: "2rem", maxwidth: "9rem", minheight: "3rem" }}
      >
        Click for contact
      </button>
    </div>
  );
};
export default Contact;
