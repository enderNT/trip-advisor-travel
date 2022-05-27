import React from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import useStyles from './styles'

const List = ({isLoading }) => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Food & Dining around you</Typography>
            {isLoading ? (
                <div>
                    <CircularProgress size='5rem' />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='type'>Type</InputLabel>
                        <Select>
                            <MenuItem value='restaurants'>Restaurants</MenuItem>
                            <MenuItem value='hotels'>Hotels</MenuItem>
                            <MenuItem value='attractions'>Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='rating' >Rating</InputLabel>
                        <Select id='rating'>
                            <MenuItem value=''>All</MenuItem>
                            <MenuItem value='3'>Above 3.0</MenuItem>
                            <MenuItem value='4'>Above 4.0</MenuItem>
                            <MenuItem value='4.5'>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>

                    </Grid>
                </>
            )

            }
        </div>
    )
}

export default List
