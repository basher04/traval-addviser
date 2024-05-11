import React from 'react'
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'

const theme = createTheme()

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Header/>
        <Grid container spacing={3} sx={{width:'100%'}}>
          <Grid item sm={12} md={4}>
            <List/>
          </Grid>
          <Grid item sm={12} md={8}>
            <Map/>
          </Grid>
        </Grid>
    </ThemeProvider>
    </>
  )
}
