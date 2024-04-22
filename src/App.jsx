import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Users Added Successfully");
          form.reset();
        }
      });
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" /> <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Link to="/users">See All Users</Link>
    </>
  );
}

export default App;
