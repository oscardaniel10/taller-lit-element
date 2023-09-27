import {css} from "lit-element";

export default css`

  .formulario {
    position: relative;
    width: 450px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    height: auto;
    padding: auto;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
  }
  
  
  .formulario h1 {
    text-align: center;
    padding: 9px 0;
    border-bottom: 1px solid rgb(255, 0, 0);
    background-color: rgb(255, 0, 0);
    color: white;
    margin-top: 20px;
    position: relative;
  }
  
  .formulario h1::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background-color: red;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .formulario form {
    padding: 20px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction:column ;
    margin-top: -40px;
  }
  
  form .username {
    position: relative;
    border-bottom: 2px solid #ff0000;
    margin:  30px 0;
  }
  
  form .contraseña{
    position: relative;
    border-bottom: 2px solid #ff0000;
    margin:  30px 0;
  }
  
  .username input {
    width: 100%;
     padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
  }
  
  .contraseña input {
    width: 100%;
     padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
  }
  
  
  
  .recordar {
    text-align: center;
    font-size: 14px;
    color: rgb(79, 81, 83);
    text-decoration:underline; 
    display: block;
    margin-top: 15px;
  }
  
  input[type="submit"] {
    display: block;
    width: 50%;
    height: 40px;
    font-size: 16px;
    color: white;
    background-color: rgb(255, 0, 0);
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    align-self: center; 
}`