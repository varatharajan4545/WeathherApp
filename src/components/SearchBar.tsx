import { Box, Button, Container, InputAdornment, TextField } from '@mui/material'
import React from 'react'

type Props = {}

export default function SearchBar({ }: Props): React.ReactElement {
    return (
        <div>
            <Box marginBottom={3}>
                <Container maxWidth='sm'>
                    <TextField
                        variant='outlined'
                        type='text'
                        fullWidth
                        color='secondary'
                        placeholder='  Enter Location...'
                        InputProps={{
                            style: {

                                margin: "15px 0px",
                                color: "white !important",
                                fontSize: "24px !important",
                            },
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Button style={{ backgroundColor: "purple" }} disableRipple={true} color='secondary'>
                                        Add
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>
            </Box>
        </div>
    )
}