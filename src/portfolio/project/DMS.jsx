import { ProjectBanner } from "../../components/ProjectBanner";
import { Toggle } from "../../components/Toggle";
import { Bold, Tab, Gap } from "../../components/Text";
import { GithubText, DocumentText } from "../../components/IconText";
import { ModalImage } from "../../components/ModalImage";

export const DMS = ({imageOpen}) => {
    return (
        <div className="flex flex-col w-[643px] items-start gap-[15px] relative">

            <ProjectBanner image="/img/dms-banner.png" link="https://teamaliens.notion.site/DMS-Dormitory-Management-System-1a1c2b14473845e5a36ce944f008a97f?pvs=4" />

            <div className="relative w-[85.5px] h-[27.99px] text-head3">
            개요
            </div>

            <p className="relative">
            기숙사에서는 다양한 신청 정보를 수기로 관리하는 경우가 많아 필요한 정보를 빠르게 확인할 수 없었습니다. 따라서 기숙사 관리 절차, 또는 기숙사 생활에서 불편한 점을 개선하는 기숙사 관리 시스템을 개발했습니다.
            <br />
            모든 학교에 적용할 수 있는 서비스이며, 급식 보기, 공지사항, 분실물 관리, 상/벌점 관리 등 편리한 기숙사 생활을 위해 다양한 기능을 제공합니다.
            </p>

            <div className="relative w-[85.5px] h-[27.99px] text-head3">
            역할
            </div>

            <div className="flex flex-col items-start gap-[9px]">
            <p className="relative self-stretch">
                <span>
                12명의 인원으로 구성된 학교 동아리에서 진행한 프로젝트이며 PM 및 백엔드를 맡았습니다. <br />
                </span>
            </p>
            <p className="relative self-stretch">
                <Bold text="일정 관리 및 기획 개발 과정 주도"/>
                <div className="ml-[10px]">
                    <Toggle summary="요구사항 수집 및 추가 기능 기획, 문서화" detail={
                        <>
                            <Tab/>프로젝트 요구사항 수집 및 기획 과정을 이끌었습니다. 설문조사와 인터뷰를 통해 요구사항을 수집하고 PRD와 기능명세서 등 문서를 작성하여 서비스의 기능을 팀원들과 함께 세밀하게 기획했습니다. <br/>
                            <Tab/>기획을 위해 여러 회의를 거치면서, 팀원들과 의견을 효율적으로 나누기 위해선 <b>대화한 내용을 정리하고 기록</b>하는 것이 중요하다는 것을 알았고 기획시에는 사용자가 정말로 원하는 것이 무엇일지 끊임없이 고려해야한다는 것을 몸소 느꼈습니다.
                        </>
                    }/>
                    <Toggle summary={<>컨택을 통해 외부 고등학교에서 한 달간 테스트 운영, 기숙사 관리 업체와의 미팅 및 피드백</>} detail={
                        <>
                            <Tab/>DMS를 다른 학교에 적용하는 것을 목표로 서비스를 홍보하고, 기능소개서 및 가이드를 작성해 대상 고객에 서비스 사용 제안을 보냈습니다. 한 고등학교와 기숙사 관리 업체에 긍정적인 연락을 이었습니다.
                            <Gap/>
                            
                            <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[2px] mb-[5px] h-[29px] w-fit rounded ">
                                <a href="https://teamaliens.notion.site/DMS-Dormitory-Management-System-1a1c2b14473845e5a36ce944f008a97f?pvs=4" target='_blank' rel="noopener noreferrer">
                                <DocumentText text="DMS 소개 페이지"/>
                                </a>
                            </div>
                        </>
                    }/>
                </div>
            </p>
            <Gap/>
            <p className="relative self-stretch">
                <Bold text="백엔드 개발"/>
                <div className="ml-[10px]">
                    <Toggle summary="자습실, 상벌점, 엑셀 업로드 및 출력, 알림 기능 DB 설계 및 API 개발" detail={
                        <>
                            <Gap/>여러 기능에 대한 DB Table을 설계하고 API 로직을 개발했습니다.<br/>
                            Detekt로 설정해놓은 Lint 룰을 준수하고, MockK로 테스트코드를 작성했습니다.<br/>
                            팀원 간 코드리뷰를 통해 코드에 대한 의견을 적극적으로 나누고 토의하였습니다.
                        </>
                    }/>
                    <Toggle summary="효율적인 개발을 위한 아키텍처 리팩토링" detail={
                        <>
                            <div className="flex flex-row gap-[10px]">
                                <div className="w-[440px]">
                                    <Tab/>아키텍처 재설계로 중복 로직을 줄이고 코드를 간결하게 개선했습니다. <br/>
                                    <Gap/>
                                    <Tab/>기존 아키텍처는 Presentation → Service → Repository 세 계층으로 이뤄져 있었기 때문에 Service 로직에 공통으로 나타나는 코드가 자주 발생했습니다. Repository 계층과 비즈니스 로직 사이에 각 도메인에서 사용되는 공통적인 함수를 정의하는 중간 계층을 추가하는 형태로 리팩토링하였습니다. <br/>
                                    <Gap/>
                                    <a href="https://github.com/team-aliens/DMS-Backend" target='_blank' rel="noopener noreferrer">
                                        <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                            <GithubText text="백엔드 레포지토리"/>
                                        </div>
                                    </a>
                                </div>
                                <ModalImage
                                    src="/img/description/dms-architecture.png"
                                    className="h-[180px] mt-[0px]" open={imageOpen}
                                    caption="리팩토링 후 아키텍처"
                                />
                            </div>
                        </>
                    }/>
                    {/* <Toggle summary="UUID 기본값 삽입으로 인한 JPA 쿼리 방지로 API 성능 개선" detail={
                        <>
                            <Tab/>Id를 null이 아닌 필드로 선언하기 위해 초기 생성한 Id에 기본값으로 <code>UUID(0,0)</code>를 주입하는 코드가 있었는데, JPA persistable의 <code>isNew()</code>에서 해당 값을 기본값이 아닌 것으로 간주해 저장시 <code>merge</code> 가 호출되어 select 쿼리가 추가로 발생했습니다.<br/>
                            <Gap/>
                            <Tab/> ID가 <code>UUID(0,0)</code>인 경우에 ID 필드를 null로 세팅하는 코드를 추가하여 해결했습니다. 많은 entity를 저장하는 자습실 생성 API에서 응답 속도를 40% 이상 개선할 수 있었습니다. (<code>129ms</code> → <code>72ms</code>)
                            <ModalImage
                                src="/img/description/dms-baseuuidentity.png"
                                className="h-[120px] mt-[10px]" open={imageOpen}
                                caption="수정한 BaseUUIDEntity의 모습"
                            />
                        </>
                    }/> */}
                </div>
            </p>
            <Gap/>
            <p className="relative self-stretch">
                <Bold text="Infra"/><br/>
                <div className="ml-[10px]">
                    <Toggle summary="Docker gateway Missing 이슈 해결" detail={
                        <>
                            <Tab/>Spring 서버와 MySQL, Redis를 도커 네트워크 <code>bridge</code>로 연결하고 DB는 해당 내부 IP로만 통신하도록 하여 DB의 외부 노출을 줄이려 하였고, 작업 중 기본 <code>bridge</code> 네트워크의 Gateway가 사라져 외부에서 Container에 접근이 불가능한 이슈가 발생했습니다.<br/>
                            <Gap/>
                            <Tab/> 정확한 원인은 알아내지 못했으나 Docker를 재시작함으로써 해결했습니다. 통신 문제 발생 지점을 빠르게 찾아내기 위해선 <b>네트워크에 대한 이해와 디버깅 능력</b>이 중요하다는 것을 느꼈고, Network에서 Subnet과 Gateway의 역할 및 IP 구조에 대해 더 잘 이해할 수 있었습니다.
                            <ModalImage
                                src="/img/description/docker-gateway-missing.png"
                                className="h-[170px] mt-[10px]" open={imageOpen}
                                caption="docker network inspect 결과에 gateway가 없는 모습"
                            />
                        </>
                    }/>
                    <Toggle summary="Terraform을 통해 AWS, Cloudflare 등 인프라 스펙 선언 및 관리" detail={
                        <>
                            <Tab/>Terraform을 사용해 AWS, Cloudflare 인프라 요소를 코드로 선언하여 관리하였습니다. <br/> State 파일은 Terraform Cloud를 통해 저장합니다.
                            <a href="https://github.com/team-aliens/dms-infrastructure" target='_blank' rel="noopener noreferrer">
                            <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                <GithubText text="team-aliens/dms-infrastructure"/>
                            </div>
                            </a>
                        </>
                    }/>
                </div>
            </p>
            </div>

            <div className="inline-flex flex-col w-[645px] h-[63px] mb-[5px] mr-[-2.40px] items-center gap-[10px] relative border-solid border-[1px] drop-shadow-md bg-white border-lightgray rounded-lg">
            <div className="inline-flex items-center gap-[26px] absolute top-[13px] left-[18px]">
                <p className="relative w-[491px]">
                백엔드와 데브옵스에 대한 설계 정보 및 코드는 Github에서 확인하실 수 있습니다!
                </p>
                <a href='https://github.com/team-aliens/DMS-Backend' target='_blank' rel="noopener noreferrer">
                <div className="flex h-[35px] items-center justify-center gap-[10px] px-[16px] py-[14px] rounded relative bg-[#3D8AFF] hover:bg-[#336FF6] w-[84px]">
                <button className="relative w-fit mt-[-11.00px] mb-[-9.00px] ml-[-0.50px] mr-[-0.50px] all-[unset] box-border text-white">
                    바로가기
                </button>
                </div>
                </a>
            </div>
            </div>

            <div className="relative text-head3">
            회고
            </div>

            <div className="flex flex-col items-start gap-[9px]">
            <p className="relative self-stretch">
                <Tab/>고등학교와 기숙사 관리 업체에 서비스를 운영할 기회가 있었으나, 보안과 유지보수 책임 문제로 인해 성사되지 못한 점이 아쉽습니다. 학생 신분으로 인한 제약 때문에 목표 달성을 위한 대안을 시도하지 못했던 것도 일부 원인이지만 더 근본적인 문제는 잠재적인 문제점에 대해 미리 파악하고 시작하지 않은 점이었다고 생각합니다. 비용을 아끼기 위해선 초기 단계에서 <b>여러 시나리오를 고려하는 것</b>이 중요하다는 걸 깨달았으며 예상치 못한 어려움에 부딪혔을 때 <b>새로운 방향을 탐색하고 대응할 수 있는 유연성</b> 또한 필요함을 알게 되었습니다.
            </p>
            <p className="relative self-stretch">
                <Tab/>프로젝트를 성공적으로 진행하기 위해선 팀원 각자가 <b>지향하는 목표</b>가 일치될 수 있도록 이끄는 것이 중요하다는 것을 알았습니다. 리더인 저조차도 진행에 있어 불확실함이 크다고 느꼈기에 구체적인 비전을 제시할 수 없었고, 그것이 팀원들에게도 영향을 준다는 걸 느꼈습니다. 어떻게 해야 분명한 비전을 만들 수 있는지 답을 찾지는 못했지만 좋은 리더가 되기 위해선 더 많은 공부와 경험이 필요하겠다고 생각했습니다.<br />
            </p>
            <p className="relative self-stretch">
                <span>
                <Tab/>프로젝트의 기능이 많아지다 보니 백엔드 코드에서 중복을 없애고 각 도메인의 역할을 구분하기 위해선
                코드를 더욱 구조적으로 적용해야 했습니다. 이를 위해 다양한 방법으로 구현한 클린 아키텍처에 대해 공부하고 고민할 수 있었습니다.
                </span>
            </p> 
            </div>
        </div>
    );
}
