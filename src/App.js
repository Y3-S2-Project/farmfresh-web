import { Table } from './components/organisms/Table'
import { CustomButton } from './components/atoms'
import AlertModal from './components/organisms/AlertModal'
function App() {
  return (
    <div>
      {/* <ReactVirtualizedTable /> */}
      <CustomButton
        type="product-add"
        classes="h-16 bg-white text-black text-base leading-160 font-poppins font-bold m-5 border-2 border-black border-opacity-50 shadow-lg rounded-xl"
        style={{
          width: '144px',
          height: '46px'
        }}
        value="+ Add Product"
      />
      <Table />
      <AlertModal
        type="product-accept"
        body="Cras mattis consectetur purus sit amet fermentum. Cras justo odio,dapibus ac facilisis in."
        title="Product Accept"
      />

      <AlertModal
        type="product-delete"
        body="Cras mattis consectetur purus sit amet fermentum. Cras justo odio,dapibus ac facilisis in."
        title="Confirm Product Removal"
      />
    </div>
  )
}

export default App
