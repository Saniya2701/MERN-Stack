import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";

import {
  departmentInfo,
  departmentStats,
  placementStats,
  internshipCompanies,
  events,
} from "../data/departmentData";

function Home() {
  const highlights = [
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Quality Education",
      text: "Strong academic foundations combined with practical and project-based learning.",
    },
    {
      icon: <ScienceIcon fontSize="large" />,
      title: "Research & Innovation",
      text: "Students and faculty actively participate in research, publications and innovation.",
    },
    {
      icon: <WorkIcon fontSize="large" />,
      title: "Industry Exposure",
      text: "Internships, workshops, industrial visits and expert sessions provide real-world exposure.",
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: "Student Success",
      text: "Students participate in placements, hackathons, competitions and technical activities.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <Box
        sx={{
          minHeight: {
            xs: "auto",
            md: "78vh",
          },
          py: {
            xs: 10,
            md: 12,
          },
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #071E3D 0%, #123B70 55%, #1F5F9B 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Chip
                label="D. Y. Patil College of Engineering & Technology"
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.5)",
                  mb: 3,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.6rem",
                    sm: "3.5rem",
                    md: "4.5rem",
                  },
                  lineHeight: 1.05,
                  fontWeight: 800,
                }}
              >
                Computer Science
                <br />
                & Engineering
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mt: 3,
                  fontWeight: 400,
                  opacity: 0.9,
                }}
              >
                Learn. Innovate. Build. Lead.
              </Typography>

              <Typography
                sx={{
                  maxWidth: 700,
                  mt: 2,
                  lineHeight: 1.8,
                  opacity: 0.78,
                  fontSize: "1.05rem",
                }}
              >
                Empowering future technology professionals through quality
                education, practical learning, research, innovation and
                industry exposure.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Explore Department
                </Button>

                <Button
                  component={Link}
                  to="/faculty"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Meet Our Faculty
                </Button>
              </Box>

              <Typography
                sx={{
                  mt: 4,
                  fontSize: "0.95rem",
                  opacity: 0.8,
                }}
              >
                Head of Department:{" "}
                <strong>{departmentInfo.hod.name}</strong>
              </Typography>
            </Grid>

            {/* HERO SIDE CARD */}

            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <GroupsIcon sx={{ fontSize: 50 }} />

                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ mt: 2 }}
                  >
                    Department of CSE
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      opacity: 0.8,
                      lineHeight: 1.7,
                    }}
                  >
                    Kasaba Bawada, Kolhapur
                    <br />
                    Maharashtra
                  </Typography>

                  <Divider
                    sx={{
                      my: 3,
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  />

                  <Typography fontWeight={600}>
                    Head of Department
                  </Typography>

                  <Typography sx={{ mt: 0.5, opacity: 0.85 }}>
                    {departmentInfo.hod.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= QUICK STATS ================= */}

      <Container
        maxWidth="lg"
        sx={{
          mt: {
            xs: 4,
            md: -6,
          },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container spacing={2}>
          {departmentStats.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <Card
                elevation={5}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  py: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    fontWeight={800}
                  >
                    {stat.number}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ================= ABOUT ================= */}

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="overline"
              color="primary"
              fontWeight={700}
              letterSpacing={2}
            >
              ABOUT THE DEPARTMENT
            </Typography>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                mt: 1,
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
              }}
            >
              Building the Future Through Technology
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 3,
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              {departmentInfo.description}
            </Typography>

            <Button
              component={Link}
              to="/about"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 3 }}
            >
              Know More About CSE
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              elevation={3}
              sx={{
                p: 2,
                borderLeft: "5px solid",
                borderColor: "secondary.main",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="primary"
                >
                  Our Vision
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    lineHeight: 1.8,
                  }}
                >
                  {departmentInfo.vision}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* ================= WHY CSE ================= */}

      <Box sx={{ bgcolor: "#F1F5F9", py: 10 }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Why Choose CSE?"
            subtitle="A balanced academic environment focused on knowledge, skills, innovation and career development."
          />

          <Grid container spacing={3}>
            {highlights.map((item) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={item.title}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 2,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      color="primary.main"
                      sx={{ mb: 2 }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        mt: 1.5,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= PLACEMENTS ================= */}

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SectionTitle
          title="Placement Highlights"
          subtitle="Strong industry connections and career opportunities for our students."
        />

        <Grid container spacing={3}>
          {placementStats.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <Card
                elevation={2}
                sx={{
                  textAlign: "center",
                  height: "100%",
                  p: 2,
                  borderTop: "4px solid",
                  borderColor: "primary.main",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    color="primary"
                    fontWeight={800}
                  >
                    {stat.number}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/placements"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            View Placement Details
          </Button>
        </Box>
      </Container>

      {/* ================= INTERNSHIPS ================= */}

      <Box sx={{ bgcolor: "#EEF4FA", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                color="primary"
                fontWeight={700}
                letterSpacing={2}
              >
                INDUSTRY EXPERIENCE
              </Typography>

              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ mt: 1 }}
              >
                62 Students Completed 6-Month Internships
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                }}
              >
                During Academic Year 2025–26, CSE students gained practical
                experience through the Professional Track industrial
                internship program.
              </Typography>

              <Button
                component={Link}
                to="/placements"
                variant="outlined"
                sx={{ mt: 3 }}
                endIcon={<ArrowForwardIcon />}
              >
                Explore Internships
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: {
                    xs: "flex-start",
                    md: "center",
                  },
                }}
              >
                {internshipCompanies.map((company) => (
                  <Chip
                    key={company}
                    label={company}
                    variant="outlined"
                    sx={{
                      bgcolor: "white",
                      px: 1,
                      py: 2,
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= LATEST ACTIVITIES ================= */}

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SectionTitle
          title="Latest Department Activities"
          subtitle="Recent technical, academic and industry-oriented activities."
        />

        <Grid container spacing={3}>
          {events.slice(0, 3).map((event) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={event.title}
            >
              <Card
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 5,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={event.date}
                    size="small"
                    color="primary"
                  />

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ mt: 2 }}
                  >
                    {event.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1.5,
                      lineHeight: 1.7,
                    }}
                  >
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/events"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
          >
            View All Events
          </Button>
        </Box>
      </Container>

      {/* ================= CTA ================= */}

      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
              }}
            >
              Explore the CSE Department
            </Typography>

            <Typography
              sx={{
                mt: 2,
                opacity: 0.85,
                lineHeight: 1.7,
              }}
            >
              Discover our faculty, academics, laboratories, achievements,
              placements and student activities.
            </Typography>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3 }}
              endIcon={<ArrowForwardIcon />}
            >
              Contact Department
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;