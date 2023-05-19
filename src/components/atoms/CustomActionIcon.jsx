import React from 'react';

export const CustomActionIcon = ({ actionType, action, id, data }) => {
  switch (actionType) {
    case 'farmer-edit':
      return <div className='cursor-pointer' onClick={() => action(id, data)}><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.93825 17.1H4.42935L13.6156 8.475L12.1245 7.075L2.93825 15.7V17.1ZM18.1688 7.025L13.6422 2.825L16.651 0L21.151 4.225L18.1688 7.025ZM0.808105 19.1V14.85L12.0979 4.25L16.6244 8.5L5.33466 19.1H0.808105ZM12.87 7.775L12.1245 7.075L13.6156 8.475L12.87 7.775Z" fill="#DEB225"/>
</svg></div>;
    case 'farmer-remove':
      return <div  className='cursor-pointer' onClick={() => action(id)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 6V6.5H17H21.5V7.5H20H19.5V8V21C19.5 21.1326 19.4473 21.2598 19.3536 21.3536C19.2598 21.4473 19.1326 21.5 19 21.5H5C4.86739 21.5 4.74021 21.4473 4.64645 21.3536C4.55268 21.2598 4.5 21.1326 4.5 21V8V7.5H4H2.5V6.5H7H7.5V6V3C7.5 2.86739 7.55268 2.74021 7.64645 2.64645C7.74021 2.55268 7.86739 2.5 8 2.5H16C16.1326 2.5 16.2598 2.55268 16.3536 2.64645C16.4473 2.74021 16.5 2.86739 16.5 3V6ZM18.5 8V7.5H18H6H5.5V8V20V20.5H6H18H18.5V20V8ZM9 3.5H8.5V4V6V6.5H9H15H15.5V6V4V3.5H15H9ZM9.5 11.5H10.5V16.5H9.5V11.5ZM13.5 11.5H14.5V16.5H13.5V11.5Z" fill="#FE2A26" stroke="#FE2A26"/>
</svg></div>;
    case 'farmer-view':
      return <div  className='cursor-pointer' onClick={() => action(id)}><svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6049 2C14.5633 1.99389 16.4838 2.50678 18.1456 3.47973C19.8074 4.45267 21.143 5.84616 21.9989 7.5C20.2415 10.87 16.6522 13 12.6049 13C8.55768 13 4.96838 10.87 3.21102 7.5C4.06693 5.84616 5.40254 4.45267 7.06432 3.47973C8.72609 2.50678 10.6466 1.99389 12.6049 2ZM12.6049 0C7.27959 0 2.73173 3.11 0.88916 7.5C2.73173 11.89 7.27959 15 12.6049 15C17.9303 15 22.4782 11.89 24.3207 7.5C22.4782 3.11 17.9303 0 12.6049 0ZM12.6049 5C13.3111 5 13.9884 5.26339 14.4877 5.73223C14.9871 6.20107 15.2676 6.83696 15.2676 7.5C15.2676 8.16304 14.9871 8.79893 14.4877 9.26777C13.9884 9.73661 13.3111 10 12.6049 10C11.8988 10 11.2215 9.73661 10.7221 9.26777C10.2228 8.79893 9.94227 8.16304 9.94227 7.5C9.94227 6.83696 10.2228 6.20107 10.7221 5.73223C11.2215 5.26339 11.8988 5 12.6049 5ZM12.6049 3C9.96357 3 7.81213 5.02 7.81213 7.5C7.81213 9.98 9.96357 12 12.6049 12C15.2463 12 17.3978 9.98 17.3978 7.5C17.3978 5.02 15.2463 3 12.6049 3Z" fill="#1976E4"/>
</svg></div>;
    case 'admin-accept':
      return <div  className='cursor-pointer' onClick={() => action(id, data)}><svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.7917 1.93875L7.79167 18.4387L0 10.8762L1.9975 8.9375L7.79167 14.5475L22.7942 0L24.7917 1.93875Z" fill="#31A409"/>
</svg>
</div>;
    case 'admin-remove':
      return <div  className='cursor-pointer' onClick={() => action(id)}><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3333 1.58625L14.6883 0L8.16667 6.28875L1.645 0L0 1.58625L6.52167 7.875L0 14.1637L1.645 15.75L8.16667 9.46125L14.6883 15.75L16.3333 14.1637L9.81167 7.875L16.3333 1.58625Z" fill="#FE2A26"/>
</svg>
</div>;
    case 'admin-view':
      return <div   className='cursor-pointer' onClick={() => action(id)}><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2C12.8387 1.99389 14.6419 2.50678 16.2021 3.47973C17.7624 4.45267 19.0164 5.84616 19.82 7.5C18.17 10.87 14.8 13 11 13C7.2 13 3.83 10.87 2.18 7.5C2.98362 5.84616 4.23763 4.45267 5.79788 3.47973C7.35813 2.50678 9.16126 1.99389 11 2ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 5C11.663 5 12.2989 5.26339 12.7678 5.73223C13.2366 6.20107 13.5 6.83696 13.5 7.5C13.5 8.16304 13.2366 8.79893 12.7678 9.26777C12.2989 9.73661 11.663 10 11 10C10.337 10 9.70107 9.73661 9.23223 9.26777C8.76339 8.79893 8.5 8.16304 8.5 7.5C8.5 6.83696 8.76339 6.20107 9.23223 5.73223C9.70107 5.26339 10.337 5 11 5ZM11 3C8.52 3 6.5 5.02 6.5 7.5C6.5 9.98 8.52 12 11 12C13.48 12 15.5 9.98 15.5 7.5C15.5 5.02 13.48 3 11 3Z" fill="#1976E4"/>
</svg>
</div>;
    default:
      return null;
  }
};