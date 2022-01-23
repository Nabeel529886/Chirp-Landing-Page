import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TwitterIcon from '@mui/icons-material/Twitter'

const textStyle={
    fontSize: '14px',
}

function Footer() {
  return (
      <Box sx={{ mt: 6, backgroundColor: '#d7f5f5', py: 2}}>
          <Container sx={{ display: 'flex'}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#1da1f2", fontWeight: 700, fontStyle: "italic" }}>
                    Chirp.
                </Typography>
                <Grid container sx={{ marginLeft: 'auto', maxWidth: '300px'}} >
                    <Grid item xs={1.5}>
                        <TwitterIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={textStyle}>Privacy Policy</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={textStyle}>Terms of Use</Typography>
                    </Grid>
                </Grid>
          </Container>
      </Box>
  ) 
}

export default Footer;
