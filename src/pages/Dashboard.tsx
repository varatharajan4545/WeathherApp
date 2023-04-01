import{ useState } from 'react'
import WhetherCard from '../components/WeatherCard'
import Logo from '../asserts/Logo.svg'
import { data } from '../data/data'
import { Box, Container, Dialog, DialogContent, DialogTitle, Grid ,IconButton} from '@mui/material'
import { ArrowBack} from '@mui/icons-material'
import SearchBar from '../components/SearchBar'
import WeatherInfo from '../components/WeatherInfo'
type Props = {}
export default function Dashboard({ }: Props) {
  const [open,setOpen] = useState(false)
  const [countryCode,setCountryCode] = useState<string>()
const handleOpen=(countryCode :string)=>{
  setCountryCode(countryCode)
  setOpen(true)
}
const handleClose=()=>{
  setCountryCode("")
  setOpen(false)
}
  return (
    <>
     <Box
     component={'div'}
        >
          <Container maxWidth="sm">
            <Grid display={'flex'} direction={'row'} justifyContent={'center'}alignItems={'center'}>
                <img src={Logo}></img>
              
            </Grid>
            
            
          <SearchBar/>
          </Container>
        </Box>
      <Box>
     <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
        {data.map((item) => <Grid item xs={12} md={6} >
          <WhetherCard onClick={()=>handleOpen(item.CityCode)} CityCode={item.CityCode} CityName={item.CityName} Status={item.Status} Temp={item.Temp}/>
        </Grid>)}
      </Grid>
      </Container>
      </Box>
      <Dialog open={open} onClose={handleClose}
      classes={{paper:'dialog-bg-img'}}
      fullWidth
      >
        <DialogTitle>
          <IconButton onClick={()=>handleClose()}>
            <ArrowBack />
          </IconButton>
        </DialogTitle>
        <DialogContent>
       <WeatherInfo countryCode={countryCode}/>
        </DialogContent>
      </Dialog>
    </>

  )
}