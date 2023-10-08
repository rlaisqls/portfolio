import React from 'react';

export const Element = ({ description, title, subtitle, elementInfo }) => {
  return (
    
    <div className="relative inline-block">
      <div className="flex flex-row">
        <div>
          <div className="flex w-[233px] items-start gap-[7px] left-0 flex-col inline-block">
            {title &&
              <div className="text-head3 whitespace-pre-line inline-block">
                {title}
              </div>
            }
            {subtitle &&
              <div className="text-head4 whitespace-pre-line inline-block">
                {subtitle}
              </div>
            }
            {elementInfo &&
              <div className="text-gray whitespace-nowrap inline-block whitespace-pre-line">
                {elementInfo}
              </div>
            }
          </div>
        </div>
        <div className="w-[660px] whitespace-pre-line inline-block">
          {description}
        </div>
      </div>
    </div>
  );
};
