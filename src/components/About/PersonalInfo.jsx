import React from 'react';

function PersonalInfo() {
const personalInfoContent = [
    {meta:'first name',metaInfo:'HyeongMin'},
    {meta:'last name',metaInfo:'Kim'},
    {meta:'Age',metaInfo:'33'},
    {meta:'Nationality',metaInfo:'South Korea'},
    {meta:'Address',metaInfo:'Seongnam'},
    {meta:'phone',metaInfo:'010-6556-2717'},
    {meta:'Email',metaInfo:'khm.commin@gmail.com'},
    {meta:'langages',metaInfo:'Korean'},
]
  return <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((info,key)=>(
          <li key={key}>
            <span className='title'>{info.meta}: </span>
            <span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>{info.metaInfo}</span>
          </li>
      ))}
  </ul>;
}

export default PersonalInfo;
