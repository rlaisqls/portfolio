import React from "react";

export const Modal = ({ open, image, handleClose }) => {
    return (
        <>
            { open && 
                <div class="relative z-40">
                    <div className="fixed w-full h-full opacity-100 bg-[#000000] bg-opacity-40 backdrop-filter backdrop-blur-[3px]"/>
                    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" onClick={handleClose}>
                            <div class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-fit">
                                <img src={image} alt="detail" className="h-[500px] m-10px z-90" />
                                <div className="text-white absolute w-[28px] h-[28px] top-[10px] right-[10px]">
                                    <div className="absolute w-[28px] h-[28px] rounded-[14px] opacity-0 hover:opacity-30 bg-[#D6D6D6]"/>
                                    <img src="/img/icon/x-gray.svg" alt="exit icon" className="w-[15px] h-[15px] m-[6.5px] opacity-100 shadow-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
      );
};
