import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Link,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#102A43",
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Department of Computer Science & Engineering
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
              D. Y. Patil College of Engineering and Technology, Kolhapur.
              Empowering students through quality education, innovation,
              research and industry-oriented learning.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>

            <Link component={RouterLink} to="/about" color="inherit" display="block" sx={{ mb: 1 }}>
              About Department
            </Link>

            <Link component={RouterLink} to="/faculty" color="inherit" display="block" sx={{ mb: 1 }}>
              Faculty
            </Link>

            <Link component={RouterLink} to="/placements" color="inherit" display="block">
              Placements
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              D. Y. Patil College of Engineering and Technology
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Kasaba Bawada, Kolhapur, Maharashtra
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} DYPCET CSE Department. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;