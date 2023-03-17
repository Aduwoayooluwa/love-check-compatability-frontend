import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { set } from 'mongoose';

type Props = {}

const fetcher = (url:string) => axios.get(url).then((response) => response.data)

const Zodiac = (props: Props) => {
    const [inputField, setInputField] = React.useState({
        mName: "",
        pName: "",
        mZodiac: "",
        pZodiac: ""
    })

    const [open, setopen] = useState(false)
    

    const [shouldFetch, setShouldFetch] = useState<boolean>(false)

    const mName = inputField.mName
    const pName = inputField.pName
    const mZodiac = inputField.mZodiac
    const pZodiac = inputField.pZodiac
    
    const url=`http://localhost:5000/love/${mName}/${mZodiac}/${pName}/${pZodiac}`

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setInputField({...inputField, [name]: value})
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputField)
        setInputField({
            mName: "",
            pName: "",
            mZodiac: "",
            pZodiac: ""
        })
        return axios.get(url).then((response) => response.data)
    }

    // const { data: check, error, isLoading } = useSWR(shouldFetch ? null : url, fetcher)
    //console.log(check)

    return (
        <main className='w-full grid place-items-center mt-7'>
            <div className='p-5 grid place-items-center shadow-none md:shadow border-none md:border w-full md:w-1/2'>
                <p className='font-semibold text-xl mb-3'>Check your Love Compatability</p>

            <section className='flex items-center justify-evenly'>
                <Box sx={{ width: "100%", maxWidth: '100%', flex:"inline"}}>

                    <FormControl fullWidth>
                            <TextField variant='filled' required name='mName' value={inputField.mName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} fullWidth label="Your Name" id="fullWidth" />
                            <span className="my-3"></span>       
                            <TextField variant='filled' name='mZodiac' value={inputField.mZodiac} required  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} fullWidth label="Zodiac Sign" id="fullWidth" />
                            <span className="my-3"></span>
                    </FormControl>

                    <FormControl fullWidth>
                            <TextField variant='filled' name='pName' value={inputField.pName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} required fullWidth label="Partner's Name" id="fullWidth" />
                            <span className="my-3"></span>       
                            <TextField  variant='filled' name='pZodiac' value={inputField.pZodiac}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} required fullWidth label="Zodiac Sign" id="fullWidth" />
                            <span className="my-3"></span>
                            
                    </FormControl>
                    <Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event)} variant='outlined' fullWidth>Check Compatability</Button>
                </Box>
            </section>
            
                
        </div>
        </main>
    )
}

export default Zodiac