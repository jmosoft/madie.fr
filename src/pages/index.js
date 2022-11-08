// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Features from '../components/features'
import Seo from '../components/seo'

const IndexPage = () => {

  return (
    <Layout>
        <Hero />
        <Features />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Accueil"></Seo>

// Step 3: Export your component
export default IndexPage