import React from 'react';

export const ModalImage = ({src, className, caption, open}) => {
    return (
        <>
            <figure>
                <img src={src} alt="" className={className + " hover:cursor-zoomIn"} onClick={() => open(src)}/>
                {caption && <figcaption className="text-gray text-[10pt]">{caption}</figcaption>}
            </figure>
        </>
      );
};
