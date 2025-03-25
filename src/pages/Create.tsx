import CreatePost from "../components/CreatePost";
import { Box, Container, Typography } from "@mui/material";

const Create = () => {
  return (
    <Box sx={{ 
        flexGrow: 1, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
       
        //adding: 2 
        }}>
      <Container maxWidth="sm"> 
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Create New Post
        </Typography>
       <CreatePost />
      </Container>
    </Box>
  );
};

export default Create;

