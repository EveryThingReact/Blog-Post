import React from 'react'
import MainLayout from '../../components/ MainLayout'
import Hero from './container/Hero'
import Article from './container/Article'
import CTA from './container/CTA'

const HomePage = () => {
  return (
    <div><MainLayout>
      <Hero/>
      <Article/>
      <CTA/>
      </MainLayout></div>
  )
}



export default HomePage