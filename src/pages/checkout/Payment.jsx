import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51N3x7aSBDY9rlLLc3us7ndRplJVM9C6kLRq5ep9SX9Kzb3Ug8hI4AQft2crySSvEppVLX4N3llixuml35V6Duvve00DA0OR2Hj',
)

function Payment() {
  const options = {
    // passing the client secret obtained in step 3
    clientSecret: '{{CLIENT_SECRET}}',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
}

export default Payment
