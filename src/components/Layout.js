import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
 
const Layout = ({children, title} ) => {
  return (
    <div>
      <Head>
        <title> {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossOrigin="anonymous"/>

      </Head> 
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}
 
export default Layout
 
