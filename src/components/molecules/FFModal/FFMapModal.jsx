import React, { useEffect, useState } from 'react'
import { Button, Modal } from '@mui/material'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  map_modal,
  addresses,
  mapModalOpen,
} from '../../../redux/features/mapSlice'
export const FFMapModal = () => {
  const [form, setForm] = useState({ locations: [] })

  const dispatch = useDispatch()
  const map_model_open = useSelector(map_modal)
  const address = useSelector(addresses)

  const mapContainerStyle = {
    height: '350px',
    width: '700px',
  }

  useEffect(() => {
    // Fetch addresses and update state
    fetchAddresses()
  }, [])

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        'https://random-data-api.com/api/address/random_address?size=3',
      ) // Replace <API_ENDPOINT> with your API endpoint to fetch addresses
      const addressesData = response.data // Assuming the response is an array of addresses
      // setAddresses(addressesData)
      addMarkersFromAddresses(addressesData)
    } catch (error) {
      console.log(error)
    }
  }

  const addMarkersFromAddresses = (addresses) => {
    addresses.forEach((address) => {
      //   axios
      //     .get(
      //       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      //         address.full_address,
      //       )}&key=${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
      //     )
      //     .then((res) => {
      //       const { results } = res.data
      //       console.log(results)
      //       if (results.length > 0) {
      //         const location = results[0].geometry.location
      //         const formattedAddress = results[0].formatted_address
      //
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error)
      //     })

      setForm((prevForm) => ({
        ...prevForm,
        locations: [
          ...prevForm?.locations,
          {
            lat: address.latitude,
            lng: address.longtitude,
            formatted_address: address.full_address,
          },
        ],
      }))
    })
  }

  const onLoad = (marker) => {
    // console.log('marker: ', marker)
  }

  return (
    <>
      <Modal
        open={map_model_open}
        // onClose={}
        size="lg"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between mb-3">
              <span></span>{' '}
              <span
                style={{ background: '#626262' }}
                onClick={() => dispatch(mapModalOpen({ open: false }))}
                className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
              >
                <svg
                  className="w-4 h-4 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>

            <div className="flex justify-center">
              <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              >
                <GoogleMap
                  id="marker-example"
                  mapContainerStyle={mapContainerStyle}
                  zoom={15}
                  center={{
                    lat: 7.006434, // Valid latitude value
                    lng: 79.980223, // Valid longitude value
                  }}
                >
                  {form?.locations &&
                    form?.locations.map((location, index) => (
                      <Marker
                        key={index}
                        position={{
                          lat: 7.006434, // Valid latitude value
                          lng: 79.980223, // Valid longitude value
                        }}
                        onLoad={onLoad}
                      />
                    ))}
                </GoogleMap>
              </LoadScript>
            </div>
            <div className=" flex flex-col justify-center items-center mt-2 ">
              <input
                value={''}
                onChange={(e) => {}}
                className="px-4 py-2 border bg-[#F5F3F0] h-14 focus:outline-none rounded-lg"
                type="text"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
