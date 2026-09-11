import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { RiCloseLine } from "react-icons/ri";
import "../Navigation/style.css"
import CategoryCollapse from '../../CategoryCollapse/CategoryCollapse';

const CategoryPanel = (props) => {

 const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >
      <h3 className='p-3 text[15px] text-[500] flex items-center justify-between'>Shop By Categories
        <RiCloseLine onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' />
      </h3>
      <CategoryCollapse/>
    </Box>
  );
  return (
    <>

      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
