import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BusinessIcon from "@mui/icons-material/Business";

import SectionTitle from "../components/SectionTitle";
import { internshipCompanies } from "../data/departmentData";

function Placements() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Training, Placements & Internships"
        subtitle="Building industry-ready skills through training and real-world experience."
      />

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%", p: 3 }}>
            <CardContent>
              <TrendingUpIcon
                color="primary"
                sx={{ fontSize: 55 }}
              />

              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ mt: 2 }}
              >
                62 Students
              </Typography>

              <Typography
                variant="h6"
                sx={{ mt: 1 }}
              >
                Completed 6-Month Industrial Internship
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                }}
              >
                During Academic Year 2025–26, 62 CSE students successfully
                completed a six-month Professional Track industrial internship,
                gaining practical exposure to real-world projects and
                professional environments.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%", p: 3 }}>
            <CardContent>
              <BusinessIcon
                color="primary"
                sx={{ fontSize: 55 }}
              />

              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ mt: 2 }}
              >
                Industry Connect
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                }}
              >
                The department promotes industry exposure through internships,
                technical workshops, industrial visits, expert sessions and
                career-oriented activities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
        >
          Internship Organizations
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Organizations associated with the 2025–26 Professional Track
          internship.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {internshipCompanies.map((company) => (
            <Chip
              key={company}
              label={company}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Placements;