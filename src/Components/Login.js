import React, { useState } from 'react';
//hhhhh
import axios from 'axios';
function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleSubmit = async e => {
    e.preventDefault();
try{
    // const res = await axios.post("http://localhost:5000/api/auth/login", form);
   const res = await axios.post("https://nodejs2-blush.vercel.app/api/auth/login", form);

localStorage.setItem("token", res.data.token);
window.location.href="/dashboard";
}
catch(error){
    alert("error"+error);
}
};


return(
    <div>
<form onSubmit={handleSubmit}>
    <input type="text" onChange={e=>setForm({...form,username:e.target.value})} />
    <input type="password" onChange={e=>setForm({...form,password:e.target.value})} />
<button>Login</button>
</form>
    </div>
);
}
export default Login;