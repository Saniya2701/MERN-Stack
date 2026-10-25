import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Contact Us"
        subtitle="Get in touch with the Department of Computer Science & Engineering."
      />

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <LocationOnIcon color="primary" />

                <Box>
                  <Typography fontWeight={700}>Address</Typography>
                  <Typography color="text.secondary">
                    D. Y. Patil College of Engineering and Technology,
                    Kolhapur, Maharashtra
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <EmailIcon color="primary" />

                <Box>
                  <Typography fontWeight={700}>Email</Typography>
                  <Typography color="text.secondary">
                    Department Email
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <PhoneIcon color="primary" />

                <Box>
                  <Typography fontWeight={700}>Phone</Typography>
                  <Typography color="text.secondary">
                    Department Contact Number
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Send us a Message
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  mt: 3,
                }}
              >
                <TextField label="Full Name" fullWidth />

                <TextField label="Email" type="email" fullWidth />

                <TextField label="Subject" fullWidth />

                <TextField label="Message" multiline rows={5} fullWidth />

                <Button variant="contained" size="large" type="submit">
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;