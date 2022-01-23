import React from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import TwitterIcon from '@mui/icons-material/Twitter';
import PriceFeatureText from '../widgets/priceFeatures'
// import TwitterBtn from '../widgets/TwitterBtn'


function Pricing() {
  return (
    <Container sx={{ my: 2 }}>
        <Box sx={{ maxWidth: '350px', textAlign: 'center', margin: '0 auto'}}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 900, py: 2 }}>One simple price plan.</Typography>
            <Typography variant="body" color="text.secondary" component="p" fontSize="18px" sx={{ fontWeight: 600}}>Start growing your Twitter account by analyzing your follower's patterns.</Typography>
        </Box>
        <Card elevation={0} sx={{ borderRadius: 4, maxWidth: '350px', margin: '0 auto', mt: 4, border: '1px solid orange', p: 2, backgroundColor: '#fbf8f3', mb: 2, py: 3 }} >
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Monthly
                </Typography>
                <Typography variant='h3' component="h1" sx={{ fontWeight: 800, pb: 2}}>
                    $9 
                <Typography variant='body' component="span" color='text.secondary' sx={{ fontSize: 20,  fontWeight: 400  }}>/mo</Typography>
                </Typography>
                <hr style={{ border: '0.2px solid #e2e2e2' }}/>
                <PriceFeatureText>Unlimited* scheduled tweets and threads.</PriceFeatureText>
                <PriceFeatureText>Schedule up to 3 weeks in advance.</PriceFeatureText>
                <PriceFeatureText>Real-time audience analytics tracking up to 5k followers.</PriceFeatureText>
            </CardContent>
            <hr style={{ border: '0.2px solid #e2e2e2' }}/>
            <CardActions>
                <Button sx={{ backgroundColor: '#00acee', color: 'white', textTransform: 'capitalize', width: '100%', py: 1, fontWeight: 600, fontSize: 16}}>
                    <TwitterIcon sx={{ mr: 0.5 }} />
                    Start Trial with Twitter
                </Button>
            </CardActions>
        </Card>
    </Container>
)}

export default Pricing;
