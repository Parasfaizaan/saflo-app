import React from 'react'
import Navbar from '../../components/functionalcom/Navbar'
import Hero from './HomePages/Hero'
import Payment from './HomePages/payment'
import Contect from './HomePages/Contect'
import Conversation from './HomePages/Conversation'
import Screendis from './HomePages/screendis'
import Simple from './HomePages/Simple'
import Footer from './HomePages/footer'

function Home() {
  return (
    <div>
      
      <Hero />
      <Payment />
      <Contect />
      <Conversation />
      <Screendis />
      <Simple />
      <Footer />
    </div>
  )
}

export default Home
