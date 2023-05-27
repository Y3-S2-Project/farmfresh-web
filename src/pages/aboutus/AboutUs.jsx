import React from 'react'
import FFCategoryTableData, {
  FFTitle,
} from '../../components/atoms/FFTitle/FFTitle'
const AboutUs = () => {
  return (
    <div className="bg-white py-10 px-6 sm:px-10 lg:px-20">
      <FFTitle title={`About Farmefresh`} />

      <p className="text-lg mb-6">
        Farmefresh is a sustainable agriculture company dedicated to providing
        fresh and organic produce to our customers. We believe in the importance
        of healthy food choices and supporting local farmers.
      </p>
      <p className="text-lg mb-6">
        Our mission is to bridge the gap between farmers and consumers by
        offering a convenient online platform to purchase farm-fresh products.
        We work closely with local farmers who follow sustainable farming
        practices to ensure the highest quality of produce for our customers.
      </p>
      <p className="text-lg mb-6">
        At Farmefresh, we value transparency and traceability. We provide
        detailed information about the sources of our products, allowing you to
        make informed decisions about the food you consume. We strive to create
        a direct connection between farmers and consumers, fostering a sense of
        community and promoting a healthier, more sustainable food system.
      </p>
      <p className="text-lg mb-6">
        Explore our wide range of fresh fruits, vegetables, dairy products, and
        more. Join us in supporting local farmers and enjoy the taste and
        benefits of farm-fresh produce delivered right to your doorstep.
      </p>
    </div>
  )
}

export default AboutUs
