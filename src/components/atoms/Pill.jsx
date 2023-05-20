import React from 'react'

export const Pill = ({ type }) => {
  switch (type) {
    case 'in stock':
      return (
        <div>
          <svg
            width="87"
            height="34"
            viewBox="0 0 87 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.016 12.636V21H20.924V12.636H22.016ZM27.0811 14.304C27.8811 14.304 28.5291 14.548 29.0251 15.036C29.5211 15.516 29.7691 16.212 29.7691 17.124V21H28.6891V17.28C28.6891 16.624 28.5251 16.124 28.1971 15.78C27.8691 15.428 27.4211 15.252 26.8531 15.252C26.2771 15.252 25.8171 15.432 25.4731 15.792C25.1371 16.152 24.9691 16.676 24.9691 17.364V21H23.8771V14.424H24.9691V15.36C25.1851 15.024 25.4771 14.764 25.8451 14.58C26.2211 14.396 26.6331 14.304 27.0811 14.304ZM37.4041 21.084C36.8521 21.084 36.3561 20.988 35.9161 20.796C35.4841 20.596 35.1441 20.324 34.8961 19.98C34.6481 19.628 34.5201 19.224 34.5121 18.768H35.6761C35.7161 19.16 35.8761 19.492 36.1561 19.764C36.4441 20.028 36.8601 20.16 37.4041 20.16C37.9241 20.16 38.3321 20.032 38.6281 19.776C38.9321 19.512 39.0841 19.176 39.0841 18.768C39.0841 18.448 38.9961 18.188 38.8201 17.988C38.6441 17.788 38.4241 17.636 38.1601 17.532C37.8961 17.428 37.5401 17.316 37.0921 17.196C36.5401 17.052 36.0961 16.908 35.7601 16.764C35.4321 16.62 35.1481 16.396 34.9081 16.092C34.6761 15.78 34.5601 15.364 34.5601 14.844C34.5601 14.388 34.6761 13.984 34.9081 13.632C35.1401 13.28 35.4641 13.008 35.8801 12.816C36.3041 12.624 36.7881 12.528 37.3321 12.528C38.1161 12.528 38.7561 12.724 39.2521 13.116C39.7561 13.508 40.0401 14.028 40.1041 14.676H38.9041C38.8641 14.356 38.6961 14.076 38.4001 13.836C38.1041 13.588 37.7121 13.464 37.2241 13.464C36.7681 13.464 36.3961 13.584 36.1081 13.824C35.8201 14.056 35.6761 14.384 35.6761 14.808C35.6761 15.112 35.7601 15.36 35.9281 15.552C36.1041 15.744 36.3161 15.892 36.5641 15.996C36.8201 16.092 37.1761 16.204 37.6321 16.332C38.1841 16.484 38.6281 16.636 38.9641 16.788C39.3001 16.932 39.5881 17.16 39.8281 17.472C40.0681 17.776 40.1881 18.192 40.1881 18.72C40.1881 19.128 40.0801 19.512 39.8641 19.872C39.6481 20.232 39.3281 20.524 38.9041 20.748C38.4801 20.972 37.9801 21.084 37.4041 21.084ZM43.1271 15.324V19.2C43.1271 19.52 43.1951 19.748 43.3311 19.884C43.4671 20.012 43.7031 20.076 44.0391 20.076H44.8431V21H43.8591C43.2511 21 42.7951 20.86 42.4911 20.58C42.1871 20.3 42.0351 19.84 42.0351 19.2V15.324H41.1831V14.424H42.0351V12.768H43.1271V14.424H44.8431V15.324H43.1271ZM49.0342 21.108C48.4182 21.108 47.8582 20.968 47.3542 20.688C46.8582 20.408 46.4662 20.012 46.1782 19.5C45.8982 18.98 45.7582 18.38 45.7582 17.7C45.7582 17.028 45.9022 16.436 46.1902 15.924C46.4862 15.404 46.8862 15.008 47.3902 14.736C47.8942 14.456 48.4582 14.316 49.0822 14.316C49.7062 14.316 50.2702 14.456 50.7742 14.736C51.2782 15.008 51.6742 15.4 51.9622 15.912C52.2582 16.424 52.4062 17.02 52.4062 17.7C52.4062 18.38 52.2542 18.98 51.9502 19.5C51.6542 20.012 51.2502 20.408 50.7382 20.688C50.2262 20.968 49.6582 21.108 49.0342 21.108ZM49.0342 20.148C49.4262 20.148 49.7942 20.056 50.1382 19.872C50.4822 19.688 50.7582 19.412 50.9662 19.044C51.1822 18.676 51.2902 18.228 51.2902 17.7C51.2902 17.172 51.1862 16.724 50.9782 16.356C50.7702 15.988 50.4982 15.716 50.1622 15.54C49.8262 15.356 49.4622 15.264 49.0702 15.264C48.6702 15.264 48.3022 15.356 47.9662 15.54C47.6382 15.716 47.3742 15.988 47.1742 16.356C46.9742 16.724 46.8742 17.172 46.8742 17.7C46.8742 18.236 46.9702 18.688 47.1622 19.056C47.3622 19.424 47.6262 19.7 47.9542 19.884C48.2822 20.06 48.6422 20.148 49.0342 20.148ZM53.434 17.7C53.434 17.02 53.57 16.428 53.842 15.924C54.114 15.412 54.49 15.016 54.97 14.736C55.458 14.456 56.014 14.316 56.638 14.316C57.446 14.316 58.11 14.512 58.63 14.904C59.158 15.296 59.506 15.84 59.674 16.536H58.498C58.386 16.136 58.166 15.82 57.838 15.588C57.518 15.356 57.118 15.24 56.638 15.24C56.014 15.24 55.51 15.456 55.126 15.888C54.742 16.312 54.55 16.916 54.55 17.7C54.55 18.492 54.742 19.104 55.126 19.536C55.51 19.968 56.014 20.184 56.638 20.184C57.118 20.184 57.518 20.072 57.838 19.848C58.158 19.624 58.378 19.304 58.498 18.888H59.674C59.498 19.56 59.146 20.1 58.618 20.508C58.09 20.908 57.43 21.108 56.638 21.108C56.014 21.108 55.458 20.968 54.97 20.688C54.49 20.408 54.114 20.012 53.842 19.5C53.57 18.988 53.434 18.388 53.434 17.7ZM64.803 21L62.223 18.096V21H61.131V12.12H62.223V17.34L64.755 14.424H66.279L63.183 17.7L66.291 21H64.803Z"
              fill="#7FB801"
            />
            <rect
              x="0.5"
              y="0.5"
              width="86"
              height="33"
              rx="3.5"
              stroke="#31A409"
            />
          </svg>
        </div>
      )

    case 'out of stock':
      return (
        <div>
          <svg
            width="103"
            height="34"
            viewBox="0 0 103 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.216 21.084C18.44 21.084 17.732 20.904 17.092 20.544C16.452 20.176 15.944 19.668 15.568 19.02C15.2 18.364 15.016 17.628 15.016 16.812C15.016 15.996 15.2 15.264 15.568 14.616C15.944 13.96 16.452 13.452 17.092 13.092C17.732 12.724 18.44 12.54 19.216 12.54C20 12.54 20.712 12.724 21.352 13.092C21.992 13.452 22.496 13.956 22.864 14.604C23.232 15.252 23.416 15.988 23.416 16.812C23.416 17.636 23.232 18.372 22.864 19.02C22.496 19.668 21.992 20.176 21.352 20.544C20.712 20.904 20 21.084 19.216 21.084ZM19.216 20.136C19.8 20.136 20.324 20 20.788 19.728C21.26 19.456 21.628 19.068 21.892 18.564C22.164 18.06 22.3 17.476 22.3 16.812C22.3 16.14 22.164 15.556 21.892 15.06C21.628 14.556 21.264 14.168 20.8 13.896C20.336 13.624 19.808 13.488 19.216 13.488C18.624 13.488 18.096 13.624 17.632 13.896C17.168 14.168 16.8 14.556 16.528 15.06C16.264 15.556 16.132 16.14 16.132 16.812C16.132 17.476 16.264 18.06 16.528 18.564C16.8 19.068 17.168 19.456 17.632 19.728C18.104 20 18.632 20.136 19.216 20.136ZM30.6896 14.424V21H29.5976V20.028C29.3896 20.364 29.0976 20.628 28.7216 20.82C28.3536 21.004 27.9456 21.096 27.4976 21.096C26.9856 21.096 26.5256 20.992 26.1176 20.784C25.7096 20.568 25.3856 20.248 25.1456 19.824C24.9136 19.4 24.7976 18.884 24.7976 18.276V14.424H25.8776V18.132C25.8776 18.78 26.0416 19.28 26.3696 19.632C26.6976 19.976 27.1456 20.148 27.7136 20.148C28.2976 20.148 28.7576 19.968 29.0936 19.608C29.4296 19.248 29.5976 18.724 29.5976 18.036V14.424H30.6896ZM33.8654 15.324V19.2C33.8654 19.52 33.9334 19.748 34.0694 19.884C34.2054 20.012 34.4414 20.076 34.7774 20.076H35.5814V21H34.5974C33.9894 21 33.5334 20.86 33.2294 20.58C32.9254 20.3 32.7734 19.84 32.7734 19.2V15.324H31.9214V14.424H32.7734V12.768H33.8654V14.424H35.5814V15.324H33.8654ZM43.8957 21.084C43.1197 21.084 42.4117 20.904 41.7717 20.544C41.1317 20.176 40.6237 19.668 40.2477 19.02C39.8797 18.364 39.6957 17.628 39.6957 16.812C39.6957 15.996 39.8797 15.264 40.2477 14.616C40.6237 13.96 41.1317 13.452 41.7717 13.092C42.4117 12.724 43.1197 12.54 43.8957 12.54C44.6797 12.54 45.3917 12.724 46.0317 13.092C46.6717 13.452 47.1757 13.956 47.5437 14.604C47.9117 15.252 48.0957 15.988 48.0957 16.812C48.0957 17.636 47.9117 18.372 47.5437 19.02C47.1757 19.668 46.6717 20.176 46.0317 20.544C45.3917 20.904 44.6797 21.084 43.8957 21.084ZM43.8957 20.136C44.4797 20.136 45.0037 20 45.4677 19.728C45.9397 19.456 46.3077 19.068 46.5717 18.564C46.8437 18.06 46.9797 17.476 46.9797 16.812C46.9797 16.14 46.8437 15.556 46.5717 15.06C46.3077 14.556 45.9437 14.168 45.4797 13.896C45.0157 13.624 44.4877 13.488 43.8957 13.488C43.3037 13.488 42.7757 13.624 42.3117 13.896C41.8477 14.168 41.4797 14.556 41.2077 15.06C40.9437 15.556 40.8117 16.14 40.8117 16.812C40.8117 17.476 40.9437 18.06 41.2077 18.564C41.4797 19.068 41.8477 19.456 42.3117 19.728C42.7837 20 43.3117 20.136 43.8957 20.136ZM52.2133 15.324H50.8333V21H49.7413V15.324H48.8893V14.424H49.7413V13.956C49.7413 13.22 49.9293 12.684 50.3053 12.348C50.6893 12.004 51.3013 11.832 52.1413 11.832V12.744C51.6613 12.744 51.3213 12.84 51.1213 13.032C50.9293 13.216 50.8333 13.524 50.8333 13.956V14.424H52.2133V15.324ZM59.3377 21.084C58.7857 21.084 58.2897 20.988 57.8497 20.796C57.4177 20.596 57.0777 20.324 56.8297 19.98C56.5817 19.628 56.4537 19.224 56.4457 18.768H57.6097C57.6497 19.16 57.8097 19.492 58.0897 19.764C58.3777 20.028 58.7937 20.16 59.3377 20.16C59.8577 20.16 60.2657 20.032 60.5617 19.776C60.8657 19.512 61.0177 19.176 61.0177 18.768C61.0177 18.448 60.9297 18.188 60.7537 17.988C60.5777 17.788 60.3577 17.636 60.0937 17.532C59.8297 17.428 59.4737 17.316 59.0257 17.196C58.4737 17.052 58.0297 16.908 57.6937 16.764C57.3657 16.62 57.0817 16.396 56.8417 16.092C56.6097 15.78 56.4937 15.364 56.4937 14.844C56.4937 14.388 56.6097 13.984 56.8417 13.632C57.0737 13.28 57.3977 13.008 57.8137 12.816C58.2377 12.624 58.7217 12.528 59.2657 12.528C60.0497 12.528 60.6897 12.724 61.1857 13.116C61.6897 13.508 61.9737 14.028 62.0377 14.676H60.8377C60.7977 14.356 60.6297 14.076 60.3337 13.836C60.0377 13.588 59.6457 13.464 59.1577 13.464C58.7017 13.464 58.3297 13.584 58.0417 13.824C57.7537 14.056 57.6097 14.384 57.6097 14.808C57.6097 15.112 57.6937 15.36 57.8617 15.552C58.0377 15.744 58.2497 15.892 58.4977 15.996C58.7537 16.092 59.1097 16.204 59.5657 16.332C60.1177 16.484 60.5617 16.636 60.8977 16.788C61.2337 16.932 61.5217 17.16 61.7617 17.472C62.0017 17.776 62.1217 18.192 62.1217 18.72C62.1217 19.128 62.0137 19.512 61.7977 19.872C61.5817 20.232 61.2617 20.524 60.8377 20.748C60.4137 20.972 59.9137 21.084 59.3377 21.084ZM65.0607 15.324V19.2C65.0607 19.52 65.1287 19.748 65.2647 19.884C65.4007 20.012 65.6367 20.076 65.9727 20.076H66.7767V21H65.7927C65.1847 21 64.7287 20.86 64.4247 20.58C64.1207 20.3 63.9687 19.84 63.9687 19.2V15.324H63.1167V14.424H63.9687V12.768H65.0607V14.424H66.7767V15.324H65.0607ZM70.9678 21.108C70.3518 21.108 69.7918 20.968 69.2878 20.688C68.7918 20.408 68.3998 20.012 68.1118 19.5C67.8318 18.98 67.6918 18.38 67.6918 17.7C67.6918 17.028 67.8358 16.436 68.1238 15.924C68.4198 15.404 68.8198 15.008 69.3238 14.736C69.8278 14.456 70.3918 14.316 71.0158 14.316C71.6398 14.316 72.2038 14.456 72.7078 14.736C73.2118 15.008 73.6078 15.4 73.8958 15.912C74.1918 16.424 74.3398 17.02 74.3398 17.7C74.3398 18.38 74.1878 18.98 73.8838 19.5C73.5878 20.012 73.1838 20.408 72.6718 20.688C72.1598 20.968 71.5918 21.108 70.9678 21.108ZM70.9678 20.148C71.3598 20.148 71.7278 20.056 72.0718 19.872C72.4158 19.688 72.6918 19.412 72.8998 19.044C73.1158 18.676 73.2238 18.228 73.2238 17.7C73.2238 17.172 73.1198 16.724 72.9118 16.356C72.7038 15.988 72.4318 15.716 72.0958 15.54C71.7598 15.356 71.3958 15.264 71.0038 15.264C70.6038 15.264 70.2358 15.356 69.8998 15.54C69.5718 15.716 69.3078 15.988 69.1078 16.356C68.9078 16.724 68.8078 17.172 68.8078 17.7C68.8078 18.236 68.9038 18.688 69.0958 19.056C69.2958 19.424 69.5598 19.7 69.8878 19.884C70.2158 20.06 70.5758 20.148 70.9678 20.148ZM75.3676 17.7C75.3676 17.02 75.5036 16.428 75.7756 15.924C76.0476 15.412 76.4236 15.016 76.9036 14.736C77.3916 14.456 77.9476 14.316 78.5716 14.316C79.3796 14.316 80.0436 14.512 80.5636 14.904C81.0916 15.296 81.4396 15.84 81.6076 16.536H80.4316C80.3196 16.136 80.0996 15.82 79.7716 15.588C79.4516 15.356 79.0516 15.24 78.5716 15.24C77.9476 15.24 77.4436 15.456 77.0596 15.888C76.6756 16.312 76.4836 16.916 76.4836 17.7C76.4836 18.492 76.6756 19.104 77.0596 19.536C77.4436 19.968 77.9476 20.184 78.5716 20.184C79.0516 20.184 79.4516 20.072 79.7716 19.848C80.0916 19.624 80.3116 19.304 80.4316 18.888H81.6076C81.4316 19.56 81.0796 20.1 80.5516 20.508C80.0236 20.908 79.3636 21.108 78.5716 21.108C77.9476 21.108 77.3916 20.968 76.9036 20.688C76.4236 20.408 76.0476 20.012 75.7756 19.5C75.5036 18.988 75.3676 18.388 75.3676 17.7ZM86.7366 21L84.1566 18.096V21H83.0646V12.12H84.1566V17.34L86.6886 14.424H88.2126L85.1166 17.7L88.2246 21H86.7366Z"
              fill="#FF0000"
            />
            <rect
              x="0.5"
              y="0.5"
              width="102"
              height="33"
              rx="3.5"
              stroke="#FF0000"
            />
          </svg>
        </div>
      )
    case true:
      return (
        <div>
          <svg
            width="85"
            height="34"
            viewBox="0 0 85 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.868 19.14H15.22L14.548 21H13.396L16.42 12.684H17.68L20.692 21H19.54L18.868 19.14ZM18.556 18.252L17.044 14.028L15.532 18.252H18.556ZM21.6019 17.7C21.6019 17.02 21.7379 16.428 22.0099 15.924C22.2819 15.412 22.6579 15.016 23.1379 14.736C23.6259 14.456 24.1819 14.316 24.8059 14.316C25.6139 14.316 26.2779 14.512 26.7979 14.904C27.3259 15.296 27.6739 15.84 27.8419 16.536H26.6659C26.5539 16.136 26.3339 15.82 26.0059 15.588C25.6859 15.356 25.2859 15.24 24.8059 15.24C24.1819 15.24 23.6779 15.456 23.2939 15.888C22.9099 16.312 22.7179 16.916 22.7179 17.7C22.7179 18.492 22.9099 19.104 23.2939 19.536C23.6779 19.968 24.1819 20.184 24.8059 20.184C25.2859 20.184 25.6859 20.072 26.0059 19.848C26.3259 19.624 26.5459 19.304 26.6659 18.888H27.8419C27.6659 19.56 27.3139 20.1 26.7859 20.508C26.2579 20.908 25.5979 21.108 24.8059 21.108C24.1819 21.108 23.6259 20.968 23.1379 20.688C22.6579 20.408 22.2819 20.012 22.0099 19.5C21.7379 18.988 21.6019 18.388 21.6019 17.7ZM28.891 17.7C28.891 17.02 29.027 16.428 29.299 15.924C29.571 15.412 29.947 15.016 30.427 14.736C30.915 14.456 31.471 14.316 32.095 14.316C32.903 14.316 33.567 14.512 34.087 14.904C34.615 15.296 34.963 15.84 35.131 16.536H33.955C33.843 16.136 33.623 15.82 33.295 15.588C32.975 15.356 32.575 15.24 32.095 15.24C31.471 15.24 30.967 15.456 30.583 15.888C30.199 16.312 30.007 16.916 30.007 17.7C30.007 18.492 30.199 19.104 30.583 19.536C30.967 19.968 31.471 20.184 32.095 20.184C32.575 20.184 32.975 20.072 33.295 19.848C33.615 19.624 33.835 19.304 33.955 18.888H35.131C34.955 19.56 34.603 20.1 34.075 20.508C33.547 20.908 32.887 21.108 32.095 21.108C31.471 21.108 30.915 20.968 30.427 20.688C29.947 20.408 29.571 20.012 29.299 19.5C29.027 18.988 28.891 18.388 28.891 17.7ZM42.5881 17.46C42.5881 17.668 42.5761 17.888 42.5521 18.12H37.2961C37.3361 18.768 37.5561 19.276 37.9561 19.644C38.3641 20.004 38.8561 20.184 39.4321 20.184C39.9041 20.184 40.2961 20.076 40.6081 19.86C40.9281 19.636 41.1521 19.34 41.2801 18.972H42.4561C42.2801 19.604 41.9281 20.12 41.4001 20.52C40.8721 20.912 40.2161 21.108 39.4321 21.108C38.8081 21.108 38.2481 20.968 37.7521 20.688C37.2641 20.408 36.8801 20.012 36.6001 19.5C36.3201 18.98 36.1801 18.38 36.1801 17.7C36.1801 17.02 36.3161 16.424 36.5881 15.912C36.8601 15.4 37.2401 15.008 37.7281 14.736C38.2241 14.456 38.7921 14.316 39.4321 14.316C40.0561 14.316 40.6081 14.452 41.0881 14.724C41.5681 14.996 41.9361 15.372 42.1921 15.852C42.4561 16.324 42.5881 16.86 42.5881 17.46ZM41.4601 17.232C41.4601 16.816 41.3681 16.46 41.1841 16.164C41.0001 15.86 40.7481 15.632 40.4281 15.48C40.1161 15.32 39.7681 15.24 39.3841 15.24C38.8321 15.24 38.3601 15.416 37.9681 15.768C37.5841 16.12 37.3641 16.608 37.3081 17.232H41.4601ZM45.1215 15.636C45.3375 15.26 45.6575 14.948 46.0815 14.7C46.5135 14.444 47.0135 14.316 47.5815 14.316C48.1655 14.316 48.6935 14.456 49.1655 14.736C49.6455 15.016 50.0215 15.412 50.2935 15.924C50.5655 16.428 50.7015 17.016 50.7015 17.688C50.7015 18.352 50.5655 18.944 50.2935 19.464C50.0215 19.984 49.6455 20.388 49.1655 20.676C48.6935 20.964 48.1655 21.108 47.5815 21.108C47.0215 21.108 46.5255 20.984 46.0935 20.736C45.6695 20.48 45.3455 20.164 45.1215 19.788V24.12H44.0295V14.424H45.1215V15.636ZM49.5855 17.688C49.5855 17.192 49.4855 16.76 49.2855 16.392C49.0855 16.024 48.8135 15.744 48.4695 15.552C48.1335 15.36 47.7615 15.264 47.3535 15.264C46.9535 15.264 46.5815 15.364 46.2375 15.564C45.9015 15.756 45.6295 16.04 45.4215 16.416C45.2215 16.784 45.1215 17.212 45.1215 17.7C45.1215 18.196 45.2215 18.632 45.4215 19.008C45.6295 19.376 45.9015 19.66 46.2375 19.86C46.5815 20.052 46.9535 20.148 47.3535 20.148C47.7615 20.148 48.1335 20.052 48.4695 19.86C48.8135 19.66 49.0855 19.376 49.2855 19.008C49.4855 18.632 49.5855 18.192 49.5855 17.688ZM53.4708 15.324V19.2C53.4708 19.52 53.5388 19.748 53.6748 19.884C53.8108 20.012 54.0468 20.076 54.3828 20.076H55.1868V21H54.2028C53.5948 21 53.1388 20.86 52.8348 20.58C52.5308 20.3 52.3788 19.84 52.3788 19.2V15.324H51.5268V14.424H52.3788V12.768H53.4708V14.424H55.1868V15.324H53.4708ZM62.5099 17.46C62.5099 17.668 62.4979 17.888 62.4739 18.12H57.2179C57.2579 18.768 57.4779 19.276 57.8779 19.644C58.2859 20.004 58.7779 20.184 59.3539 20.184C59.8259 20.184 60.2179 20.076 60.5299 19.86C60.8499 19.636 61.0739 19.34 61.2019 18.972H62.3779C62.2019 19.604 61.8499 20.12 61.3219 20.52C60.7939 20.912 60.1379 21.108 59.3539 21.108C58.7299 21.108 58.1699 20.968 57.6739 20.688C57.1859 20.408 56.8019 20.012 56.5219 19.5C56.2419 18.98 56.1019 18.38 56.1019 17.7C56.1019 17.02 56.2379 16.424 56.5099 15.912C56.7819 15.4 57.1619 15.008 57.6499 14.736C58.1459 14.456 58.7139 14.316 59.3539 14.316C59.9779 14.316 60.5299 14.452 61.0099 14.724C61.4899 14.996 61.8579 15.372 62.1139 15.852C62.3779 16.324 62.5099 16.86 62.5099 17.46ZM61.3819 17.232C61.3819 16.816 61.2899 16.46 61.1059 16.164C60.9219 15.86 60.6699 15.632 60.3499 15.48C60.0379 15.32 59.6899 15.24 59.3059 15.24C58.7539 15.24 58.2819 15.416 57.8899 15.768C57.5059 16.12 57.2859 16.608 57.2299 17.232H61.3819ZM63.5433 17.688C63.5433 17.016 63.6793 16.428 63.9513 15.924C64.2233 15.412 64.5953 15.016 65.0673 14.736C65.5473 14.456 66.0833 14.316 66.6753 14.316C67.1873 14.316 67.6633 14.436 68.1033 14.676C68.5433 14.908 68.8793 15.216 69.1113 15.6V12.12H70.2153V21H69.1113V19.764C68.8953 20.156 68.5753 20.48 68.1513 20.736C67.7273 20.984 67.2313 21.108 66.6633 21.108C66.0793 21.108 65.5473 20.964 65.0673 20.676C64.5953 20.388 64.2233 19.984 63.9513 19.464C63.6793 18.944 63.5433 18.352 63.5433 17.688ZM69.1113 17.7C69.1113 17.204 69.0113 16.772 68.8113 16.404C68.6113 16.036 68.3393 15.756 67.9953 15.564C67.6593 15.364 67.2873 15.264 66.8793 15.264C66.4713 15.264 66.0993 15.36 65.7633 15.552C65.4273 15.744 65.1593 16.024 64.9593 16.392C64.7593 16.76 64.6593 17.192 64.6593 17.688C64.6593 18.192 64.7593 18.632 64.9593 19.008C65.1593 19.376 65.4273 19.66 65.7633 19.86C66.0993 20.052 66.4713 20.148 66.8793 20.148C67.2873 20.148 67.6593 20.052 67.9953 19.86C68.3393 19.66 68.6113 19.376 68.8113 19.008C69.0113 18.632 69.1113 18.196 69.1113 17.7Z"
              fill="#1976E4"
            />
            <rect
              x="0.5"
              y="0.5"
              width="84"
              height="33"
              rx="3.5"
              stroke="#1976E4"
            />
          </svg>
        </div>
      )
    case false:
      return (
        <div>
          <svg
            width="85"
            height="34"
            viewBox="0 0 85 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.328 21L19.336 17.58H18.016V21H16.924V12.636H19.624C20.256 12.636 20.788 12.744 21.22 12.96C21.66 13.176 21.988 13.468 22.204 13.836C22.42 14.204 22.528 14.624 22.528 15.096C22.528 15.672 22.36 16.18 22.024 16.62C21.696 17.06 21.2 17.352 20.536 17.496L22.636 21H21.328ZM18.016 16.704H19.624C20.216 16.704 20.66 16.56 20.956 16.272C21.252 15.976 21.4 15.584 21.4 15.096C21.4 14.6 21.252 14.216 20.956 13.944C20.668 13.672 20.224 13.536 19.624 13.536H18.016V16.704ZM30.2248 17.46C30.2248 17.668 30.2128 17.888 30.1888 18.12H24.9328C24.9728 18.768 25.1928 19.276 25.5928 19.644C26.0008 20.004 26.4928 20.184 27.0688 20.184C27.5408 20.184 27.9328 20.076 28.2448 19.86C28.5648 19.636 28.7888 19.34 28.9168 18.972H30.0928C29.9168 19.604 29.5648 20.12 29.0368 20.52C28.5088 20.912 27.8528 21.108 27.0688 21.108C26.4448 21.108 25.8848 20.968 25.3888 20.688C24.9008 20.408 24.5168 20.012 24.2368 19.5C23.9568 18.98 23.8168 18.38 23.8168 17.7C23.8168 17.02 23.9528 16.424 24.2248 15.912C24.4968 15.4 24.8768 15.008 25.3648 14.736C25.8608 14.456 26.4288 14.316 27.0688 14.316C27.6928 14.316 28.2448 14.452 28.7248 14.724C29.2048 14.996 29.5728 15.372 29.8288 15.852C30.0928 16.324 30.2248 16.86 30.2248 17.46ZM29.0968 17.232C29.0968 16.816 29.0048 16.46 28.8208 16.164C28.6368 15.86 28.3848 15.632 28.0648 15.48C27.7528 15.32 27.4048 15.24 27.0208 15.24C26.4688 15.24 25.9968 15.416 25.6048 15.768C25.2208 16.12 25.0008 16.608 24.9448 17.232H29.0968ZM32.2542 13.356C32.0462 13.356 31.8702 13.284 31.7262 13.14C31.5902 12.996 31.5222 12.82 31.5222 12.612C31.5222 12.404 31.5902 12.228 31.7262 12.084C31.8702 11.94 32.0462 11.868 32.2542 11.868C32.4622 11.868 32.6342 11.94 32.7702 12.084C32.9142 12.228 32.9862 12.404 32.9862 12.612C32.9862 12.82 32.9142 12.996 32.7702 13.14C32.6342 13.284 32.4622 13.356 32.2542 13.356ZM32.7942 22.428C32.7942 23.012 32.6462 23.44 32.3502 23.712C32.0542 23.984 31.6222 24.12 31.0542 24.12H30.4182V23.196H30.8742C31.1782 23.196 31.3902 23.136 31.5102 23.016C31.6382 22.896 31.7022 22.692 31.7022 22.404V14.424H32.7942V22.428ZM40.6428 17.46C40.6428 17.668 40.6308 17.888 40.6068 18.12H35.3508C35.3908 18.768 35.6108 19.276 36.0108 19.644C36.4188 20.004 36.9108 20.184 37.4868 20.184C37.9588 20.184 38.3508 20.076 38.6628 19.86C38.9828 19.636 39.2068 19.34 39.3348 18.972H40.5108C40.3348 19.604 39.9828 20.12 39.4548 20.52C38.9268 20.912 38.2708 21.108 37.4868 21.108C36.8628 21.108 36.3028 20.968 35.8068 20.688C35.3188 20.408 34.9348 20.012 34.6548 19.5C34.3748 18.98 34.2348 18.38 34.2348 17.7C34.2348 17.02 34.3708 16.424 34.6428 15.912C34.9148 15.4 35.2948 15.008 35.7828 14.736C36.2788 14.456 36.8468 14.316 37.4868 14.316C38.1108 14.316 38.6628 14.452 39.1428 14.724C39.6228 14.996 39.9908 15.372 40.2468 15.852C40.5108 16.324 40.6428 16.86 40.6428 17.46ZM39.5148 17.232C39.5148 16.816 39.4228 16.46 39.2388 16.164C39.0548 15.86 38.8028 15.632 38.4828 15.48C38.1708 15.32 37.8228 15.24 37.4388 15.24C36.8868 15.24 36.4148 15.416 36.0228 15.768C35.6388 16.12 35.4188 16.608 35.3628 17.232H39.5148ZM41.6762 17.7C41.6762 17.02 41.8122 16.428 42.0842 15.924C42.3562 15.412 42.7322 15.016 43.2122 14.736C43.7002 14.456 44.2562 14.316 44.8802 14.316C45.6882 14.316 46.3522 14.512 46.8722 14.904C47.4002 15.296 47.7482 15.84 47.9162 16.536H46.7402C46.6282 16.136 46.4082 15.82 46.0802 15.588C45.7602 15.356 45.3602 15.24 44.8802 15.24C44.2562 15.24 43.7522 15.456 43.3682 15.888C42.9842 16.312 42.7922 16.916 42.7922 17.7C42.7922 18.492 42.9842 19.104 43.3682 19.536C43.7522 19.968 44.2562 20.184 44.8802 20.184C45.3602 20.184 45.7602 20.072 46.0802 19.848C46.4002 19.624 46.6202 19.304 46.7402 18.888H47.9162C47.7402 19.56 47.3882 20.1 46.8602 20.508C46.3322 20.908 45.6722 21.108 44.8802 21.108C44.2562 21.108 43.7002 20.968 43.2122 20.688C42.7322 20.408 42.3562 20.012 42.0842 19.5C41.8122 18.988 41.6762 18.388 41.6762 17.7ZM50.7052 15.324V19.2C50.7052 19.52 50.7732 19.748 50.9092 19.884C51.0452 20.012 51.2812 20.076 51.6172 20.076H52.4212V21H51.4372C50.8292 21 50.3732 20.86 50.0692 20.58C49.7652 20.3 49.6132 19.84 49.6132 19.2V15.324H48.7612V14.424H49.6132V12.768H50.7052V14.424H52.4212V15.324H50.7052ZM59.7443 17.46C59.7443 17.668 59.7323 17.888 59.7083 18.12H54.4523C54.4923 18.768 54.7123 19.276 55.1123 19.644C55.5203 20.004 56.0123 20.184 56.5883 20.184C57.0603 20.184 57.4523 20.076 57.7643 19.86C58.0843 19.636 58.3083 19.34 58.4363 18.972H59.6123C59.4363 19.604 59.0843 20.12 58.5563 20.52C58.0283 20.912 57.3723 21.108 56.5883 21.108C55.9643 21.108 55.4043 20.968 54.9083 20.688C54.4203 20.408 54.0363 20.012 53.7563 19.5C53.4763 18.98 53.3363 18.38 53.3363 17.7C53.3363 17.02 53.4723 16.424 53.7443 15.912C54.0163 15.4 54.3963 15.008 54.8843 14.736C55.3803 14.456 55.9483 14.316 56.5883 14.316C57.2123 14.316 57.7643 14.452 58.2443 14.724C58.7243 14.996 59.0923 15.372 59.3483 15.852C59.6123 16.324 59.7443 16.86 59.7443 17.46ZM58.6163 17.232C58.6163 16.816 58.5243 16.46 58.3403 16.164C58.1563 15.86 57.9043 15.632 57.5843 15.48C57.2723 15.32 56.9243 15.24 56.5403 15.24C55.9883 15.24 55.5163 15.416 55.1243 15.768C54.7403 16.12 54.5203 16.608 54.4643 17.232H58.6163ZM60.7777 17.688C60.7777 17.016 60.9137 16.428 61.1857 15.924C61.4577 15.412 61.8297 15.016 62.3017 14.736C62.7817 14.456 63.3177 14.316 63.9097 14.316C64.4217 14.316 64.8977 14.436 65.3377 14.676C65.7777 14.908 66.1137 15.216 66.3457 15.6V12.12H67.4497V21H66.3457V19.764C66.1297 20.156 65.8097 20.48 65.3857 20.736C64.9617 20.984 64.4657 21.108 63.8977 21.108C63.3137 21.108 62.7817 20.964 62.3017 20.676C61.8297 20.388 61.4577 19.984 61.1857 19.464C60.9137 18.944 60.7777 18.352 60.7777 17.688ZM66.3457 17.7C66.3457 17.204 66.2457 16.772 66.0457 16.404C65.8457 16.036 65.5737 15.756 65.2297 15.564C64.8937 15.364 64.5217 15.264 64.1137 15.264C63.7057 15.264 63.3337 15.36 62.9977 15.552C62.6617 15.744 62.3937 16.024 62.1937 16.392C61.9937 16.76 61.8937 17.192 61.8937 17.688C61.8937 18.192 61.9937 18.632 62.1937 19.008C62.3937 19.376 62.6617 19.66 62.9977 19.86C63.3337 20.052 63.7057 20.148 64.1137 20.148C64.5217 20.148 64.8937 20.052 65.2297 19.86C65.5737 19.66 65.8457 19.376 66.0457 19.008C66.2457 18.632 66.3457 18.196 66.3457 17.7Z"
              fill="#FF0000"
            />
            <rect
              x="0.5"
              y="0.5"
              width="84"
              height="33"
              rx="3.5"
              stroke="#FF0000"
            />
          </svg>
        </div>
      )
    case 'pending':
      return (
        <div>
          <svg
            width="87"
            height="34"
            viewBox="0 0 87 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.016 12.636V21H20.924V12.636H22.016ZM27.0811 14.304C27.8811 14.304 28.5291 14.548 29.0251 15.036C29.5211 15.516 29.7691 16.212 29.7691 17.124V21H28.6891V17.28C28.6891 16.624 28.5251 16.124 28.1971 15.78C27.8691 15.428 27.4211 15.252 26.8531 15.252C26.2771 15.252 25.8171 15.432 25.4731 15.792C25.1371 16.152 24.9691 16.676 24.9691 17.364V21H23.8771V14.424H24.9691V15.36C25.1851 15.024 25.4771 14.764 25.8451 14.58C26.2211 14.396 26.6331 14.304 27.0811 14.304ZM37.4041 21.084C36.8521 21.084 36.3561 20.988 35.9161 20.796C35.4841 20.596 35.1441 20.324 34.8961 19.98C34.6481 19.628 34.5201 19.224 34.5121 18.768H35.6761C35.7161 19.16 35.8761 19.492 36.1561 19.764C36.4441 20.028 36.8601 20.16 37.4041 20.16C37.9241 20.16 38.3321 20.032 38.6281 19.776C38.9321 19.512 39.0841 19.176 39.0841 18.768C39.0841 18.448 38.9961 18.188 38.8201 17.988C38.6441 17.788 38.4241 17.636 38.1601 17.532C37.8961 17.428 37.5401 17.316 37.0921 17.196C36.5401 17.052 36.0961 16.908 35.7601 16.764C35.4321 16.62 35.1481 16.396 34.9081 16.092C34.6761 15.78 34.5601 15.364 34.5601 14.844C34.5601 14.388 34.6761 13.984 34.9081 13.632C35.1401 13.28 35.4641 13.008 35.8801 12.816C36.3041 12.624 36.7881 12.528 37.3321 12.528C38.1161 12.528 38.7561 12.724 39.2521 13.116C39.7561 13.508 40.0401 14.028 40.1041 14.676H38.9041C38.8641 14.356 38.6961 14.076 38.4001 13.836C38.1041 13.588 37.7121 13.464 37.2241 13.464C36.7681 13.464 36.3961 13.584 36.1081 13.824C35.8201 14.056 35.6761 14.384 35.6761 14.808C35.6761 15.112 35.7601 15.36 35.9281 15.552C36.1041 15.744 36.3161 15.892 36.5641 15.996C36.8201 16.092 37.1761 16.204 37.6321 16.332C38.1841 16.484 38.6281 16.636 38.9641 16.788C39.3001 16.932 39.5881 17.16 39.8281 17.472C40.0681 17.776 40.1881 18.192 40.1881 18.72C40.1881 19.128 40.0801 19.512 39.8641 19.872C39.6481 20.232 39.3281 20.524 38.9041 20.748C38.4801 20.972 37.9801 21.084 37.4041 21.084ZM43.1271 15.324V19.2C43.1271 19.52 43.1951 19.748 43.3311 19.884C43.4671 20.012 43.7031 20.076 44.0391 20.076H44.8431V21H43.8591C43.2511 21 42.7951 20.86 42.4911 20.58C42.1871 20.3 42.0351 19.84 42.0351 19.2V15.324H41.1831V14.424H42.0351V12.768H43.1271V14.424H44.8431V15.324H43.1271ZM49.0342 21.108C48.4182 21.108 47.8582 20.968 47.3542 20.688C46.8582 20.408 46.4662 20.012 46.1782 19.5C45.8982 18.98 45.7582 18.38 45.7582 17.7C45.7582 17.028 45.9022 16.436 46.1902 15.924C46.4862 15.404 46.8862 15.008 47.3902 14.736C47.8942 14.456 48.4582 14.316 49.0822 14.316C49.7062 14.316 50.2702 14.456 50.7742 14.736C51.2782 15.008 51.6742 15.4 51.9622 15.912C52.2582 16.424 52.4062 17.02 52.4062 17.7C52.4062 18.38 52.2542 18.98 51.9502 19.5C51.6542 20.012 51.2502 20.408 50.7382 20.688C50.2262 20.968 49.6582 21.108 49.0342 21.108ZM49.0342 20.148C49.4262 20.148 49.7942 20.056 50.1382 19.872C50.4822 19.688 50.7582 19.412 50.9662 19.044C51.1822 18.676 51.2902 18.228 51.2902 17.7C51.2902 17.172 51.1862 16.724 50.9782 16.356C50.7702 15.988 50.4982 15.716 50.1622 15.54C49.8262 15.356 49.4622 15.264 49.0702 15.264C48.6702 15.264 48.3022 15.356 47.9662 15.54C47.6382 15.716 47.3742 15.988 47.1742 16.356C46.9742 16.724 46.8742 17.172 46.8742 17.7C46.8742 18.236 46.9702 18.688 47.1622 19.056C47.3622 19.424 47.6262 19.7 47.9542 19.884C48.2822 20.06 48.6422 20.148 49.0342 20.148ZM53.434 17.7C53.434 17.02 53.57 16.428 53.842 15.924C54.114 15.412 54.49 15.016 54.97 14.736C55.458 14.456 56.014 14.316 56.638 14.316C57.446 14.316 58.11 14.512 58.63 14.904C59.158 15.296 59.506 15.84 59.674 16.536H58.498C58.386 16.136 58.166 15.82 57.838 15.588C57.518 15.356 57.118 15.24 56.638 15.24C56.014 15.24 55.51 15.456 55.126 15.888C54.742 16.312 54.55 16.916 54.55 17.7C54.55 18.492 54.742 19.104 55.126 19.536C55.51 19.968 56.014 20.184 56.638 20.184C57.118 20.184 57.518 20.072 57.838 19.848C58.158 19.624 58.378 19.304 58.498 18.888H59.674C59.498 19.56 59.146 20.1 58.618 20.508C58.09 20.908 57.43 21.108 56.638 21.108C56.014 21.108 55.458 20.968 54.97 20.688C54.49 20.408 54.114 20.012 53.842 19.5C53.57 18.988 53.434 18.388 53.434 17.7ZM64.803 21L62.223 18.096V21H61.131V12.12H62.223V17.34L64.755 14.424H66.279L63.183 17.7L66.291 21H64.803Z"
              fill="#7FB801"
            />
            <rect
              x="0.5"
              y="0.5"
              width="86"
              height="33"
              rx="3.5"
              stroke="#31A409"
            />
          </svg>
        </div>
      )
    default:
      return <div className="overflow-hidden">{type}</div>
  }
}
