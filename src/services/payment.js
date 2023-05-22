export const getClientSecret = async (data) => {
  console.log('Coming here: ', data)
  const { client_secret } = await (
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/payment/secret?amount=${data.amount}`,
    )
  ).json()
  console.log('client secret: ', client_secret)
  return client_secret
}
