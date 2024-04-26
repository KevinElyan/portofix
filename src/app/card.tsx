import Image from "next/image";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Card() {
  return (
    <div className="card">
      <Image
        className="card-image"
        src="/kevin.jpg"
        width={450}
        height={500}
        alt="Picture of the author"
      />
      <h2 className="cardname"> Kevin Elyan</h2>
      <p className="cardtitle">Frontend Developer</p>

      <div
        className="ButtonCard"
        style={{ display: "flex", justifyContent: "center", gap: "16px" }}
      >
        <Button
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          sx={{
            minWidth: "48px", // Set the minimum width of the button to fit the icon
            p: "16px", // Adjust the padding around the icon
            display: "flex",
            alignItems: "center", // Center the content vertically
            justifyContent: "center", // Center the content horizontally
            bgcolor: "blue", // Change the button background color here
            "&:hover": {
              bgcolor: "grey", // Change the button background color on hover here
            },
          }}
        >
          <FacebookIcon style={{ fontSize: 32 }} />{" "}
          {/* Adjust the icon size here */}
        </Button>

        <Button
          href="https://www.linkedin.com/in/kevinelyan/"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            minWidth: "48px", // Set the minimum width of the button to fit the icon
            p: "16px", // Adjust the padding around the icon
            display: "flex",
            alignItems: "center", // Center the content vertically
            justifyContent: "center", // Center the content horizontally
            bgcolor: "darkpurple", // Change the button background color here
            "&:hover": {
              bgcolor: "purple", // Change the button background color on hover here
            },
          }}
        >
          <LinkedInIcon style={{ fontSize: 32 }} />{" "}
          {/* Adjust the icon size here */}
        </Button>

        <Button
          href="https://www.instagram.com/kevinelyan/"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            minWidth: "48px", // Set the minimum width of the button to fit the icon
            p: "16px", // Adjust the padding around the icon
            display: "flex",
            alignItems: "center", // Center the content vertically
            justifyContent: "center", // Center the content horizontally
            bgcolor: "pink", // Change the button background color here
            "&:hover": {
              bgcolor: "darkpink", // Change the button background color on hover here
            },
          }}
        >
          <InstagramIcon style={{ fontSize: 32 }} />{" "}
          {/* Adjust the icon size here */}
        </Button>
      </div>

      <p className="cv"></p>
    </div>
  );
}

export default Card;
