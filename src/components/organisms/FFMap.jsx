import React, { useEffect } from 'react'

const ContactBody = () => {
  useEffect(() => {
    const getGoogleMaps = () => {
      return new Promise((resolve) => {
        if (window.google && window.google.maps) {
          resolve(window.google.maps)
        } else {
          const script = document.createElement('script')
          const API = 'AIzaSyBgVHkUwjSygi5pvs9WtyYvFsSqoRHQ79s'
          script.src = `https://maps.googleapis.com/maps/api/js?key=${API}`
          script.onload = () => {
            resolve(window.google.maps)
          }
          document.body.appendChild(script)
        }
      })
    }

    const initMap = (googleMaps) => {
      const uluru = { lat: 6.64333, lng: 80.70192 }
      const map = new googleMaps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru,
      })
      const marker = new googleMaps.Marker({
        position: uluru,
        map: map,
      })
    }

    getGoogleMaps().then((googleMaps) => {
      initMap(googleMaps)
    })
  }, [])

  return (
    <div>
      <h1>Contact</h1>
      <div id="map" style={{ width: 400, height: 300 }}></div>
    </div>
  )
}

export default ContactBody
