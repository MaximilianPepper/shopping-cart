import img from "../assets/photo1.png";
import { Box, Typography } from "@mui/material";
import ScrollingText from "./ScrollingText";
import { Container } from "@mui/material";
const HomePage = () => {
  return (
    <>
      <Container
        sx={{
          mt: "100px", // navbar fix
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "75%",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          {/* First Box */}
          <Box
            sx={{
              flex: 1,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              textAlign: "center",
            }}
          >
            <Box sx={{ width: "100%", textAlign: "left" }}>
              <Typography
                variant="h6"
                component="div"
                fontSize={"2em"}
                fontWeight={"800"}
                sx={{
                  fontFamily: "Gochi Hand, cursive",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                The best
              </Typography>
            </Box>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography
                variant="h6"
                component="div"
                fontSize={"3em"}
                fontWeight={"800"}
                marginTop={"15px"}
                sx={{
                  fontFamily: "Gochi Hand, cursive",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                fake products,
              </Typography>
            </Box>
            <Box sx={{ width: "100%", textAlign: "right" }}>
              <Typography
                variant="h6"
                component="div"
                fontSize={"2em"}
                fontWeight={"800"}
                marginTop={"15px"}
                sx={{
                  fontFamily: "Gochi Hand, cursive",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                in the market!
              </Typography>
            </Box>
          </Box>
          {/* Second Box */}
          <Box sx={{ flex: 1, padding: 2 }}>
            <img
              src={img}
              alt="a person shopping"
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
      <ScrollingText />
    </>
  );
};

export default HomePage;
