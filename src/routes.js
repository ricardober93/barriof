import Home from 'pages/Home'
import Search from 'pages/Search'
import MapPage from 'pages/MapPage'
import Comercios from 'pages/Comercios'
import Comercio from 'pages/Comercio'
import Profile from 'pages/Profile'
export const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/map",
        component: MapPage
    },
    {
        path: "/comercios/:title",
        component: Comercios
    },
    {
        path: "/comercio/:title",
        component: Comercio
    },
    {
        path: "/profile",
        component: Profile
    }
]