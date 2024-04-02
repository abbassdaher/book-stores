import { Fragment } from "react";
import logo from './logo.svg';
import './App.css'
import NavBar from "./components/NavBar";
import BookForm from "./components/BookForm";

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="container mt10">
        <h1 className="title">insert book</h1>
        <BookForm></BookForm>
      </div>
      <hr class="my-4 mx-3" />

      <div className="container d-flex">
        <div className="bookList">
          <h3 className="title">book list</h3>
          <div className="border p-2  ">
            <span>cras justo odio</span>
            <button type="button" class="btn btn-primary ">Read</button>
            <button type="button" class="btn btn-danger ">Delete</button>
          </div>
        </div>
        <div className="vr mx-2" style={{ height: "200px" }}></div>
        <div className="bookDetails">
          <h3 className="title">book details</h3>
        </div>
      </div>




    </Fragment>
  );
}

export default App;
