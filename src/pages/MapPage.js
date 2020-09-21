import React from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import IconLocation from 'components/IconLocation';


export default function MapPage() {
    return (
        <div className="MapView"> 
            <Map
                center={{ lat:'10.4691585', lng:'-73.2584326' }}
                zoom={15}
            >
                <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={{ lat: '10.4691585', lng: '-73.2584326' }}
                    icon={IconLocation}
                >
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> 
                </Marker>
            </Map> 
        </div>
    ) }