import React from 'react'
import ServicesTable from './ServicesTable';

const Services = () => {
  return (
    <div className='min-h-screen'>
        <div className='font-bold'>Services Offered</div>
      <div className='mt-10'><ServicesTable/></div>
    </div>
  )
}

export default Services
