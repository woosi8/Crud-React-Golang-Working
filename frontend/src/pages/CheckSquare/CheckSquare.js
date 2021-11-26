import { Box, Hidden, Stack, Typography } from '@mui/material';
import { Button, ShadowPaper } from 'src/components/SquareComponents';
import { styled } from '@mui/material';

const button_style = {
  width: 250,
  height: 100,
  fontSize: '1rem'
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

const CheckSquare = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Hidden lgDown>
        <ShadowPaper sx={{ width: 800, height: 400 }}>
          <StyledBox>
            <Typography variant="h4" mb={6}>
              There is no Square in your account!
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button variant="outlined" sx={button_style}>
                Create Square
              </Button>
              <Button variant="contained" sx={button_style}>
                Request join to exist Square
              </Button>
            </Stack>
          </StyledBox>
        </ShadowPaper>
      </Hidden>
      <Hidden lgUp>
        <ShadowPaper sx={{ width: 400 }}></ShadowPaper>
      </Hidden>
    </Box>
  );
};

export default CheckSquare;
