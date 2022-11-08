import icon from "./src/images/icon.png"
import {
    UsersIcon,
    Square3Stack3DIcon, 
    UserGroupIcon, 
    ChatBubbleLeftRightIcon, 
} from '@heroicons/react/24/outline'

export default {
    title: `madie.fr`,
    siteUrl: `https://www.madie.fr`,
    icon: icon,
    headline: `Organisez efficacement vos interventions avec MADIE`,
    subheading: `Gestion de clients et d'interventions`,
    description: `MADIE vous permet de planifier vos interventions clients simplement et en quelques clic grace a son interface intuitive et accessible a tous.`,
    menus: [
        { href: '/', name: 'Accueil' },
        { href: '/legal',  name: 'Mentions Légales' },
        { href: '/help', name: 'Aide' },
    ],
    features: [
        {
          name: 'Clients',
          description:
            `Gérer vos clients de manière simple, grace au repertoire client directement disponible dans l'application`,
          icon: UsersIcon,
        },
        {
          name: 'Interventions',
          description:
            'Créer vos interventions facilement en ajoutant toute les information nécessaires (Client, addresse, tâches...)',
          icon: Square3Stack3DIcon,
        },
        {
          name: 'Employés',
          description:
            `Assigner les interventions a vos employée en leur envoyant les fiche d'intervention par le moyen le plus adapté (Mail, sms, impression)`,
          icon: UserGroupIcon,
        },
        {
          name: 'Communication',
          description:
            `Utiliser l'application pour une communication efficace entre vos client, vos employés et vous. `,
          icon: ChatBubbleLeftRightIcon,
        },
      ]
}