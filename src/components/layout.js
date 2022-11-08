// Step 1: Import React
import * as React from 'react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-violet-200">
        <Navigation />
          {children}
        <Footer />
      </div>
  )
}

// Step 3: Export your component
export default Layout