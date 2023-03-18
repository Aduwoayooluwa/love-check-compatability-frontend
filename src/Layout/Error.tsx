import React from 'react'

type Props = {
    title: string
    message: string
}

const Error = ({title, message}: Props) => {
    return (
        <>
        <p className='font-bold text-2xl text-center w-full py-2 text-gray-900'>{title}</p>
        <div className="bg-white rounded-md shadow w-[300px] leading-10 md:w-[400px] h-[200px]">
            <p className='font-medium text-center'>{message}</p>
        </div>
        </>
    )
}

export default Error