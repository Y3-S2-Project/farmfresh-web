import React from 'react'
import FFButton from '../../components/atoms/FFButton'
import ClappingIcon from '../../assets/icons/ClappingIcon'

const index = () => {
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFButton
        name="Helpful"
        variant="outlined"
        color="success"
        startIcon={<ClappingIcon />}
        buttonStyles={{ width: '100px', borderRadius: '12px', height: '40px' }}
        handleClick={() => console.log('clicked')}
      />
    </>
  )
}

export default index
