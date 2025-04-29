import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button, Paper, TextField, Grid, Box } from "@mui/material";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(12, "Description must be at least 10 characters"),
});

type PostFormData = z.infer<typeof postSchema>;

const CreatePost = () => {
  const [posts, setPosts] = useState<PostFormData[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);


  const savePostsToLocalStorage = (updatedPosts: PostFormData[]) => {
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const onSubmit = (data: PostFormData) => {
    const newPost = { ...data, body: data.description }; 
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts); 
    savePostsToLocalStorage(updatedPosts); 
    reset();
  };

  return (
    <Paper sx={{ padding: 3, textAlign: "center", boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%", 
                  maxWidth: 200, 
                  padding: "11px 20px",
                  marginTop: 2,
                  backgroundColor: "#3f51b5",
                }}
              >
                Add Post
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreatePost;



// import {z} from "zod";
// import {zodResolver} from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { Button, Paper, TextField, } from "@mui/material";

// const postSchema=z.object({
//     title:z.string().min(3,"Title must be atleast 3 characters"),
//     description:z.string().min(10,"Description must be atleast 10 characters"),
// });

// type PostFormData=z.infer<typeof postSchema>;

// const CreatePost=()=>{
//     const [posts,setPosts]=useState<PostFormData[]>([]);
//     const {register,handleSubmit,formState: {errors},reset}= useForm<PostFormData>({resolver:zodResolver(postSchema)});
    
//     const onSubmit=(data:PostFormData)=>{
//         setPosts([...posts,data]);
//         reset();
//     };

//     return(
//         <Paper sx={{padding:3, textAlign:"center"}}>
//             <form>
//                 <TextField sx={{marginBottom:"15px"}} label="Title" fullWidth
//                 {...register("title")} error={!!errors.title} 
//                 helperText={errors.title?.message}/>
                

//                 <TextField label="Description" fullWidth multiline rows={4}
//                 {...register("description")} error={!!errors.description} 
//                 helperText={errors.description?.message}/>
//                 <Button type="submit" variant="contained">Add Post</Button>
//             </form>
//         </Paper>
//     );
// };
// export default CreatePost;


