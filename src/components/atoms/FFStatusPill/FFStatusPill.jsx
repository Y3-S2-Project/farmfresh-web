import React from 'react'

const FFStatusPill = ({type}) => {
   switch (type) {
     case 'Pending':
       return (
         <div>
           <svg
             width="86"
             height="30"
             viewBox="0 0 86 30"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <rect width="86" height="30" rx="15" fill="#DEB225" />
             <path
               d="M24.436 13.216C24.436 13.664 24.328 14.084 24.112 14.476C23.904 14.868 23.572 15.184 23.116 15.424C22.668 15.664 22.1 15.784 21.412 15.784H20.008V19H18.328V10.624H21.412C22.06 10.624 22.612 10.736 23.068 10.96C23.524 11.184 23.864 11.492 24.088 11.884C24.32 12.276 24.436 12.72 24.436 13.216ZM21.34 14.428C21.804 14.428 22.148 14.324 22.372 14.116C22.596 13.9 22.708 13.6 22.708 13.216C22.708 12.4 22.252 11.992 21.34 11.992H20.008V14.428H21.34ZM31.8088 15.532C31.8088 15.772 31.7928 15.988 31.7608 16.18H26.9008C26.9408 16.66 27.1088 17.036 27.4048 17.308C27.7008 17.58 28.0648 17.716 28.4968 17.716C29.1208 17.716 29.5648 17.448 29.8288 16.912H31.6408C31.4488 17.552 31.0808 18.08 30.5368 18.496C29.9928 18.904 29.3248 19.108 28.5328 19.108C27.8928 19.108 27.3168 18.968 26.8048 18.688C26.3008 18.4 25.9048 17.996 25.6168 17.476C25.3368 16.956 25.1968 16.356 25.1968 15.676C25.1968 14.988 25.3368 14.384 25.6168 13.864C25.8968 13.344 26.2888 12.944 26.7928 12.664C27.2968 12.384 27.8768 12.244 28.5328 12.244C29.1648 12.244 29.7288 12.38 30.2248 12.652C30.7288 12.924 31.1168 13.312 31.3888 13.816C31.6688 14.312 31.8088 14.884 31.8088 15.532ZM30.0688 15.052C30.0608 14.62 29.9048 14.276 29.6008 14.02C29.2968 13.756 28.9248 13.624 28.4848 13.624C28.0688 13.624 27.7168 13.752 27.4288 14.008C27.1488 14.256 26.9768 14.604 26.9128 15.052H30.0688ZM36.719 12.256C37.511 12.256 38.151 12.508 38.639 13.012C39.127 13.508 39.371 14.204 39.371 15.1V19H37.691V15.328C37.691 14.8 37.559 14.396 37.295 14.116C37.031 13.828 36.671 13.684 36.215 13.684C35.751 13.684 35.383 13.828 35.111 14.116C34.847 14.396 34.715 14.8 34.715 15.328V19H33.035V12.352H34.715V13.18C34.939 12.892 35.223 12.668 35.567 12.508C35.919 12.34 36.303 12.256 36.719 12.256ZM40.5366 15.652C40.5366 14.98 40.6686 14.384 40.9326 13.864C41.2046 13.344 41.5726 12.944 42.0366 12.664C42.5006 12.384 43.0166 12.244 43.5846 12.244C44.0166 12.244 44.4286 12.34 44.8206 12.532C45.2126 12.716 45.5246 12.964 45.7566 13.276V10.12H47.4606V19H45.7566V18.016C45.5486 18.344 45.2566 18.608 44.8806 18.808C44.5046 19.008 44.0686 19.108 43.5726 19.108C43.0126 19.108 42.5006 18.964 42.0366 18.676C41.5726 18.388 41.2046 17.984 40.9326 17.464C40.6686 16.936 40.5366 16.332 40.5366 15.652ZM45.7686 15.676C45.7686 15.268 45.6886 14.92 45.5286 14.632C45.3686 14.336 45.1526 14.112 44.8806 13.96C44.6086 13.8 44.3166 13.72 44.0046 13.72C43.6926 13.72 43.4046 13.796 43.1406 13.948C42.8766 14.1 42.6606 14.324 42.4926 14.62C42.3326 14.908 42.2526 15.252 42.2526 15.652C42.2526 16.052 42.3326 16.404 42.4926 16.708C42.6606 17.004 42.8766 17.232 43.1406 17.392C43.4126 17.552 43.7006 17.632 44.0046 17.632C44.3166 17.632 44.6086 17.556 44.8806 17.404C45.1526 17.244 45.3686 17.02 45.5286 16.732C45.6886 16.436 45.7686 16.084 45.7686 15.676ZM49.9534 11.56C49.6574 11.56 49.4094 11.468 49.2094 11.284C49.0174 11.092 48.9214 10.856 48.9214 10.576C48.9214 10.296 49.0174 10.064 49.2094 9.88C49.4094 9.688 49.6574 9.592 49.9534 9.592C50.2494 9.592 50.4934 9.688 50.6854 9.88C50.8854 10.064 50.9854 10.296 50.9854 10.576C50.9854 10.856 50.8854 11.092 50.6854 11.284C50.4934 11.468 50.2494 11.56 49.9534 11.56ZM50.7814 12.352V19H49.1014V12.352H50.7814ZM56.1253 12.256C56.9173 12.256 57.5573 12.508 58.0453 13.012C58.5333 13.508 58.7773 14.204 58.7773 15.1V19H57.0973V15.328C57.0973 14.8 56.9653 14.396 56.7013 14.116C56.4373 13.828 56.0773 13.684 55.6213 13.684C55.1573 13.684 54.7893 13.828 54.5173 14.116C54.2533 14.396 54.1213 14.8 54.1213 15.328V19H52.4413V12.352H54.1213V13.18C54.3453 12.892 54.6293 12.668 54.9733 12.508C55.3253 12.34 55.7093 12.256 56.1253 12.256ZM62.9789 12.244C63.4749 12.244 63.9109 12.344 64.2869 12.544C64.6629 12.736 64.9589 12.988 65.1749 13.3V12.352H66.8669V19.048C66.8669 19.664 66.7429 20.212 66.4949 20.692C66.2469 21.18 65.8749 21.564 65.3789 21.844C64.8829 22.132 64.2829 22.276 63.5789 22.276C62.6349 22.276 61.8589 22.056 61.2509 21.616C60.6509 21.176 60.3109 20.576 60.2309 19.816H61.8989C61.9869 20.12 62.1749 20.36 62.4629 20.536C62.7589 20.72 63.1149 20.812 63.5309 20.812C64.0189 20.812 64.4149 20.664 64.7189 20.368C65.0229 20.08 65.1749 19.64 65.1749 19.048V18.016C64.9589 18.328 64.6589 18.588 64.2749 18.796C63.8989 19.004 63.4669 19.108 62.9789 19.108C62.4189 19.108 61.9069 18.964 61.4429 18.676C60.9789 18.388 60.6109 17.984 60.3389 17.464C60.0749 16.936 59.9429 16.332 59.9429 15.652C59.9429 14.98 60.0749 14.384 60.3389 13.864C60.6109 13.344 60.9749 12.944 61.4309 12.664C61.8949 12.384 62.4109 12.244 62.9789 12.244ZM65.1749 15.676C65.1749 15.268 65.0949 14.92 64.9349 14.632C64.7749 14.336 64.5589 14.112 64.2869 13.96C64.0149 13.8 63.7229 13.72 63.4109 13.72C63.0989 13.72 62.8109 13.796 62.5469 13.948C62.2829 14.1 62.0669 14.324 61.8989 14.62C61.7389 14.908 61.6589 15.252 61.6589 15.652C61.6589 16.052 61.7389 16.404 61.8989 16.708C62.0669 17.004 62.2829 17.232 62.5469 17.392C62.8189 17.552 63.1069 17.632 63.4109 17.632C63.7229 17.632 64.0149 17.556 64.2869 17.404C64.5589 17.244 64.7749 17.02 64.9349 16.732C65.0949 16.436 65.1749 16.084 65.1749 15.676Z"
               fill="white"
             />
           </svg>
         </div>
       )

     case 'Confirmed':
       return (
         <div>
           <svg
             width="86"
             height="30"
             viewBox="0 0 86 30"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <rect width="86" height="30" rx="15" fill="#31A409" />
             <path
               d="M10.42 14.8C10.42 13.976 10.604 13.24 10.972 12.592C11.348 11.936 11.856 11.428 12.496 11.068C13.144 10.7 13.868 10.516 14.668 10.516C15.604 10.516 16.424 10.756 17.128 11.236C17.832 11.716 18.324 12.38 18.604 13.228H16.672C16.48 12.828 16.208 12.528 15.856 12.328C15.512 12.128 15.112 12.028 14.656 12.028C14.168 12.028 13.732 12.144 13.348 12.376C12.972 12.6 12.676 12.92 12.46 13.336C12.252 13.752 12.148 14.24 12.148 14.8C12.148 15.352 12.252 15.84 12.46 16.264C12.676 16.68 12.972 17.004 13.348 17.236C13.732 17.46 14.168 17.572 14.656 17.572C15.112 17.572 15.512 17.472 15.856 17.272C16.208 17.064 16.48 16.76 16.672 16.36H18.604C18.324 17.216 17.832 17.884 17.128 18.364C16.432 18.836 15.612 19.072 14.668 19.072C13.868 19.072 13.144 18.892 12.496 18.532C11.856 18.164 11.348 17.656 10.972 17.008C10.604 16.36 10.42 15.624 10.42 14.8ZM22.9909 19.108C22.3509 19.108 21.7749 18.968 21.2629 18.688C20.7509 18.4 20.3469 17.996 20.0509 17.476C19.7629 16.956 19.6189 16.356 19.6189 15.676C19.6189 14.996 19.7669 14.396 20.0629 13.876C20.3669 13.356 20.7789 12.956 21.2989 12.676C21.8189 12.388 22.3989 12.244 23.0389 12.244C23.6789 12.244 24.2589 12.388 24.7789 12.676C25.2989 12.956 25.7069 13.356 26.0029 13.876C26.3069 14.396 26.4589 14.996 26.4589 15.676C26.4589 16.356 26.3029 16.956 25.9909 17.476C25.6869 17.996 25.2709 18.4 24.7429 18.688C24.2229 18.968 23.6389 19.108 22.9909 19.108ZM22.9909 17.644C23.2949 17.644 23.5789 17.572 23.8429 17.428C24.1149 17.276 24.3309 17.052 24.4909 16.756C24.6509 16.46 24.7309 16.1 24.7309 15.676C24.7309 15.044 24.5629 14.56 24.2269 14.224C23.8989 13.88 23.4949 13.708 23.0149 13.708C22.5349 13.708 22.1309 13.88 21.8029 14.224C21.4829 14.56 21.3229 15.044 21.3229 15.676C21.3229 16.308 21.4789 16.796 21.7909 17.14C22.1109 17.476 22.5109 17.644 22.9909 17.644ZM31.3753 12.256C32.1673 12.256 32.8073 12.508 33.2953 13.012C33.7833 13.508 34.0273 14.204 34.0273 15.1V19H32.3473V15.328C32.3473 14.8 32.2153 14.396 31.9513 14.116C31.6873 13.828 31.3273 13.684 30.8713 13.684C30.4073 13.684 30.0393 13.828 29.7673 14.116C29.5033 14.396 29.3713 14.8 29.3713 15.328V19H27.6913V12.352H29.3713V13.18C29.5953 12.892 29.8793 12.668 30.2233 12.508C30.5753 12.34 30.9593 12.256 31.3753 12.256ZM38.6729 13.732H37.5089V19H35.8049V13.732H35.0489V12.352H35.8049V12.016C35.8049 11.2 36.0369 10.6 36.5009 10.216C36.9649 9.832 37.6649 9.652 38.6009 9.676V11.092C38.1929 11.084 37.9089 11.152 37.7489 11.296C37.5889 11.44 37.5089 11.7 37.5089 12.076V12.352H38.6729V13.732ZM40.6136 11.56C40.3176 11.56 40.0696 11.468 39.8696 11.284C39.6776 11.092 39.5816 10.856 39.5816 10.576C39.5816 10.296 39.6776 10.064 39.8696 9.88C40.0696 9.688 40.3176 9.592 40.6136 9.592C40.9096 9.592 41.1536 9.688 41.3456 9.88C41.5456 10.064 41.6456 10.296 41.6456 10.576C41.6456 10.856 41.5456 11.092 41.3456 11.284C41.1536 11.468 40.9096 11.56 40.6136 11.56ZM41.4416 12.352V19H39.7616V12.352H41.4416ZM44.7814 13.384C44.9974 13.032 45.2774 12.756 45.6214 12.556C45.9734 12.356 46.3734 12.256 46.8214 12.256V14.02H46.3774C45.8494 14.02 45.4494 14.144 45.1774 14.392C44.9134 14.64 44.7814 15.072 44.7814 15.688V19H43.1014V12.352H44.7814V13.384ZM56.209 12.256C57.025 12.256 57.681 12.508 58.177 13.012C58.681 13.508 58.933 14.204 58.933 15.1V19H57.253V15.328C57.253 14.808 57.121 14.412 56.857 14.14C56.593 13.86 56.233 13.72 55.777 13.72C55.321 13.72 54.957 13.86 54.685 14.14C54.421 14.412 54.289 14.808 54.289 15.328V19H52.609V15.328C52.609 14.808 52.477 14.412 52.213 14.14C51.949 13.86 51.589 13.72 51.133 13.72C50.669 13.72 50.301 13.86 50.029 14.14C49.765 14.412 49.633 14.808 49.633 15.328V19H47.953V12.352H49.633V13.156C49.849 12.876 50.125 12.656 50.461 12.496C50.805 12.336 51.181 12.256 51.589 12.256C52.109 12.256 52.573 12.368 52.981 12.592C53.389 12.808 53.705 13.12 53.929 13.528C54.145 13.144 54.457 12.836 54.865 12.604C55.281 12.372 55.729 12.256 56.209 12.256ZM66.7072 15.532C66.7072 15.772 66.6912 15.988 66.6592 16.18H61.7992C61.8392 16.66 62.0072 17.036 62.3032 17.308C62.5992 17.58 62.9632 17.716 63.3952 17.716C64.0192 17.716 64.4632 17.448 64.7272 16.912H66.5392C66.3472 17.552 65.9792 18.08 65.4352 18.496C64.8912 18.904 64.2232 19.108 63.4312 19.108C62.7912 19.108 62.2152 18.968 61.7032 18.688C61.1992 18.4 60.8032 17.996 60.5152 17.476C60.2352 16.956 60.0952 16.356 60.0952 15.676C60.0952 14.988 60.2352 14.384 60.5152 13.864C60.7952 13.344 61.1872 12.944 61.6912 12.664C62.1952 12.384 62.7752 12.244 63.4312 12.244C64.0632 12.244 64.6272 12.38 65.1232 12.652C65.6272 12.924 66.0152 13.312 66.2872 13.816C66.5672 14.312 66.7072 14.884 66.7072 15.532ZM64.9672 15.052C64.9592 14.62 64.8032 14.276 64.4992 14.02C64.1952 13.756 63.8232 13.624 63.3832 13.624C62.9672 13.624 62.6152 13.752 62.3272 14.008C62.0472 14.256 61.8752 14.604 61.8112 15.052H64.9672ZM67.5015 15.652C67.5015 14.98 67.6335 14.384 67.8975 13.864C68.1695 13.344 68.5375 12.944 69.0015 12.664C69.4655 12.384 69.9815 12.244 70.5495 12.244C70.9815 12.244 71.3935 12.34 71.7855 12.532C72.1775 12.716 72.4895 12.964 72.7215 13.276V10.12H74.4255V19H72.7215V18.016C72.5135 18.344 72.2215 18.608 71.8455 18.808C71.4695 19.008 71.0335 19.108 70.5375 19.108C69.9775 19.108 69.4655 18.964 69.0015 18.676C68.5375 18.388 68.1695 17.984 67.8975 17.464C67.6335 16.936 67.5015 16.332 67.5015 15.652ZM72.7335 15.676C72.7335 15.268 72.6535 14.92 72.4935 14.632C72.3335 14.336 72.1175 14.112 71.8455 13.96C71.5735 13.8 71.2815 13.72 70.9695 13.72C70.6575 13.72 70.3695 13.796 70.1055 13.948C69.8415 14.1 69.6255 14.324 69.4575 14.62C69.2975 14.908 69.2175 15.252 69.2175 15.652C69.2175 16.052 69.2975 16.404 69.4575 16.708C69.6255 17.004 69.8415 17.232 70.1055 17.392C70.3775 17.552 70.6655 17.632 70.9695 17.632C71.2815 17.632 71.5735 17.556 71.8455 17.404C72.1175 17.244 72.3335 17.02 72.4935 16.732C72.6535 16.436 72.7335 16.084 72.7335 15.676Z"
               fill="white"
             />
           </svg>
         </div>
       )
     case 'Cancelled':
       return (
         <div>
           <svg
             width="86"
             height="30"
             viewBox="0 0 86 30"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <rect width="86" height="30" rx="15" fill="#FF0000" />
             <path
               d="M13.92 14.8C13.92 13.976 14.104 13.24 14.472 12.592C14.848 11.936 15.356 11.428 15.996 11.068C16.644 10.7 17.368 10.516 18.168 10.516C19.104 10.516 19.924 10.756 20.628 11.236C21.332 11.716 21.824 12.38 22.104 13.228H20.172C19.98 12.828 19.708 12.528 19.356 12.328C19.012 12.128 18.612 12.028 18.156 12.028C17.668 12.028 17.232 12.144 16.848 12.376C16.472 12.6 16.176 12.92 15.96 13.336C15.752 13.752 15.648 14.24 15.648 14.8C15.648 15.352 15.752 15.84 15.96 16.264C16.176 16.68 16.472 17.004 16.848 17.236C17.232 17.46 17.668 17.572 18.156 17.572C18.612 17.572 19.012 17.472 19.356 17.272C19.708 17.064 19.98 16.76 20.172 16.36H22.104C21.824 17.216 21.332 17.884 20.628 18.364C19.932 18.836 19.112 19.072 18.168 19.072C17.368 19.072 16.644 18.892 15.996 18.532C15.356 18.164 14.848 17.656 14.472 17.008C14.104 16.36 13.92 15.624 13.92 14.8ZM23.1069 15.652C23.1069 14.98 23.2389 14.384 23.5029 13.864C23.7749 13.344 24.1389 12.944 24.5949 12.664C25.0589 12.384 25.5749 12.244 26.1429 12.244C26.6389 12.244 27.0709 12.344 27.4389 12.544C27.8149 12.744 28.1149 12.996 28.3389 13.3V12.352H30.0309V19H28.3389V18.028C28.1229 18.34 27.8229 18.6 27.4389 18.808C27.0629 19.008 26.6269 19.108 26.1309 19.108C25.5709 19.108 25.0589 18.964 24.5949 18.676C24.1389 18.388 23.7749 17.984 23.5029 17.464C23.2389 16.936 23.1069 16.332 23.1069 15.652ZM28.3389 15.676C28.3389 15.268 28.2589 14.92 28.0989 14.632C27.9389 14.336 27.7229 14.112 27.4509 13.96C27.1789 13.8 26.8869 13.72 26.5749 13.72C26.2629 13.72 25.9749 13.796 25.7109 13.948C25.4469 14.1 25.2309 14.324 25.0629 14.62C24.9029 14.908 24.8229 15.252 24.8229 15.652C24.8229 16.052 24.9029 16.404 25.0629 16.708C25.2309 17.004 25.4469 17.232 25.7109 17.392C25.9829 17.552 26.2709 17.632 26.5749 17.632C26.8869 17.632 27.1789 17.556 27.4509 17.404C27.7229 17.244 27.9389 17.02 28.0989 16.732C28.2589 16.436 28.3389 16.084 28.3389 15.676ZM35.3558 12.256C36.1478 12.256 36.7878 12.508 37.2758 13.012C37.7638 13.508 38.0078 14.204 38.0078 15.1V19H36.3278V15.328C36.3278 14.8 36.1958 14.396 35.9318 14.116C35.6678 13.828 35.3078 13.684 34.8518 13.684C34.3878 13.684 34.0198 13.828 33.7478 14.116C33.4838 14.396 33.3518 14.8 33.3518 15.328V19H31.6718V12.352H33.3518V13.18C33.5758 12.892 33.8598 12.668 34.2038 12.508C34.5558 12.34 34.9398 12.256 35.3558 12.256ZM39.1733 15.676C39.1733 14.988 39.3133 14.388 39.5933 13.876C39.8733 13.356 40.2613 12.956 40.7573 12.676C41.2533 12.388 41.8213 12.244 42.4613 12.244C43.2853 12.244 43.9653 12.452 44.5013 12.868C45.0453 13.276 45.4093 13.852 45.5933 14.596H43.7813C43.6853 14.308 43.5213 14.084 43.2893 13.924C43.0653 13.756 42.7853 13.672 42.4493 13.672C41.9693 13.672 41.5893 13.848 41.3093 14.2C41.0293 14.544 40.8893 15.036 40.8893 15.676C40.8893 16.308 41.0293 16.8 41.3093 17.152C41.5893 17.496 41.9693 17.668 42.4493 17.668C43.1293 17.668 43.5733 17.364 43.7813 16.756H45.5933C45.4093 17.476 45.0453 18.048 44.5013 18.472C43.9573 18.896 43.2773 19.108 42.4613 19.108C41.8213 19.108 41.2533 18.968 40.7573 18.688C40.2613 18.4 39.8733 18 39.5933 17.488C39.3133 16.968 39.1733 16.364 39.1733 15.676ZM53.0041 15.532C53.0041 15.772 52.9881 15.988 52.9561 16.18H48.0961C48.1361 16.66 48.3041 17.036 48.6001 17.308C48.8961 17.58 49.2601 17.716 49.6921 17.716C50.3161 17.716 50.7601 17.448 51.0241 16.912H52.8361C52.6441 17.552 52.2761 18.08 51.7321 18.496C51.1881 18.904 50.5201 19.108 49.7281 19.108C49.0881 19.108 48.5121 18.968 48.0001 18.688C47.4961 18.4 47.1001 17.996 46.8121 17.476C46.5321 16.956 46.3921 16.356 46.3921 15.676C46.3921 14.988 46.5321 14.384 46.8121 13.864C47.0921 13.344 47.4841 12.944 47.9881 12.664C48.4921 12.384 49.0721 12.244 49.7281 12.244C50.3601 12.244 50.9241 12.38 51.4201 12.652C51.9241 12.924 52.3121 13.312 52.5841 13.816C52.8641 14.312 53.0041 14.884 53.0041 15.532ZM51.2641 15.052C51.2561 14.62 51.1001 14.276 50.7961 14.02C50.4921 13.756 50.1201 13.624 49.6801 13.624C49.2641 13.624 48.9121 13.752 48.6241 14.008C48.3441 14.256 48.1721 14.604 48.1081 15.052H51.2641ZM55.9103 10.12V19H54.2303V10.12H55.9103ZM63.7502 15.532C63.7502 15.772 63.7342 15.988 63.7022 16.18H58.8422C58.8822 16.66 59.0502 17.036 59.3462 17.308C59.6422 17.58 60.0062 17.716 60.4382 17.716C61.0622 17.716 61.5062 17.448 61.7702 16.912H63.5822C63.3902 17.552 63.0222 18.08 62.4782 18.496C61.9342 18.904 61.2662 19.108 60.4742 19.108C59.8342 19.108 59.2582 18.968 58.7462 18.688C58.2422 18.4 57.8462 17.996 57.5582 17.476C57.2782 16.956 57.1382 16.356 57.1382 15.676C57.1382 14.988 57.2782 14.384 57.5582 13.864C57.8382 13.344 58.2302 12.944 58.7342 12.664C59.2382 12.384 59.8182 12.244 60.4742 12.244C61.1062 12.244 61.6702 12.38 62.1662 12.652C62.6702 12.924 63.0582 13.312 63.3302 13.816C63.6102 14.312 63.7502 14.884 63.7502 15.532ZM62.0102 15.052C62.0022 14.62 61.8462 14.276 61.5422 14.02C61.2382 13.756 60.8662 13.624 60.4262 13.624C60.0102 13.624 59.6582 13.752 59.3702 14.008C59.0902 14.256 58.9182 14.604 58.8542 15.052H62.0102ZM64.5444 15.652C64.5444 14.98 64.6764 14.384 64.9404 13.864C65.2124 13.344 65.5804 12.944 66.0444 12.664C66.5084 12.384 67.0244 12.244 67.5924 12.244C68.0244 12.244 68.4364 12.34 68.8284 12.532C69.2204 12.716 69.5324 12.964 69.7644 13.276V10.12H71.4684V19H69.7644V18.016C69.5564 18.344 69.2644 18.608 68.8884 18.808C68.5124 19.008 68.0764 19.108 67.5804 19.108C67.0204 19.108 66.5084 18.964 66.0444 18.676C65.5804 18.388 65.2124 17.984 64.9404 17.464C64.6764 16.936 64.5444 16.332 64.5444 15.652ZM69.7764 15.676C69.7764 15.268 69.6964 14.92 69.5364 14.632C69.3764 14.336 69.1604 14.112 68.8884 13.96C68.6164 13.8 68.3244 13.72 68.0124 13.72C67.7004 13.72 67.4124 13.796 67.1484 13.948C66.8844 14.1 66.6684 14.324 66.5004 14.62C66.3404 14.908 66.2604 15.252 66.2604 15.652C66.2604 16.052 66.3404 16.404 66.5004 16.708C66.6684 17.004 66.8844 17.232 67.1484 17.392C67.4204 17.552 67.7084 17.632 68.0124 17.632C68.3244 17.632 68.6164 17.556 68.8884 17.404C69.1604 17.244 69.3764 17.02 69.5364 16.732C69.6964 16.436 69.7764 16.084 69.7764 15.676Z"
               fill="white"
             />
           </svg>
         </div>
       )
     default:
       return <div className="overflow-hidden">{type}</div>
   }
}
export default FFStatusPill
