import * as React from 'react'
import { useSiteMetadata } from '../hooks/use-static-metadata'

const Seo = ({ pageTitle }) => {
  const { title } = useSiteMetadata()
 
  return (
    <title>{pageTitle} | {title}</title>
  )
}

export default Seo