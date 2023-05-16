import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, meta, otherMeta, imageMeta }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {meta?.map((item) => (
          <meta key={item?.name} name={item?.name} content={item?.content} />
        ))}
        {otherMeta?.map((item) => (
          <meta
            key={item?.id}
            property={item?.property}
            content={item?.content}
          />
        ))}
        {imageMeta?.map((item) => (
          <meta
            key={item?.id}
            property={item?.property}
            content={item?.image?.url}
          />
        ))}
      </Helmet>
    </>
  )
}

export default SEO
