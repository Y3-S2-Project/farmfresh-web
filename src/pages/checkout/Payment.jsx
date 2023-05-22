import React, { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'
import { getClientSecret } from '../../services/payment'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51N3x7aSBDY9rlLLc3us7ndRplJVM9C6kLRq5ep9SX9Kzb3Ug8hI4AQft2crySSvEppVLX4N3llixuml35V6Duvve00DA0OR2Hj',
)
const data = {
  amount: '1000',
  currency: 'usd',
}

function Payment() {
  const [secret, setSecret] = useState('')

  useEffect(() => {
    getClientSecret(data)
      .then((res) => setSecret(res))
      .catch((err) => console.error(err))
  }, [])

  const options = {
    // passing the client secret obtained in step 3
    clientSecret: secret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  }

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </>
  )
}

export default Payment
