import React, {useState} from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () =>{
    setFormIsSubmitted(true);
  }

  return(
  <div>
     {!formIsSubmitted ? <LoginForm submitForm={submitForm}/> : <Home/>}
  </div>
);
}
export default Form;