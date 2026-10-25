import { Box, Typography } from "@mui/material";

function SectionTitle({ title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 5 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "primary.main",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionTitle;