import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // ✅ correct import
function Dashboard() {
  const [user, setUser] = useState(null);
useEffect(()=>{
const token =localStorage.getItem("token");
if(!token) return;
const decode=jwtDecode(token);
setUser(decode.username);
},
[]);
return(
    <div>
        <h2>
            Welcome to Main Dashboard
        </h2>
       <p>welcome {user}</p>
    </div>
);
}
export default Dashboard;
