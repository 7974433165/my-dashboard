import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PostTable from "../components/PostTable";

const Dashboard=()=>{
    return(
        <Box sx={{flexFlow:1,width:"100%"}} >
            {/* sx={{flexFlow:1,p:3,ml:"240px"}} */}
            <Container>
                {/* <Typography variant="h4" gutterBottom>
                    Dashboard
                </Typography> */}
                <PostTable/>
            </Container>
        </Box>
    );
};
export default Dashboard;