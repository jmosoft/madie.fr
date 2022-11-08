import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer className='my-5 flex justify-center sticky top-[100vh]'>
        <div>
            Copyright © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </div>
    </footer>
  )
}

export default Footer