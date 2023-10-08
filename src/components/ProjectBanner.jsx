import React from 'react';

export const ProjectBanner = ({image, link}) => {
  return (
    image &&
    <a href={link} target='_blank' rel="noopener noreferrer">
        <div className="absolute h-[313px] w-[643px] opacity-0 hover:opacity-100 z-20 bg-[#000000] bg-opacity-30 backdrop-filter backdrop-blur-[15px]">
        <div className="table-cell align-middle h-[313px] w-[643px]">
            <p className="relative items-center text-center text-white line-height-[10px]">
            프로젝트에 대한<br/>자세한 정보를 알고싶다면<br/>클릭해주세요!
            </p> 
        </div>
        </div>
        <img className="relative h-[310] z-10" alt="" src={image} />
    </a>
  )
}