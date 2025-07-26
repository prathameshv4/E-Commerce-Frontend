import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
                <div className=''>
                    <img src={assets.logo} className='mb-5 w-32' alt='' />
                    <p className='w-full md:w-2/3 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur nulla iste ullam iure placeat nihil magnam sunt doloribus, similique ipsum consectetur facere veniam? Ipsa obcaecati eaque omnis sunt quas.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Dilevery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div >
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 9999900000</li>
                        <li>testemail@email.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright&copy; - All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
