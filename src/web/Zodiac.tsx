import React, { useState } from 'react'
import axios from 'axios'
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { MessageChannel } from 'worker_threads';

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
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    
    const [inputField, setInputField] = React.useState({
        mName: "",
        pName: "",
        mZodiac: "",
        pZodiac: ""
    })

    const [open, setopen] = useState(false)
    const handleClose = () => setopen(false);

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

        try {
                return axios.get(url).then((response) => {
                console.log(response)
                setMessage(response.data.message)
                setTitle(response.data.title)
                setopen(true)
            })
        }
        catch (error) {
            console.log(error)
        }
        
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
            
            <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                    }}
                >
                    <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h1">
                            {title}
                        </Typography>
                        <Typography id="transition-modal-description" variant='subtitle1'  sx={{ mt: 2 }}>
                                {message}
                        </Typography>
                    </Box>
                    </Fade>
                </Modal>   
        </div>
        </main>
    )
}

export default Zodiac