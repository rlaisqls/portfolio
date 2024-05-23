import React from "react";
import { Element } from "../components/Element";
import { Line } from "../components/Line";
import { Footer } from "../components/Footer";
import { GithubText, DocumentText } from "../components/IconText";
import { PersonalInfo } from "../components/PersonalInfo";
import { Xquare } from "./project/Xquare";
import { DMS } from "./project/DMS";
import { Modal } from "../components/Modal";

export const Portfolio = () => {

  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  
  const handleOpen = (img) => {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    document.getElementById('wrapper').style.paddingRight = '16px';
    setImage(img)
    setOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "scroll";
    document.getElementById('wrapper').style.paddingRight = '0px';
    setOpen(false);
  };

  return (
    <>
      <div id="wrapper" className="text-default bg-white w-full overflowY-hidden mr-[17px]">
        
        <Modal open={open} image={image} handleClose={handleClose}/>

        <img className="h-[180px] min-w-[960px] w-full top-0 left-0 image-cover overflow-x-scroll" alt="" src="/img/header.png" />
        <div className="relative flex flex-col gap-[20px] mx-[20px]">
          <div className="relative inline-flex gap-[50px] top-[75px] flex-col items-start mx-auto my-0">
            <div>
              <p className="text-head1 my-[10px]">김은빈</p>
              <div className="h-[20px]"/>
              <div className="flex flex-row gap-[10px] relative w-full items-center">
                <div className="flex flex-col gap-[20px] w-full">
                  <p className="text-head3 text-[20pt]">
                    모든 일에 오너쉽을 가지고 임하는 엔지니어입니다.
                  </p>
                  <div className="inline-flex gap-[20px] flex-col">
                    <div>
                      조직의 미션과 같은 방향으로 성장하는 것을 추구하며 책임감을 바탕으로 업무를 수행합니다. <br/>
                      프로젝트의 목표를 정확하게 파악하고 필요한 일을 적극적으로 찾아내는 것이 <br/>
                      업무에 있어 가장 핵심적인 능력이라고 생각합니다.
                    </div>
                    <div>
                      상황을 다양한 관점에서 분석하여 목표를 위해 여러 방법을 구상하고 실행하는 것을 좋아합니다. <br />
                      그러한 통찰력을 기르기 위해 끊임없이 배우고 있으며, 부족한 점에 있어서 두려움없이 받아들이고 수용합니다.
                    </div>
                    <div>
                      사람들과 의견을 공유하고, 함께 학습하는 기회를 만드는 것이 성장에 도움을 준다고 믿습니다. <br />
                      그러한 과정을 통해 더 성숙해지고 발전하는 동기를 얻습니다. 
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[9px] flex-col">
                </div>
              </div>
            </div>

            <div className="inline-flex flex-row w-full items-start">
                {/* <div className="inline-flex flex-col w-[271px] items-start gap-[5px]">
                  <PersonalInfo info=""  icon="/img/icon/user-black.png"/>
                  <PersonalInfo info="" icon="/img/icon/phone-black.png"/>
                </div> */}
                <div className="inline-flex flex-col items-start gap-[5px]">
                  <PersonalInfo info="rlaisqls@gmail.com" link="mailto:rlaisqls@gmail.com" icon="/img/icon/email-black.jpg"/>
                  <PersonalInfo info="https://github.com/rlaisqls" link="https://github.com/rlaisqls" icon="/img/icon/github-black.png"/>
                  <PersonalInfo info="https://linkedin.com/in/은빈-김" link="https://www.linkedin.com/in/%EC%9D%80%EB%B9%88-%EA%B9%80-248452250/" icon="/img/icon/linkedin-black.png"/>
                  <PersonalInfo info={
                    <div> 대덕SW마이스터고 3학년 재학중 <span className="text-[#8f8f8f]"> 2022.03 ~ 2024.12 </span> </div>
                  } icon="/img/icon/school-black.png" />
                </div>
            </div>

            <div className="flex flex-col items-start gap-[20px] relative w-[264px]">
              <p className="text-head2"> Skills </p>
              <Line/>
              <div className="flex flex-col items-start gap-[9px] w-[300px] h-[81px] left-0 ">
                <p className="relative self-stretch"> • Java, Kotiln, Spring Boot, Go <br/> </p>
                <p className="relative self-stretch"> • AWS, Linux, Terraform, Shell Script <br/> </p>
                <p className="relative self-stretch"> • K8s, Prometheus, Istio 등 오픈소스 </p>
              </div>
            </div>

            <div className="inline-flex gap-[27px] relative flex-col items-start">
              <div className="relative w-[111.8px] h-[27px]">
                <div className="w-[110px] text-head2"> Project </div>
              </div>
              <Line/>

              <div className="relative table">

                <div className="table-cell align-top">
                  <div className="flex pl-[10px] pr-[85px] items-start gap-[14.4px] flex-col">
                    <div className="flex flex-row gap-[10px]">
                      <img className="w-[40px] h-[40px]" alt="" src="/img/xquare-logo.png" />
                      <div className="text-head3 leading-[40px]"> Xquare </div>
                    </div>
                    <div className="relative w-[138px] h-[23px] text-gray whitespace-nowrap">
                      2023.07 ~ present
                    </div>
                    <GithubText link='https://github.com/team-xquare'/>
                    <DocumentText link='https://team-xquare.notion.site/DevOps-a8693ce0928c465db3a1e598473dda6f'/>
                  </div>
                </div>
                
                <div className="table-cell">
                  <Xquare imageOpen={handleOpen}/>
                  <div className="h-[50px]"/>
                </div>
              </div>
              
              <Line/>

              <div className="relative table">
                <div className="table-cell align-top">
                  <div className="flex pl-[10px] pr-[85px] items-start gap-[14.4px] flex-col">
                    <div className="flex flex-row gap-[10px]">
                      <img className="w-[40px] h-[40px]" alt="" src="/img/dms-logo.png" />
                      <div className="text-head3 leading-[40px]"> DMS </div>
                    </div>
                    <div className="relative w-[138px] h-[23px] text-gray whitespace-nowrap">
                      2023.01 ~ 2023.07
                    </div>
                    <GithubText link='https://github.com/team-aliens/DMS-Backend'/>
                    <DocumentText link='https://teamaliens.notion.site/Backend-a22b46ceb5334b80a40af21b3506c1db'/>
                  </div>
                </div>
                <div className="table-cell align-top">
                  <DMS imageOpen={handleOpen}/>
                  <div className="h-[50px]"/>
                </div>
              </div>
            </div>

            <div className="relative flex gap-[40px] relative flex-[0_0_auto] flex-col items-start">
              <div className="relative w-[217px] text-head2">Experiences</div>
              <Line/>
              <div className="inline-flex gap-[40px] relative flex-[0_0_auto] flex-col items-start">
                           
                <Element
                    title={"TIL Repository"}
                    elementInfo={"2022.05 ~ present"}
                    description={
                      (<div className="flex flex-col items-start gap-[9px]">
                          <p>
                            <span>
                              개발에 대해 공부하고 배운 내용을 정리하는 <a href="https://github.com/rlaisqls/TIL" rel="noopener noreferrer" target="_blank" > <span className="underline">TIL Repository</span></a>를 관리하고 있습니다. Network, OS, DB 등 다양한 개념을 약 600개의 md 파일에 정리, 작성하였고 현재도 꾸준히 공부한 내용을 추가하고 있습니다. 이 Repository에 글을 작성하는 목표는 다음과 같습니다.<br />
                            </span>
                            <span>
                              &nbsp;&nbsp;&nbsp;&nbsp; 1. 학습한 지식을 정리합니다.<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; 2. 머릿속에 있는 막연한 개념을 글로 적어 구체화합니다.<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; 3. 공부한 내용을 완전히 이해하고 응용할 수 있도록 합니다.
                            </span>
                          </p>
                        </div>)
                    }
                />
                <Element
                    title={"오픈소스 기여"}
                    description={
                      (<div className="flex flex-col items-start gap-[9px]">
                        <p>
                          <span>
                            오픈소스, 위키에서 개선을 위해 기여한 경험이 있습니다.<br/>•
                          </span>
                          <a href="https://github.com/aws/amazon-vpc-cni-K8s/pull/2573" rel="noopener noreferrer" target="_blank" > <span className="underline"> 23.09.18 </span>
                          </a> : amazon-vpc-cni-K8s Docs에서 <code>WARM_PREFIX_TARGET</code> 설명에 포함된 잘못된 값 수정 <br/>
                          • <a href="https://github.com/istio/istio/pull/47026" rel="noopener noreferrer" target="_blank"> <span className="underline"> 23.09.18 </span> </a> : Istio Docs에서 잘못된 링크 수정<br/>
                          • <a href="https://ko.wikipedia.org/wiki/%EA%B1%B0%EB%A6%AC_%EB%B2%A1%ED%84%B0_%EB%9D%BC%EC%9A%B0%ED%8C%85_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C" rel="noopener noreferrer" target="_blank"> <span className="underline"> 23.10.20 </span></a> : 위키백과 '거리 벡터 라우팅 프로토콜' 한국어 문서 작성<br/>
                          • <a href="https://github.com/istio/istio/pull/47686" rel="noopener noreferrer" target="_blank"> <span className="underline"> 23.12.06 </span></a> : Istiod, Gateways에 HPA memory targetAverageUtilization 옵션 추가<br/>
                          • <a href="https://github.com/grafana/pyroscope/pull/3177" rel="noopener noreferrer" target="_blank"> <span className="underline"> 24.04.07 </span></a> : Pyroscope 테스트코드에서만 사용되는 Mock 구조체를 테스트 파일로 이동
                        </p>
                      </div>)
                    }
                />
                
              </div>
            </div>

            <div className="inline-flex gap-[40px] relative flex-[0_0_auto] flex-col items-start">
              <div className="relative text-head2">Awards</div>
              <Line/>
              <div className="flex flex-col space-between h-fit w-[883px] justify-start gap-[30px]">
                <Element
                  title={<>KOSA-MIDAS<br/>Talent Challenge</>}
                  subtitle={"마이다스인 대표이사상 (2위)"}
                  elementInfo={"2023.11"}
                  description={"유연근무 일정을 계획·관리하고 다른 직원의 출근 일정을 간편하게 확인하는 스트레치 서비스를 제작했습니다.\n조장 역할을 맡아 프로젝트 기획, 개발과정을 주도했으며 마이다스인 대표이사상(2위)을 수상했습니다."}
                />
                <Element
                  title={"교내 알고리즘 경진대회"}
                  subtitle={"금상 (1위)"}
                  elementInfo={"2022.07"}
                  description={"5시간동안 진행된 교내 알고리즘 대회에서 금상을 수상하였습니다."}
                />
                <Element
                  title={"한국정보올림피아드\n전국대회 (KOI)"}
                  subtitle={"장려상"}
                  elementInfo={"2020.12"}
                  description={"한국정보올림피아드 전국 대회에서 장려상을 수상하였습니다.\n코딩에 큰 관심을 가지게 된 계기이며, 포기하지 않고 문제에 집중하여 해결해내는 끈기를 기를 수 있었습니다."}
                />
              </div>
            </div>
            <div className="inline-flex gap-[40px] relative flex-[0_0_auto] flex-col items-start">
              <div className="text-head2">Certificates</div>
              <Line/>
              <div className="flex flex-col space-between h-fit w-[883px] justify-start gap-[30px]">
                <Element
                  title={"TOEIC (755점)"}
                  subtitle={"한국TOEIC위원회"}
                  elementInfo={"2023.05"}
                  description={"영어 대화, 문서를 이해하고 해석할 수 있습니다."}
                />
                <Element
                  title={<a href="https://www.credly.com/badges/6a0ebac2-9f16-42ab-942c-2023b9dbd411/public_url" target='_blank' rel="noopener noreferrer">AWS Solution<br/>Architect Associate</a>}
                  subtitle={"AWS Certificate"}
                  elementInfo={"2023.09"}
                  description={"AWS에서 제공하는 다양한 서비스에 대해 이해하고,\n비용 성능 등 요구사항에 맞춘 솔루션을 설계할 수 있습니다."}
                />
                <Element
                  title={"SQLD"}
                  subtitle={"한국데이터산업진흥원"}
                  elementInfo={"2022.12"}
                  description={"데이터모델링 기본 지식을 바탕으로, SQL 작성, 성능 최적화 등\n데이터베이스 개체 설계 및 구현 등에 대한 실무를 수행할 수 있습니다."}
                />
                {/* <Element
                  title={"정보처리기능사"}
                  subtitle={"한국산업인력공단"}
                  elementInfo={"2022.08"}
                  description={"소프트웨어 프로그램 설계, 개발, 유지 및 보수 등의 업무를 수행하기 위한 기본적인 지식을 갖추고 있습니다."}
                /> */}
              </div>
            </div>
          </div>
        </div>
          <div className="h-[180px]"></div>
          <Footer/>
      </div>
    </>
  );
}
