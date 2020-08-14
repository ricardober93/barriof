import Home from 'pages/Home'
import Search from 'pages/Search'
import Map from 'pages/Map'
import Comercios from 'pages/Comercios'
export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/map",
        component: Map
    },
    {
        path: "/comercios/:title",
        component: Comercios
    }
]