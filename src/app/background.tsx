import Box from "@mui/material/Box";

function Background() {
  return (
    <Box
      sx={{
        backgroundImage: `background-dark.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    ></Box>
  );
}

export default Background;
