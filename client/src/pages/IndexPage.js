import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header'
import Atyourservice from '../components/Homepage/Atyourservice'
import Ourservice from '../components/Homepage/Ourservice'
import Footer from '../components/Footer'


const IndexPage = () => {
  return (
    <div>
          <Navbar />
          <Header />
          <Atyourservice />
          <Ourservice />
          <Footer />
    </div>
  )
}

export default IndexPage
