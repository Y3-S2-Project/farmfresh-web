
import { Table } from "./components/organisms/Table";
import { CustomButton } from "./components/atoms";
import AlertModal from "./components/organisms/AlertModal";
function App() {
  return (
    <div>
      {/* <ReactVirtualizedTable /> */}
      <CustomButton type='product-add' classes="h-16 p-5 bg-white text-black text-base leading-160 font-poppins font-bold m-5 border-2 border-black border-opacity-50 shadow-lg rounded-xl"  value="+ Add Product"/>
      <Table />
      <AlertModal type="product-accept" body="Cras mattis consectetur purus sit amet fermentum. Cras justo odio,dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros." title="Product Accept" />
      
      <AlertModal type='product-delete'  body="Cras mattis consectetur purus sit amet fermentum. Cras justo odio,dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros." title="Confirm Product Removal"/>
    </div>
  );
}

export default App;
