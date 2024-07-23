import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";

const scrollText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
// find a fix for the bar not correctly working
// find a fix for content resizing when vh changes, only resize when vw changes

const ScrollingText = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",

          whiteSpace: "nowrap",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            display: "inline-block",
            minWidth: "100vw",
            lineHeight: "2",
            fontSize: "2rem",
            animation: `${scrollText} 16s linear infinite`,
          }}
        >
          This is the scrolling text that loops around. This is the scrolling
          text that loops around.
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            display: "inline-block",
            minWidth: "100vw",
            lineHeight: "2",
            fontSize: "2rem",
            animation: `${scrollText} 16s linear infinite`,
          }}
        >
          This is the scrolling text that loops around. This is the scrolling
          text that loops around.
        </Typography>
      </Box>
    </Box>
  );
};

export default ScrollingText;
