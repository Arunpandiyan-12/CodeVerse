import React from "react";
import { Box, Typography, Card, Stack, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { useTheme } from "@mui/material";
//import { alignProperty } from "@mui/material/styles/cssUtils";
//import LibraryBooksRounded from "@mui/icons-material/LibraryBooksRounded";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const Homepage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
               sx={{
                fontSize: 80,
                color: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                mt: 2,
                ml: 2,
              }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Text Summary
              </Typography>
              <Typography variant="h6">
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Blog Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
               sx={{
                fontSize: 80,
                color: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                mt: 2,
                ml: 2,
              }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Blog
              </Typography>
              <Typography variant="h6">
                Generate Blog With The Title
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            ChatBot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
               sx={{
                fontSize: 80,
                color: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                mt: 2,
                ml: 2,
              }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Talk with me
              </Typography>
              <Typography variant="h6">Chat With AI</Typography>
            </Stack>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Js converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DataObjectIcon
               sx={{
                fontSize: 80,
                color: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                mt: 2,
                ml: 2,
              }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                java Script
              </Typography>
              <Typography variant="h6">code for any problem</Typography>
            </Stack>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Image Generator
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: "100%",
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <InsertPhotoIcon
              sx={{
                fontSize: 80,
                color: isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                mt: 2,
                ml: 2,
              }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Scifi Image
              </Typography>
              <Typography variant="h6">Generate Scifi image</Typography>
            </Stack>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Homepage;
