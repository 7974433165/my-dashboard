import { useEffect, useState } from "react";
import axios from "axios";
import { Stack, Pagination, Button, Paper, TableContainer, TableHead, TextField, TableRow, Table, TableCell, TableBody, Box, Grid2, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";  

interface Post {
  id: number;
  title: string;
  body: string; 
}

const PostTable = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 5;
  
  const theme = useTheme(); 
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const apiPosts = response.data;
        const localStoragePosts = JSON.parse(localStorage.getItem("posts") || "[]");
        const allPosts = [...apiPosts, ...localStoragePosts];
        setPosts(allPosts);
      });
  }, []);
  
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  
  const sortedPosts = [...filteredPosts].sort((a, b) =>
    sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );
  
  const paginatedPosts = sortedPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  return (
    <Paper
      sx={{
        padding: 3,
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        transition: "0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.02)",
        },
      }}
    >
      <Grid2 container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            fullWidth
            label="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                borderColor: "#3f51b5",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2} textAlign="right">
          <Button
            sx={{
              height: "55px",
              marginBottom: "15px",
              borderRadius: 2,
              borderColor: "lightgray",
              color: "#3f51b5",
              "&:hover": {
                backgroundColor: "#3f51b5",
                color: "white",
              },
            }}
            variant="outlined"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
          </Button>
        </Grid>
      </Grid2>

      <TableContainer sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: "#3f51b5" }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "#3f51b5" }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPosts.map((post) => (
              <TableRow
                key={post.id}
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f4f4f4", 
                  },
                }}
              >
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" marginTop="10px">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            variant="outlined"
            shape="rounded"
            color="primary"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#3f51b5 !important", 
                color: "white !important",
              },
              "& .MuiPaginationItem-root": {
                color: "#3f51b5", 
              },
            }}
          />
        </Stack>
      </Box>
    </Paper>
  );
};

export default PostTable;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Stack, Pagination, Button, Paper, TableContainer, TableHead, TextField, TableRow, Table, TableCell, TableBody, Box, Grid2, Grid } from "@mui/material";

// interface Post {
//   id: number;
//   title: string;
//   body: string; 
// }

// const PostTable = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [sortOrder, setSortOrder] = useState<string>("asc");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const postsPerPage = 5;

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         const apiPosts = response.data;

        
//         const localStoragePosts = JSON.parse(localStorage.getItem("posts") || "[]");

      
//         const allPosts = [...apiPosts, ...localStoragePosts];
//         setPosts(allPosts);
//       });
//   }, []);

//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(search.toLowerCase())
  
//   );
  

//   const sortedPosts = [...filteredPosts].sort((a, b) =>
//     sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
//   );
  
  
//   const paginatedPosts = sortedPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
//   const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  
//   return (
//     <Paper
//       sx={{
//         padding: 3,
//         boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
//         borderRadius: 2,
//         transition: "0.3s ease-in-out",
//         "&:hover": {
//           boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
//           transform: "scale(1.02)",
//         },
//       }}
//     >
//       <Grid2 container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
//         <Grid item xs={12} sm={8} md={6}>
//           <TextField
//             fullWidth
//             label="Search Posts"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             sx={{
//               marginBottom: 2,
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: 2,
//                 borderColor: "#3f51b5",
//               },
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4} md={2} textAlign="right">
//           <Button
//             sx={{
//               height: "55px",
//               marginBottom: "15px",
//               borderRadius: 2,
//               borderColor: "lightgray",
//               color: "#3f51b5",
//               "&:hover": {
//                 backgroundColor: "#3f51b5",
//                 color: "white",
//               },
//             }}
//             variant="outlined"
//             onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
//           >
//             Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
//           </Button>
//         </Grid>
//       </Grid2>

//       <TableContainer sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 600, color: "#3f51b5" }}>Title</TableCell>
//               <TableCell sx={{ fontWeight: 600, color: "#3f51b5" }}>Description</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedPosts.map((post) => (
//               <TableRow key={post.id} sx={{ "&:hover": { backgroundColor: "#f4f4f4" } }}>
//                 <TableCell>{post.title}</TableCell>
//                 <TableCell>{post.body}</TableCell> 
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box display="flex" justifyContent="center" marginTop="10px">
//         <Stack spacing={2}>
//           <Pagination
//             count={totalPages}
//             page={currentPage}
//             onChange={(_, page) => setCurrentPage(page)}
//             variant="outlined"
//             shape="rounded"
//             color="primary"
//             sx={{
//               "& .Mui-selected": {
//                 backgroundColor: "#3f51b5 !important", 
//                 color: "white !important",
//               },
//               "& .MuiPaginationItem-root": {
//                 color: "#3f51b5", 
//               },
//             }}
//           />
//         </Stack>
//       </Box>
//     </Paper>
//   );
// };

// export default PostTable;



