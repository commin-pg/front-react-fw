import React from 'react';

function Skills() {
    const skillContent = [
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
        {skillClass:'p25', skillPercent:'25',skillName:'JAVA'},
    ]
  return <>
    {skillContent.map((content,key)=>(
        <div key={key} className='col-6 col-md-3 mb-3 mb-sm-5'>
            <div className={`c100 ${content.skillClass}`}>
            <span>{content.skillPercent}%</span>
            <div className='slice'>
                <div className='bar'></div>
                <div className='fill'></div>
            </div>
            </div>
            <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>{content.skillName}</h6>
        </div>
    ))}
  </>;
}

export default Skills;
