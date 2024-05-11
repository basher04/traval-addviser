import { AppBar, Box, Input, Toolbar, Typography } from '@mui/material'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import useStyle from "./Style"

export default function Header() {
    const classes = useStyle()
  return (
    <>
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Travel Adviser
                </Typography>
                <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Explore New Places
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <Input placeholder='search...' classes={{root: classes.inputRoot , input:classes.inputInput }} />
                    </div>
                {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}
