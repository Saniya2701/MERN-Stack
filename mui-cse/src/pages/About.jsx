import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import SectionTitle from "../components/SectionTitle";
import { departmentInfo } from "../data/departmentData";

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="About the Department"
        subtitle="Department of Computer Science & Engineering, DYPCET Kolhapur"
      />

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Computer Science & Engineering
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            {departmentInfo.description}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" fontWeight={700} gutterBottom>
            Our Vision
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ lineHeight: 1.8 }}
          >
            {departmentInfo.vision}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            elevation={4}
            sx={{
              borderTop: "5px solid",
              borderColor: "primary.main",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={700}>
                Head of Department
              </Typography>

              <Typography
                variant="h4"
                color="primary"
                fontWeight={700}
                sx={{ mt: 2 }}
              >
                {departmentInfo.hod.name}
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {departmentInfo.hod.designation}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" fontWeight={700} gutterBottom>
                Our Mission
              </Typography>

              {departmentInfo.mission.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <CheckCircleIcon color="primary" />

                  <Typography color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;