import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";

import SectionTitle from "../components/SectionTitle";
import { faculty } from "../data/departmentData";

function Faculty() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Our Faculty"
        subtitle="Meet the faculty members contributing to teaching, research and student development."
      />

      <Grid container spacing={4}>
        {faculty.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-7px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  py: 4,
                }}
              >
                <Avatar
                  sx={{
                    width: 110,
                    height: 110,
                    mx: "auto",
                    mb: 3,
                    bgcolor: "primary.main",
                    fontSize: "2rem",
                  }}
                >
                  {member.name
                    .replace("Dr. ", "")
                    .replace("Prof. ", "")
                    .charAt(0)}
                </Avatar>

                <Typography variant="h6" fontWeight={700}>
                  {member.name}
                </Typography>

                <Typography
                  color="primary"
                  fontWeight={600}
                  sx={{ mt: 1 }}
                >
                  {member.designation}
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    display: "inline-block",
                    px: 2,
                    py: 0.5,
                    borderRadius: 5,
                    bgcolor: "#EEF4FA",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {member.qualification}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 7,
          p: 4,
          bgcolor: "#EEF4FA",
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Head of Department
        </Typography>

        <Typography
          variant="h4"
          color="primary"
          fontWeight={700}
          sx={{ mt: 1 }}
        >
          Dr. Radhika J. Dhanal
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Head, Department of Computer Science & Engineering
        </Typography>
      </Box>
    </Container>
  );
}

export default Faculty;