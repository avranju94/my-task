const ValidateForm = (values) => {
  let errors = {};

  const checkNum = (value) =>{
   let sum = 0;
   for(let i=0; i< value.length; i++){
       let num = parseInt(value.charAt(i));
       sum = sum + num;
   }
   return sum;
  }

  if(!values.email){
      errors.email = "Email is required."
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
      errors.email = "Email is invalid."
  }
  if(!values.password){
      errors.password = "Password is required"
  }else if(values.password.length < 1){
      errors.paswword = "Password should be more than one"
  }else if(checkNum(values.password) !== 10){
      errors.password = "Password sum must be 10"
  }
 return errors;
}
export default ValidateForm;