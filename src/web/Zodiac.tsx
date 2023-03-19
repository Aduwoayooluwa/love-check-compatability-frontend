import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ModalContext} from '@/context/ModalContext';
import dynamic from 'next/dynamic';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { CircularProgress } from '@mui/material';

type Props = {}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontWeight: 600,
};


const Zodiac = (props: Props) => {   
    const { width, height } = useWindowSize()

    const { setIsMessageOpen, setPname, setMname, setIsModalOpen, setModalTitle, setModalMessage, setErrorTitle, setErrorMessage, setIsErrorOpen } = useContext(ModalContext)
    
    const [inputField, setInputField] = React.useState({
        mName: "",
        pName: "",
        mZodiac: "",
        pZodiac: ""
    })

    const [state, setState] = useState({
        buttonLoader: false,
        showConfetti: false
    })


    const [buttonLoading, setButtonLoading] = useState(false)

    const [showConfetti, setShowConfetti] = useState(false)

    const mName = inputField.mName
    const pName = inputField.pName
    const mZodiac = inputField.mZodiac
    const pZodiac = inputField.pZodiac
    
    const url=`https://love-compatability-backend.onrender.com/love/${mName}/${mZodiac}/${pName}/${pZodiac}`

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setInputField({...inputField, [name]: value})
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        try {
                return axios.get(url).then((response) => {
                setModalMessage(response.data.message)
                setModalTitle(response.data.title)
                setIsMessageOpen(true)
                setIsModalOpen((prev: boolean) => !prev)
                setMname(inputField.mName)
                setPname(inputField.pName)

                if (response.data.compatability === true) {
                    setShowConfetti(true)
                    return
                }

                else if (response.data.compatability === false) {
                    setShowConfetti(false)
                    return 
                }
            })
        }
        catch (error: any) {
            console.log(error)
            setErrorMessage(error.message)
            setErrorTitle('')
            setIsErrorOpen(true)
            setIsModalOpen((prev: boolean) => !prev)
        }
        finally {
            setButtonLoading(false)
        }
        
    }

    return (
        <main className='w-full grid place-items-center mt-7'>
            {
                showConfetti && (
                    <Confetti
                        width={width}
                        height={height}
                    />
                )
            }
                
            <div className='p-5 grid place-items-center shadow-none md:shadow border-none md:border w-full md:w-1/2'>
                <p className='font-semibold text-xl mb-3'>Check your Love Compatibility</p>
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
                    <button className='bg-blue-500 text-white font-semibold p-3 w-full rounded-md'  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {handleClick(event)}}>{`${buttonLoading ? 'Checking...' : 'Check Compatibility'}`}</button>
                </Box>
            </section>
            
        </div>
        </main>
    )
}

export default Zodiac