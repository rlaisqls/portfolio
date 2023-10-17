
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
                        나는 누구인가?
                      </p>
                      <div className="inline-flex gap-[20px] flex-col">
                        


                      모든 일에 오너쉽을 가지고 임하는 데브옵스 엔지니어입니다.
      
                      조직의 미션과 같은 방향으로 성장하는 것을 추구하며 책임감을 바탕으로 업무를 수행합니다. <br/>
                      프로젝트의 목표를 정확하게 파악하고 필요한 일을 적극적으로 찾아내는 것이 <br/>
                      업무에 있어 가장 핵심적인 능력이라고 생각합니다.
               
                      상황을 다양한 관점에서 분석하여 목표를 위해 여러 방법을 구상하고 실행하는 것을 좋아합니다. <br />
                      그러한 통찰력을 기르기 위해 끊임없이 배우고 있으며, 부족한 점에 있어서 두려움없이 받아들이고 수용합니다.
           
                      사람들과 의견을 공유하고, 함께 학습하는 기회를 만드는 것이 성장에 도움을 준다고 믿습니다. <br />
                      그러한 과정을 통해 더 성숙해지고 발전하는 동기를 얻습니다. 

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