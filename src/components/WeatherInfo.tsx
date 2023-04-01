import { Cloud } from '@mui/icons-material'
import { Box, Divider, Grid,  SvgIcon, Typography } from '@mui/material'
import { useApi } from '../data/useapi'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { weatherForecast } from '../data/api'
import { Data } from '../data/data'

type Props = { countryCode?: String }
export default function WeatherInfo({countryCode}:Props) {
 const [data,setData] = useState<Data>();
  useEffect(() => {
    axios.get(weatherForecast(countryCode)).then((response) => {
      setData(response.data);
      console.log(response.data.list[0])
    });
  }, [countryCode])
  
  return (
    <>
      <Box component={'div'} className='view-country-header'>
        <Grid width={'100%'}>
          <Grid marginTop={3}>
            <Typography className='view-country-text'>{data?.sys?.country}</Typography>
            <Typography className='view-country-text'>time</Typography>
          </Grid>
          <Grid item display={'flex'} spacing={3} direction={'row'} justifyContent={'space-evenly'}>
            <Grid >
              <Cloud />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid>
              <Typography className='cloudtext'>
                few clouds
              </Typography>
            </Grid>



          </Grid>
        </Grid>
      </Box>
      <Box component={'div'} className='view-country-footer'>
      <Grid container spacing={4} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={3} spacing={3}>
              <Grid display={'flex'} direction={'row'} className='view-country-footer-presure'>
                <Typography>
                  Pressure:
                </Typography>
                <Typography>
                  1018pha
                </Typography>
              </Grid>
              <Grid display={'flex'} direction={'row'} className='view-country-footer-presure'>
                <Typography>
                  Humidity:
                </Typography>
                <Typography>
                  78%
                </Typography>
              </Grid>
              <Grid display={'flex'} direction={'row'} className='view-country-footer-presure'>
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
                <Typography className='view-country-footer-sunrice'>Sunrice:5.30 am</Typography>
              </Grid>
              <Grid display={'flex'} direction={'row'} className='sunrice'>
                <Typography className='view-country-footer-sunrice'> Sunset: 6.00pm</Typography>
              </Grid>

            </Grid>
          </Grid>

      </Box>
    </>
  )
}