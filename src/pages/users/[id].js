import React from 'react'
import Layout from "@/components/Layout";
import axios from 'axios';

const UserId = ({user}) => {
  return (
    <Layout>
        <div className='container'>
        <h1>User Details Page</h1>
        
        <h2>{user.name}</h2>
        <thead className=''>
    <tr>
      <th scope="col">Sr No</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
        <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
            </tbody>
        </div>
    </Layout>
  )
}

export default UserId;

export async function getServerSideProps(context){
    try{
       const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
       return{
        props:{
            user : data
        },
       };
    }catch(error){
        console.log(error);
        return {
            notFound: true,
          };

    }
}
