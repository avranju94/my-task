import React, {useEffect, useState} from "react";
import ValidateForm from "./ValidateForm";

const LoginForm = ({submitForm}) =>{
  const [values, setValues] = useState({
    email: "", 
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleFormSubmit = (event) =>{
   event.preventDefault();
   setErrors(ValidateForm(values));
   setDataIsCorrect(true);
  }

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  }, [errors]);
  
    return(
     <div className="container">
       <div className="app-wrapper">
          <div>
             <h2 className="title">Login</h2>
          </div>
          <form className="form-wrapper" action="">
            <div className="email">
                <label className="label" htmlFor="email">Email</label>
                <input 
                  className="input" 
                  type="text" 
                  name="email" 
                  id="email" 
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="password">
                <label className="label" htmlFor="password">Password</label>
                <input 
                  className="input" 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <button className="submit" onClick={handleFormSubmit}>
                Login
              </button>
            </div>
            
          </form>
       </div>  
     </div>
    )
}
export default LoginForm;


      