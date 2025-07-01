import React, { useState } from 'react';
import axios from 'axios';
function Register(){
const [form,setform]=useState({username:'',password:''});
const handleSubmit=async e=>{
    e.preventDefault();
    try{
    //await axios.post("https://nodejs1-tau.vercel.app/api/auth/register",form);
        await axios.post("http://localhost:5000/api/auth/register",form);

    alert("Registered successfully");
    }
    catch(err){
        alert("error");
    }

};

    return(
        <div>
<form onSubmit={handleSubmit}>
    <input type="text" onChange={e=>setform({...form,username:e.target.value})} />
    <input type="password" onChange={e=>setform({...form,password:e.target.value})} />
<button>Register</button>
</form>
        </div>
    );
}
export default Register;

