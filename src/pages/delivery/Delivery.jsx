import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeliveryIcon from '../../assets/icons/DeliveryIcon'
import DeliveryFillIcon from '../../assets/icons/DeliveryFillIcon'
import PersonIcon from '../../assets/icons/PersonIcon'
import PersonFillIcon from '../../assets/icons/PersonFillIcon'
import { makeStyles } from '@material-ui/core/styles'
import ContactBody from '../../components/organisms/FFMap'
import FFButton from '../../components/atoms/FFButton/FFButton'

const Delivery = () => {
  const [iconClicked1, seticonClicked1] = useState(false)
  const [iconClicked2, seticonClicked2] = useState(true)

    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[street, setStreet] = useState('');
    const [houseNo, sethouseNo] = useState('')
    const[city, setCity] = useState('');
    const[delivery_date, setDelivery_date] = useState('');

  const useStyles1 = makeStyles({
    borderRadius: 0,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: 'none',
    },
  })

  const handleClick1 = () => {
    seticonClicked1(false)
    seticonClicked2(true)

    console.log('Button 1')
  }

  const handleClick2 = () => {
    seticonClicked1(true)
    seticonClicked2(false)

    console.log('Button 2')
  }

  const SampleIcon1 = () => <DeliveryFillIcon />

  const SampleIcon2 = () => <DeliveryIcon />

  const SampleIcon3 = () => <PersonFillIcon />

  const SampleIcon4 = () => <PersonIcon />

  return (
    <>
      <div className="ml-10 mt-10">
        <div>
          <div class="bg-green-500 text-white w-80 h-10 flex items-center justify-center rounded-lg shadow-lg">
            <span class="text-xl font-semibold">
              Select the shipping method
            </span>
          </div>
          <IconButton onClick={handleClick1} className={useStyles1.root}>
            {iconClicked1 ? <SampleIcon2 /> : <SampleIcon1 />}
          </IconButton>
          <IconButton onClick={handleClick2} className={useStyles1.root}>
            {iconClicked2 ? <SampleIcon4 /> : <SampleIcon3 />}
          </IconButton>
        </div>
        {iconClicked1 ? (
          <div className="col-2">
            <p class="text-red-500">
              Note: If you're unable to pick up your order from one of our
              available locations, please select the delivery option during
              checkout. If you'd like to continue shopping, you can go back to
              your shopping cart at any time. Thank you for choosing our
              website!
            </p>
          </div>
        ) : (
          <div className="flex flex-col ml-7">
            <div className="flex w-1/4 justify-between mb-5">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="radioGroup"
                  className="form-radio text-green-500"
                />
                <span className="ml-2">Your saved Address</span>
              </label>
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="radioGroup"
                  className="form-radio text-green-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <span className="ml-2">Enter New Address</span>
              </label>
            </div>
            <label htmlFor="input1">Your Name</label>
            <input
              type="text"
              id="input1"
              placeholder="Input 1"
              className="border-b-2 border-gray-300 p-2 mb-2 focus:border-green-500 hover:border-green-500 transition-all duration-300 outline-none w-1/4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="input2">House no/Lane</label>
            <input
              type="text"
              id="input2"
              placeholder="Input 2"
              className="border-b-2 border-gray-300 p-2 mb-2 focus:border-green-500 hover:border-green-500 transition-all duration-300 outline-none w-1/4"
              value={houseNo}
              onChange={(e) => sethouseNo(e.target.value)}
            />

            <label htmlFor="input3">Street</label>
            <input
              type="text"
              id="input3"
              placeholder="Input 3"
              className="border-b-2 border-gray-300 p-2 mb-2 focus:border-green-500 hover:border-green-500 transition-all duration-300 outline-none w-1/4"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="input4">CIty</label>
            <input
              type="text"
              id="input4"
              placeholder="Input 4"
              className="border-b-2 border-gray-300 p-2 mb-2 focus:border-green-500 hover:border-green-500 transition-all duration-300 outline-none w-1/4"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="input5">Delivery Date</label>
            <input
              type="date"
              id="input5"
              placeholder="Input 5"
              className="border-b-2 border-gray-300 p-2 mb-2 focus:border-green-500 hover:border-green-500 transition-all duration-300 outline-none w-1/4"
              value={delivery_date}
              onChange={(e) => setDelivery_date(e.target.value)}
            />
          </div>
        )}
      </div>
      <div style={{ position: 'absolute', top: 30, right: 450 }}>
        <ContactBody />
      </div>
      <div style={{ position: 'absolute', top: 450, right: 550 }}>
        <FFButton
          name="+ Add product"
          variant="contained"
          color="primary"
          buttonStyles={{
            width: '200px',
            height: '46px',
            color: 'black',
            backgroundColor: 'white',
            marginBottom: '20px',
            border: '2px solid black',
            opacity: '0.5',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '50px',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '1.6',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        />
      </div>
    </>
  )
}

export default Delivery
