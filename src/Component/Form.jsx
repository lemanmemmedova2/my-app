import React from 'react'
import'./Form.css'
const Form = () => {
function myForm(){
alert('gonderildi')
}
const myData=(e)=>{
  if(e.target.value.length>10){
    e.target.nextElementSibling.disabled = false;
  }
  else{
    e.target.nextElementSibling.disabled = true
  }
  console.log( e.target.nextElementSibling)
}
  return (
    <div>
      <form onSubmit={myForm} >
        <label>Ad </label>
      <input  type='text'required/> 
      <br></br>
      <label>Soyad </label>
      <input  type='text' required/>
      <br></br>
      <label>Telefon </label>
      <input type='number' required/>
      <br></br>
      <label>Email </label>
      <input type='email' required/>
      <br></br>
      <label>Serh </label>
      <input onChange={myData} type='text' minLength={10} required/>
      <button disabled >Gonder</button>
      </form>
    </div>
  );
}
export default Form