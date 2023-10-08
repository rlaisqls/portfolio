export const Footer = () => {
    return (
      <div className="relative w-full min-w-[960px] max-w-full h-[180px] bg-black">
        <div className="relative h-[180px] w-[920px] overflow-hidden mx-auto my-0 py-[30px]">

          <div className="absolute left-[20px] inline-flex gap-[16px] flex-col items-start">
            <div className="relative w-[134px] h-[52px] mt-[-1.00px] text-white">
              김은빈 <br /> @rlaisqls
            </div>
            <div className="relative w-[40px] h-[15px]">
              <a href="https://www.linkedin.com/in/%EC%9D%80%EB%B9%88-%EA%B9%80-248452250/" rel="noopener noreferrer" target="_blank">
              <img className="absolute w-[15px] h-[15px] top-0 left-0 object-cover" alt="linkedin" src="/img/icon/linkedin-white.png" />
              </a>
              <a href="https://github.com/rlaisqls" rel="noopener noreferrer" target="_blank">
              <img className="absolute w-[15px] h-[15px] top-0 left-[26px]" alt="github" src="/img/icon/github-white.png" />
              </a>
            </div>
          </div>

          <div className="absolute right-[20px] inline-flex gap-[7px] flex-col items-start">
            <p className="relative w-[134px] h-[25px] mt-[-1.00px] ">
              <a href="mailto:rlaisqls@gmail.com" rel="noopener noreferrer" target="_blank"> <span className="text-white"> rlaisqls@gmail.com </span> </a>
            </p>
            <div className="relative w-[134px] h-[24px] text-white whitespace-nowrap"> 010-7199-5931 </div>

            <div className="relative w-[134px] h-[24px] text-white whitespace-nowrap"> v2023.10 </div>
          </div>
        </div>
      </div>
    );
};
  