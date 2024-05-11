import React, { useState } from 'react'
import useStyle from './Style'
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import PlaceDetalis from '../PlaceDetalis/PlaceDetalis'

export default function List() {

  const classes = useStyle()
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")


  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const places = [
    {name: "ahmad" },
    {name:" ahmadsdfadf" },
    {name: "ahmadwert" },
    {name: "ahmadrewterwtwe" },
    {name: "ahmad wertwrtwe"},
    {name: "ahttlmad" },
    {name: "ahmaretwd "},
    {name: "ahmartewtd" },
  ]

  return (
    <div className={classes.container} >
      <Typography variant='h4' gutterBottom>
        Restaurants, Hotels & Attractions around you 
      </Typography>
      <FormControl sx={{   minWidth: 140 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChangeType}
        >
          <MenuItem value='restaurants' >Restaurants</MenuItem>
          <MenuItem value='hotels' >Hotels</MenuItem>
          <MenuItem value='attractions' >Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ml: 4 ,  minWidth: 140 }}>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Rating"
          onChange={handleChange}
        >
          <MenuItem value={0} >All</MenuItem>
          <MenuItem value={3} >Above 3.0</MenuItem>
          <MenuItem value={4} >Above 4.0</MenuItem>
          <MenuItem value={4.5} >Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container sx={{mt: 3}} spacing={3} className={classes.list}>
          {places?.map((place, index)=>(
            <Grid item  xs={12} key={index}>
            <PlaceDetalis place={place}/>
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
