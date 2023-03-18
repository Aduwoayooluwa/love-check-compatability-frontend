import React from 'react'

type Props = {
    title: string
    message: string
    mName: string
    pName: string
}

const Message = ({title, message, mName, pName}: Props) => {
    return (
        <>
        <p className='font-bold text-2xl text-center w-full py-2 text-gray-900'>Results for {mName} and {pName}</p>
        <div className="bg-white rounded-md shadow w-[300px] leading-10 md:w-[400px] h-[200px]">
            <div className='bg-red-600 w-full p-3 text-white text-center font-semibold'>Love Compatability Result</div>
            
            <p className='text-xl font-semibold py-2 text-center'>{title}</p>

            <p className='font-medium text-center'>{message}</p>

        </div>
        </>
        
    )
}

export default Message