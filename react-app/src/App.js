import { Fragment, useEffect, Dispatch } from "react";
import logo from './logo.svg';
import './App.css'
import NavBar from "./components/NavBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { BookContainer } from "./components/BookContainer";
import Toast from "./components/ToastComponent";
import ToastComponent from "./components/ToastComponent";


function App() {


  return (
    <div className="app" >
    
      <div className="background"><ToastComponent isEnable="none" /></div>
      <NavBar />
      <div className="container mt10">
        <BookForm />
      </div>
      <hr className="my-4 mx-3" />
      <BookContainer />


    </div>
  );
}

export default App;
