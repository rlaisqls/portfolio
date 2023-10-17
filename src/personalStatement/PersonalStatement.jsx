
import { PersonalInfo } from "../components/PersonalInfo";

export const PersonalStatement = () => {
    return (
        <>
          <div id="wrapper" className="text-default bg-white w-full overflowY-hidden mr-[17px]">
            <img className="h-[180px] min-w-[960px] w-full top-0 left-0 image-cover overflow-x-scroll" alt="" src="/img/header.png" />
            <div className="relative flex flex-col gap-[20px] ">
              <div className="relative inline-flex gap-[50px] top-[75px] flex-col items-start mx-auto my-0  w-[900px] ">
                <p className="text-head1 my-[10px]">자기소개서</p>
                <div>
                  <div className="h-[20px]"/>
                  <div className="flex flex-row gap-[10px] relative w-full items-center">
                    <div className="flex flex-col gap-[20px] w-full">
                      <p className="text-head3 text-[20pt]">
                        자기소개서
                      </p>
                      <div className="inline-flex gap-[20px] flex-col">
                        <div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[9px] flex-col">
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </>
    )
}