import Navbar from "../navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "90%", // Adjust width as needed for mobile
          maxWidth: 800, // Maximum width of 800px
          margin: "100px auto", // Center the box horizontally
          padding: 2, // Reduced padding for mobile
          border: "5px solid #333",
          borderRadius: 12,
          boxSizing: "border-box", // Include padding and border in box size
          overflow: "auto", // Enable scrolling if content overflows
        }}
      >
        <Typography variant="h2" style={{ marginBottom: "20px" }}>
          About Me
        </Typography>

        <Typography variant="body1" style={{ marginBottom: "16px" }}>
          Back in August 2020, I decided to pursue web design since I&apos;m
          interested in the comfort of design and UI/UX. For me, functional and
          beautiful design in web or application triggers comfort and attraction
          to use. Aesthetics attracts people.
        </Typography>

        <Typography variant="body2" style={{ marginBottom: "16px" }}>
          Focused on coding and web design, graphical aspects of a website or
          app (Client User Side)
        </Typography>

        <Typography variant="body2" style={{ marginBottom: "16px" }}>
          Beautiful design is subjective, and Plato believed that beauty is a
          quality of an object and that there is one true “form” or essence of
          the beautiful that explains why individual things are beautiful.
        </Typography>

        <Typography variant="body2" style={{ marginBottom: "16px" }}>
          Language that I used :{" "}
          <Box
            sx={{
              display: "inline-block",
              borderRadius: 8,
              bgcolor: "#E8DFCA",
              p: 1,
            }}
          >
            <Typography variant="body1" color="text.primary">
              Javascript
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-block",
              borderRadius: 8,
              bgcolor: "#E8DFCA",
              p: 1,
            }}
          >
            <Typography variant="body1" color="text.primary">
              Typescript
            </Typography>
          </Box>
        </Typography>

        <Typography variant="body2" style={{ marginBottom: "16px" }}>
          Framework :{" "}
          <Box
            sx={{
              display: "inline-block",
              borderRadius: 8,
              bgcolor: "#E8DFCA",
              p: 1,
            }}
          >
            <Typography variant="body1" color="text.primary">
              NextJs
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-block",
              borderRadius: 8,
              bgcolor: "#E8DFCA",
              p: 1,
            }}
          >
            <Typography variant="body1" color="text.primary">
              Bootstrap
            </Typography>
          </Box>
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "16px" }}>
          Library :{" "}
          <Box
            sx={{
              display: "inline-block",
              borderRadius: 8,
              bgcolor: "#E8DFCA",
              p: 1,
            }}
          >
            <Typography variant="body1" color="text.primary">
              React
            </Typography>
          </Box>
        </Typography>
      </Box>
    </>
  );
}
