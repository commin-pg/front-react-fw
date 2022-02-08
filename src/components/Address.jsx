import React from 'react';

function Address() {
  return <>
    <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>ADDRESS Point</span>
        South Korea
    </p>


    <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block'>E-Mail</span>
        <a href='mailto:khm.commin@gmail.com'>khm.commin@gmail.com</a>
    </p>


    <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>Phone</span>
        010-6556-2717
    </p>
  </>;
}

export default Address;
