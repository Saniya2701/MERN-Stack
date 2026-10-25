import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import SectionTitle from "../components/SectionTitle";

const programs = [
  {
    title: "Computer Science & Engineering",
    description:
      "A comprehensive undergraduate program covering programming, data structures, databases, operating systems, networks and software engineering.",
  },
  {
    title: "Programming & Problem Solving",
    description:
      "Strong foundation in programming languages, algorithms, data structures and computational problem solving.",
  },
  {
    title: "Emerging Technologies",
    description:
      "Exposure to artificial intelligence, machine learning, cloud computing, cybersecurity and modern technologies.",
  },
];

function Academics() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Academics"
        subtitle="Building strong technical foundations with modern technology."
      />

      <Grid container spacing={4}>
        {programs.map((program) => (
          <Grid size={{ xs: 12, md: 4 }} key={program.title}>
            <Card
              sx={{
                height: "100%",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <MenuBookIcon color="primary" sx={{ fontSize: 45, mb: 2 }} />

                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {program.title}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.8}>
                  {program.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Academics;