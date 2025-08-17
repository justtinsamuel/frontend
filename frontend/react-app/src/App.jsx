import { useState } from "react";
import "./App.css";
import Profile from "./components/profile";
import EventHandler from "./components/EventHandler";
import Form from "./components/Form";


function App() {
  // const [profiles, setProfiles] = useState([
  //   {
  //     id: 1,
  //     name: "Justtin",
  //     hobby: "Coding",
  //   },
  //   {
  //     id: 2,
  //     name: "Eldaaw",
  //     hobby: "Makan",
  //   },
  //   {
  //     id: 3,
  //     name: "Just Eldaw",
  //     hobby: "Tidur",
  //   },
  // ]);
  return (
    <div>
      <h1>Welcome to my home page</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odit
        omnis sit, aut, ducimus aliquam voluptatum nihil commodi neque tempore
        numquam doloremque assumenda temporibus ratione. Explicabo sed
        doloremque nostrum ad!
      </p>
      <hr /> */}
      {/* {profiles.map((profile) => {
        return <Profile profile={profile}></Profile>;
      })} */}
      {/* <EventHandler /> */}
      <Form></Form>
      
    </div>
  );
}

export default App;
