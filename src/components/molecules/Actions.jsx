import React from 'react'

export const Actions = ({update,remove,view }) => {
  return (
      <>
           <h>action buttons</h>
          <div>{update}</div>     
          <div>{remove}</div>     
          <div>{view}</div>     
      
      </>
  )
}
