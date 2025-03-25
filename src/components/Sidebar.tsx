import { Drawer, ListItem, List, ListItemText, useMediaQuery, useTheme, Box } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Drawer
            variant={isSmallScreen ? "temporary" : "permanent"}
            open={open}
            onClose={onClose}
            sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: isSmallScreen ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
                    transition: '0.3s',
                    "&:hover": {
                        boxShadow: "0px 6px 25px rgba(156,39,17, 0.3)", 
                        transform: "scale(1.02)",
                    },
                    paddingTop: "10px",
                },
            }}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <List sx={{ paddingTop: "10px" ,marginTop:"50px"}}>
                <Box sx={{ borderBottom: '1px solid lightgray' }}>
                    <ListItem
                        component={Link}
                        to="/dashboard"
                        sx={{
                            //display: 'flex',
                            alignItems: 'center',
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        <DashboardIcon sx={{ marginRight: "10px" }} />
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Box>

                <Box sx={{ borderBottom: '1px solid lightgray' }}>
                    <ListItem
                        component={Link}
                        to="/create"
                        sx={{
                            //display: 'flex',
                            alignItems: 'center',
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        <AddIcon sx={{ marginRight: "10px" }} />
                        <ListItemText primary="Create Post" />
                    </ListItem>
                </Box>
            </List>
        </Drawer>
    );
};

export default Sidebar;


// import { Drawer, ListItem, List, ListItemText, useMediaQuery, useTheme,Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AddIcon from '@mui/icons-material/Add';


// const Sidebar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

//     return (
//         <Drawer
//             variant={isSmallScreen ? "temporary" : "permanent"}
//             open={open}
//             onClose={onClose}
//             sx={{
               
//                 width: 240,
//                 flexShrink: 0,
//                 "& .MuiDrawer-paper": {
//                     width: 240,
//                     boxSizing: "border-box",
//                     transition:"0.3s",
//             "&:hover":{
//               // boxShadow:"3",
//               boxShadow:"0px 4px 15px rgba(156,39,17)",
//               transform:"scale(1.02)",
            
//             },
//                 },
//             }}
//             ModalProps={{
//                 keepMounted: true, 
//             }}
//         >
//             <List>
//                 <Box sx={{  border: '1px solid lightgray',marginBottom:"10px" }}>
//                 <ListItem component={Link} to="/dashboard">
//                     <DashboardIcon/>
//                     <ListItemText primary="Dashboard" />
//                 </ListItem>

//                 </Box>
//                 <Box sx={{ border: '1px solid lightgrey' }}>
//                 <ListItem component={Link} to="/create">
//                     <AddIcon/>
//                     <ListItemText primary="Create Post" />
//                 </ListItem>
//                 </Box>
//             </List>
//         </Drawer>
//     );
// };

// export default Sidebar;


