import { Flex } from '@chakra-ui/react';
import HeaderLoggedIn from '../HeaderNotLoggedIn';
import AP from '../AllProductPage/allproduct';
import Footer from '../NewFooter';
const allproductpage = () => {
  
  return (
    <div>
      <HeaderLoggedIn/>
      <AP/>
      {/* <Footer/> */}
      

    </div>
    
    
  );
};

export default allproductpage;