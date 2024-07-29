import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

const JournalContainer = styled(Paper)(({ theme }) => ({
  width: "60%",
  padding: theme.spacing(4),
  backgroundColor: "#333",
  color: "#f2f2f2",
  borderRadius: theme.shape.borderRadius,
  columnCount: 2,
  columnGap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    width: "90%",
    columnCount: 1,
  },
}));

const JournalText = styled(Typography)(() => ({
  margin: 0,
  padding: 0,
  fontSize: "1.2em",
  lineHeight: 1.6,
  breakInside: "avoid", // Prevents breaking the paragraph in the middle
}));
const JournalTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: "2em",
  lineHeight: 1.4,
  breakInside: "avoid",
  columnSpan: "all",
}));

const Lorem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#181818",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        mt: "15px",
        "@media (max-width: 600px)": {
          padding: 1,
        },
      }}
    >
      <JournalContainer>
        <JournalTitle variant="h4">Lorem ipsum</JournalTitle>
        <JournalText variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          ante eu nisi cursus scelerisque. Suspendisse potenti. Nam ultrices
          ante id magna ultricies, vel venenatis urna elementum. Duis faucibus
          lacinia lectus, non dictum purus euismod eget. Nulla facilisi. Integer
          nec felis vel elit placerat laoreet. Aliquam sit amet arcu eros.
          Integer vel lectus eu libero luctus scelerisque non id erat. Ut id est
          eget purus dapibus varius. In hac habitasse platea dictumst.
        </JournalText>
        <JournalText variant="body1">
          Nullam aliquam velit sed ligula vehicula, et elementum ex iaculis.
          Curabitur facilisis posuere nisl, non tincidunt eros feugiat et.
          Integer in felis risus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Nullam scelerisque magna vel
          quam lacinia, et ullamcorper orci sagittis. Aenean bibendum magna id
          ante consequat vehicula. Maecenas accumsan turpis libero, in egestas
          dolor luctus a. Suspendisse sit amet arcu vitae erat sagittis
          tincidunt at in metus. Donec sit amet ex ut velit vulputate hendrerit.
          Pellentesque at fermentum ligula. Mauris nec magna libero. Integer et
          sapien sit amet lorem ultrices vestibulum. Aenean fringilla, leo eu
          facilisis ullamcorper, mi eros varius mi, a porttitor erat orci id
          libero.
        </JournalText>
        <JournalText variant="body1">
          Mauris lacinia mauris at ipsum facilisis, non faucibus libero
          fermentum. Sed hendrerit pharetra dolor vel scelerisque. Vestibulum
          tristique ullamcorper sollicitudin. Ut semper purus ac nulla feugiat,
          eget tempus tortor dictum. In posuere nibh vel purus iaculis, id
          malesuada arcu vulputate. Sed auctor, odio sed ultricies dictum, nisi
          elit tristique elit, at varius lacus nulla id risus. Aliquam erat
          volutpat. Nulla ut magna sed justo ultrices ultrices. Donec imperdiet
          ornare libero. Morbi condimentum ex sit amet elit auctor, et dapibus
          nisl fringilla. Nulla vitae nulla massa. Suspendisse.
        </JournalText>
      </JournalContainer>
    </Box>
  );
};

export default Lorem;
