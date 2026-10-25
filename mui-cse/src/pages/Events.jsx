import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

import EventIcon from "@mui/icons-material/Event";

import SectionTitle from "../components/SectionTitle";
import { events } from "../data/departmentData";

function Events() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle
        title="Events & Activities"
        subtitle="Recent activities conducted by the CSE Department."
      />

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid size={{ xs: 12, sm: 6 }} key={event.title}>
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
                <EventIcon
                  color="primary"
                  sx={{ fontSize: 45 }}
                />

                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mt: 2 }}
                >
                  {event.title}
                </Typography>

                <Chip
                  label={event.date}
                  size="small"
                  color="secondary"
                  sx={{ mt: 2 }}
                />

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    lineHeight: 1.8,
                  }}
                >
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Events;