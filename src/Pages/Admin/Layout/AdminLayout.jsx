import{ useState }from 'react'
import { Box } from "@mui/material";
import Sidebar from './Sidebar'
import Dashboard from '../AdminPages/Dashboard';



const AdminLayout = () => {
    const [activePage, setActivePage] = useState("dashboard");
  return (
    <div>
     
       <Box sx={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <Box sx={{ flex: 1, p: 3 }}>

        {activePage === "dashboard" && <Dashboard />}
        {/* {activePage === "products" && <Products />}
        {activePage === "categories" && <Categories />}
        {activePage === "orders" && <Orders />}
        {activePage === "returns" && <Returns />}
        {activePage === "users" && <Users />} */}

      </Box>

    </Box>
    </div>
  )
}

export default AdminLayout
