// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const LegalPage = () => {
  return (
    <Layout>
         <div className="flex flex-col space-y-4 justify-start mx-auto mt-20 px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                MENTIONS LÉGALES
            </h1>
            <div>
                <h2 className='text-xl font-semibold tracking-tight text-gray-900'>
                    Siège social
                </h2>
                <address>
                    jmosoft SAS<br />
                    9 Rue des cigognes<br />
                    66700, Argelès-sur-mer<br />
                </address>
            </div>
            <div>
                <h2 className='text-xl font-semibold tracking-tight text-gray-900'>Contact</h2>
                <address>
                    E-mail: <a href="mailto:jeremy@jmosoft.com">jeremy@jmosoft.com</a>
                </address>
            </div>
            <div>
                <h2 className='text-xl font-semibold tracking-tight text-gray-900'>Représentant légal</h2>
                <p>
                    Inscription au registre du commerce et des sociétés <br />
                    Numéro d’inscription : 903113264
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold tracking-tight text-gray-900'>Immatriculation</h2>
                <p>
                    Numéro d’identification TVA : FR18903113264
                </p>
            </div>
            <div>
                <h2>Numéro de TVA intracommunautaire</h2>   
                <p>
                    Numéro de TVA intracommunautaire : FR18903113264
                </p>
            </div>
        </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Mentions Légales"></Seo>

// Step 3: Export your component
export default LegalPage