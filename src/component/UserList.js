import React,{useState, useEffect} from 'react';
import axios from 'axios';

const UserList = () => {
    const[User,setUser]=useState([])
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err=>{console.log(err)})
    })
    return ( <div><h3>**Users List**</h3>
    <table border="l">
    <tr>
        <th> Nbre  {User.map(el=><td style={{display:"block"}}><p>{el.id}</p></td>)}</th>
        <th> Name  {User.map(el=><td style={{display:"block"}}> <p>{el.name}</p></td>)}</th>
        <th> Email {User.map(el=><td style={{display:"block"}}><p>{el.email}</p> </td>)}</th>
        <th> Phone {User.map(el=><td style={{display:"block"}}><p >{el.phone}</p></td>)}</th>
        <th> Address{User.map(el=><td style={{display:"block"}}><p >{el.address.city}</p></td>)}</th>
    </tr> 
    </table></div>);
}
export default UserList ;
