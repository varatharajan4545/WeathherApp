import { Close, Cloud, ExpandMore } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, SvgIcon, Theme, Typography, makeStyles } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import weathimg from '../asserts/cloud bg.png'

type Props = { CityCode: string; CityName: string; Temp: string; Status: string, onClick: () => void }

export default function WhetherCard(info: Props) {
  return (
    <>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        onClick={info.onClick}
      >
        <CardMedia style={{ backgroundImage: `url(${weathimg})`, color: 'white' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={6} className='country' >{info.CityName}</Grid>
              <Grid className='temp' item xs={6} md={6} >{info.Temp}°C</Grid>
            </Grid>
            <Grid container spacing={4} alignItems={'center'}>
              <Grid item xs={6} md={6} display={'flex'} direction={'row'} justifyContent={'space-evenly'}>

                <Cloud />
                <Typography className='cloudtext'>
                  few clouds
                </Typography>
              </Grid>
              <Grid item xs={6} md={6} >
                <Typography>temp min</Typography>
                <Typography> tem max</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardMedia>

        <CardContent style={{ backgroundColor: '#505466', color: 'white' }}>
          <Grid container spacing={4} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={3} spacing={3}>
              <Grid display={'flex'} direction={'row'} className='presure'>
                <Typography>
                  Pressure:
                </Typography>
                <Typography>
                  1018pha
                </Typography>
              </Grid>
              <Grid display={'flex'} direction={'row'} className='presure'>
                <Typography>
                  Humidity:
                </Typography>
                <Typography>
                  78%
                </Typography>
              </Grid>
              <Grid display={'flex'} direction={'row'} className='presure'>
                <Typography>
                  Visibility:
                </Typography>
                <Typography>
                  8Km
                </Typography>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3}>
              <Grid><SvgIcon>

              </SvgIcon></Grid>
              <Grid></Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={3}>
              <Grid display={'flex'} direction={'row'} className='sunrice'justifyContent={'flex-start'}>
                <Typography>Sunrice:5.30 am</Typography>
              </Grid>
              <Grid display={'flex'} direction={'row'} className='sunrice'>
                <Typography > Sunset: 6.00pm</Typography>
              </Grid>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}