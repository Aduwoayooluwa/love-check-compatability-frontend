import React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';



type Props = {

}

const getter = (url: string) => axios.get(url, {
    headers: {
        'X-RapidAPI-Key':  process.env.NEXT_PUBLIC_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RapidAPI_Host
    }
}
).then((response) => response.data)

const Partner = ({  }: Props) => {

    const url = ``
    const { data, error, isLoading } = useSWR(url, getter)
    console.log(data)

    const [age, setAge]= React.useState<number>()

    const handleAgeChange = () => {

    }

    return (
        <main className='w-full grid place-items-center mt-7'>
            <div className='p-5 grid place-items-center shadow border w-full md:w-1/2'>
                <p className='font-semibold text-xl mb-3'>Partner Details</p>
            <Box sx={{ width: "100%", maxWidth: '100%',}}>

                <FormControl fullWidth>
                        <TextField required fullWidth label="First Name" id="fullWidth" />
                        <span className="my-3"></span>
                        <TextField required fullWidth label="Last Name" id="fullWidth" />
                        <span className="my-3"></span>
                        <TextField type="number" required fullWidth label="Your Age" id="fullWidth" />
                        <span className="my-3"></span>
                        <TextField required fullWidth label="Month of Birth" id="fullWidth" />
                        <span className="my-3"></span>
                        <TextField required fullWidth label="Zodiac Sign" id="fullWidth" />
                        <span className="my-3"></span>
                        <TextField type="email" required fullWidth label="Email" id="fullWidth" />
                        <span className="my-3"></span>
                        <Button variant="outlined">Check Compatability</Button>
                </FormControl>
            </Box>
                
        </div>
        </main>
        
    )
}

export default Partner