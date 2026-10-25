import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import ComputerIcon from "@mui/icons-material/Computer";
import SectionTitle from "../components/SectionTitle";

const labs = [
  "Programming Laboratory",
  "Data Structures Laboratory",
  "Database Management Laboratory",
  "Web Technology Laboratory",
  "Computer Networks Laboratory",
  "Software Engineering Laboratory",
  "Artificial Intelligence Laboratory",
  "Cloud Computing Laboratory",
];

function Laboratories() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Laboratories"
        subtitle="Modern infrastructure for hands-on technical learning."
      />

      <Grid container spacing={3}>
        {labs.map((lab) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={lab}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <ComputerIcon color="primary" sx={{ fontSize: 45, mb: 2 }} />

                <Typography variant="h6" fontWeight={600}>
                  {lab}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Laboratories;