import React from 'react'
import styles from './LeafletMap.module.css'
import { MapContainer, TileLayer } from 'react-leaflet'

const LeafletMap = () => {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution=''
                url=''
            />
        </MapContainer>
    )
}

export default LeafletMap;