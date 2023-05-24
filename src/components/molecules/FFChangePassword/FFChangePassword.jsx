import React from 'react'
import FFForm from '../FFForm/FFForm'
import FFTextField from '../../atoms/FFInputField/FFTextField'
import EyeOpenIcon from '../../../assets/icons/EyeOpenIcon'

const FFChangePassword = () => {
  return (
    <>
      <div className="border-2 border-[rgba(0, 0, 0, 0.25)] rounded-xl w-3/4 m-4 p-4 max-w-3xl">
        <h1 className="text-2xl font-semibold mx-5 my-5">Change Password</h1>
        <div className="flex flex-col justify-start content-around mx-5">
          <FFForm>
            <FFTextField
              label={'Current Password'}
              type={'password'}
              labelClassName={'block text-base font-medium text-black'}
              inputClassName={
                'bg-[#F4F4F5] w-3/4 h-12 mb-4 py-1 px-2 rounded-lg focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2'
              }
            />
            <FFTextField
              label={'New Password'}
              required={true}
              requireText={'Required'}
              type={'password'}
              labelClassName={'block text-base font-medium text-black'}
              inputClassName={
                'bg-[#F4F4F5] w-3/4 h-12 mb-4 py-1 px-2 rounded-lg focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2'
              }
            />
            <FFTextField
              label={'Confirm New Password'}
              type={'password'}
              labelClassName={'block text-base font-medium text-black'}
              inputClassName={
                'bg-[#F4F4F5] w-3/4 h-12 mb-4 py-1 px-2 rounded-lg focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2'
              }
              endIcon={
                <EyeOpenIcon
                  className={'relative transform -translate-y-1/2 top-10'}
                />
              }
            />
          </FFForm>
        </div>
      </div>
    </>
  )
}

export default FFChangePassword
