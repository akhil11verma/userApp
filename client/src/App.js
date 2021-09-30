import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Component/register";
import Login from "./Component/login";
import Home from "./Component/home";
import Dashboard from "./Component/dashboard";
import Logout from "./logout";
// import Notes from "./Component/Notes/notes1";
import AddNotes from "./Component/Notes/addNotes";
import NoteItem from "./Component/Notes/noteItem";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <div className="App">
            <Dashboard />
          </div>
        </Route>
        <Route path="/logout">
          <div className="App">
            <Logout />
          </div>
        </Route>

        <Route path="/viewNotes">
          <NoteItem />
        </Route>
        <Route path="/addNotes">
          <AddNotes />
        </Route>
      </Router>
    </>
  );
}

export default App;
