import React from 'react';

export const Toggle = ({summary, detail}) => {
  return (
    <>
        <details open>
        <summary className="m-0 p-0">
            <div className="flex flex-row gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow mt-[6px]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <p class="summarytext">{summary}</p>
            </div>
        </summary>
        <div className="ml-[20px] mb-[10px]">
            {detail}
        </div>
        </details>
        <style jsx>{`
            details .arrow {
                transform: rotate(270deg);
            }
            details[open] .arrow {
                transform: rotate(0deg);
            }
            details[open] .arrow {
                transform: rotate(0deg);
            }
            details[open] .summarytext { font-weight: 700 }
            details summary { list-style-type: none; } 
            details summary::-webkit-details-marker { display: none; } 
            details summary::marker { display: none; }
            details summary {
                cursor: pointer;
                transition: margin 150ms ease-out;
            }
            details[open] summary {
                margin-bottom: 10px;
            }
        `}
        </style>
    </>
  );
};
