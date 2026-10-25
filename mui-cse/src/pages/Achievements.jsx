import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import SectionTitle from "../components/SectionTitle";
import { achievements } from "../data/departmentData";

function Achievements() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Achievements & Highlights"
        subtitle="Recent academic, research, industry and student-development activities."
      />

      <Grid container spacing={4}>
        {achievements.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.title}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <EmojiEventsIcon
                  color="secondary"
                  sx={{ fontSize: 48 }}
                />

                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mt: 2 }}
                >
                  {item.title}
                </Typography>

                <Chip
                  label={item.type}
                  color="primary"
                  size="small"
                  sx={{ my: 2 }}
                />

                <Typography
                  color="text.secondary"
                  lineHeight={1.8}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Achievements;