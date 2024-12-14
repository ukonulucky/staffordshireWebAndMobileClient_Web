"use client"
import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect, useRef } from 'react'


function Map() {
    
const mapRef = useRef<HTMLDivElement>(null)

    
    
    useEffect(() => {
        const initialiseMap = async () => { 
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "quarterly"
            });

            const { Map } = await loader.importLibrary("maps");


            const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary
            const myLocation = {
                lng: -2.1762922,
                lat: 53.0085596
            }
            const options: google.maps.MapOptions = {
                center: myLocation,
                zoom: 15,
                mapId: "NEXT_MAPS_TUTS"
            }
            const map = new Map(mapRef?.current as HTMLDivElement, options)

          new Marker({
                map: map,
                position:myLocation  
            })
        }
        initialiseMap()
     }, [])
  return (
      <div
          className='h-[70vh]'
          ref={ mapRef }
      ></div> 
  )
}
 
export default Map