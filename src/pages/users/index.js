import React from 'react';
import Layout from "@/components/Layout";
import axios from 'axios';
import Link from 'next/link'
import {useRouter} from "next/router";
 
const Index = ({users}) => {
    const router = useRouter()
  return (
    <Layout>
      <table class="table">
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
    {users.map(user =>(
        <tr key={user.id}>
            <td>{user.id}</td>
            <td onClick={()=>{router.push(`/users/${user.id}`)}}>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>

        </tr>
    ) )}
    
  </tbody>
</table>
    </Layout>
  )
}

export default Index;

export async function getStaticProps() {
  try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      props: {
        users: data
      }
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: []
      }
    };
  }
}
