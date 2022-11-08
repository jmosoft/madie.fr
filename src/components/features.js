import * as React from 'react'
import * as Icon from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Clients',
    description:
      `Gérer vos clients de manière simple, grace au repertoire client directement disponible dans l'application`,
    icon: Icon.UsersIcon,
  },
  {
    name: 'Interventions',
    description:
      'Créer vos interventions facilement en ajoutant toute les information nécessaires (Client, addresse, tâches...)',
    icon: Icon.Square3Stack3DIcon,
  },
  {
    name: 'Employés',
    description:
      `Assigner les interventions a vos employée en leur envoyant les fiche d'intervention par le moyen le plus adapté (Mail, sms, impression)`,
    icon: Icon.UserGroupIcon,
  },
  {
    name: 'Communication',
    description:
      `Utiliser l'application pour une communication efficace entre vos client, vos employés et vous. `,
    icon: Icon.ChatBubbleLeftRightIcon,
  },
]

const Features = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-violet-600">Fonctionnalités</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Gestion de clients et d'interventions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            <span className='text-violet-600 font-bold'>MADIE</span>{` `}
            vous permet de planifier vos interventions clients simplement et en quelques clic grace a son interface intuitive et accessible a tous.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-violet-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features