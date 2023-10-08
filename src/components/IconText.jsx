import React from 'react';

export const GithubText = ({link, text}) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <div className="">
        <div className="relative flex flex-row gap-[10px]">
          <img
            className="relative w-[15px] h-[15px] top-[6px] object-cover"
            alt="github"
            src="/img/icon/github-black.png"
          />
          <div className="relative">
            {text ? text : "Github"}
          </div>
        </div>
      </div>
    </a>
  )
}

export const DocumentText = ({link, text}) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <div className="relative ">
        <div className="relative flex flex-row gap-[10px]">
          <img
            className="relative w-[15px] h-[15px] top-[6px] object-cover"
            alt="document"
            src="/img/icon/notion-white.png"
          />
          <div className="relative">
            {text ? text : "문서"}
          </div>
        </div>
      </div>
    </a>
  )
}