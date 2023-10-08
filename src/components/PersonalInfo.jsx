import React from 'react';

export const PersonalInfo = ({icon, info, link}) => {
  return (
    <p className="relative self-stretch">
        {link ?
            <a href={link} rel="noopener noreferrer" target="_blank">
                <Info icon={icon} info={info}/>
            </a> : <Info icon={icon} info={info}/>
        }
    </p>
  )
}

const Info = ({icon, info}) => {
    return (
        <div className="flex flex-row justify-start items-center gap-[6px]">
            { icon && <img className="w-[15px] h-[15px] opacity-80 mr-[10px]" alt="" src={icon} /> }
            <span> {info} </span>
        </div>
    )
}