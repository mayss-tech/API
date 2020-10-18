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
            {  
            User.map(el=><div  className="list" key={el.id} >
            <h4><i className="fas fa-user-alt"></i>{el.name}</h4> 
            <h5><i className="fas fa-envelope-open"></i>{el.email}</h5>     
            <p> <i className="fas fa-phone-alt"></i> {el.phone} </p>  
            </div>)
            }
    </div> );
}
export default UserList ;
