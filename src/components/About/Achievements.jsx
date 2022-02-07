import React from 'react';

function Achievements() {
    const achievementContents=[
        {title:"8",subTitle1:"years of", subTitle2:'experience'},
        {title:"67",subTitle1:"completed", subTitle2:'projects'},
        {title:"12",subTitle1:"years of", subTitle2:'experience'},
        {title:"12",subTitle1:"years of", subTitle2:'experience'},
    ]
  return (<div className='row'>
      {achievementContents.map((content,key)=>(
          <div className='col-6' key={key}>
            <div className='box-stats with-margin'>
                <h3 className='poppins-font position-relative'>{content.title}</h3>
                <p className='open-sans-font m-0 position-relative text-uppercase'>
                    {content.subTitle1}
                    <span className='d-block'>{content.subTitle2}</span>
                </p>
            </div>
          </div>
      ))}
  </div>);
}

export default Achievements;
