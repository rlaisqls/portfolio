import { ProjectBanner } from "../../components/ProjectBanner";
import { Toggle } from "../../components/Toggle";
import { Bold, Tab } from "../../components/Text";
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
            기숙사에서는 다양한 신청 정보를 수기로 관리하는 경우가 많고, 필요한 정보를 빠르게 확인할 수
            없었습니다. 따라서 기숙사 관리 절차, 또는 기숙사 생활에서 불편한 점을 개선하는 기숙사 관리 시스템을
            개발했습니다.
            <br />
            모든 학교에 적용할 수 있는 서비스이며, 급식 보기, 공지사항, 분실물 관리, 상/벌점 관리 등 기숙사
            생활의 편리함을 위해 다양한 기능을 제공합니다.
            </p>

            <div className="relative w-[85.5px] h-[27.99px] text-head3">
            역할
            </div>

            <div className="flex flex-col items-start gap-[9px]">
            <p className="relative self-stretch">
                <span>
                12명의 인원으로 구성된 학교 동아리에서 진행한 프로젝트이며 PM 및 백엔드 개발을 맡아
                진행하였습니다. <br />
                </span>
            </p>
            <p className="relative self-stretch">
                <Bold text="• 일정 관리 및 기획 개발 과정 주도"/>
                <div className="ml-[10px]">
                    <Toggle summary="프로젝트 진행을 위한 요구사항 수집 및 추가 기능 기획" detail={
                        <>
                            <Tab/>DMS 서비스를 기존에 교내에서 사용하며, 학생 및 상벌점 관리, 자습실 등 신청 관리 기능을<br/> 다른 학교도 적용할 수 있을 것이라는 생각이 들었습니다.<br/> 
                            <Tab/>이에 대한 수요를 파악하기 위해 외부 학교에 설문조사 및 인터뷰을 진행하였습니다. 설문조사 결과를 바탕으로 기숙사 정보를 쉽게 확인하고, 신청 정보를 간편하게 출력할 수 있는 기능을 주로 하여, 다양한 학교에서 사용할 수 있도록 돕는 정보 커스텀 기능을 추가로 기획, 개발하였습니다.<br/> 
                            <Tab/>각 기능이 필요한 이유와 기능을 통해 어떤 문제를 해결할 수 있는지를 PRD 형태로 작성한 뒤, 기능 명세서로 자세히 문서화하였습니다.
                        </>
                    }/>
                    <Toggle summary={<>외부 학교 컨택 → 한 고등학교에서 한 달간 테스트 운영, 기숙사 관리 업체와의 미팅 및 피드백</>} detail={
                        <>
                            <a href="https://teamaliens.notion.site/DMS-Dormitory-Management-System-1a1c2b14473845e5a36ce944f008a97f?pvs=4" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[2px] mb-[5px] h-[29px] w-fit rounded ">
                                    <DocumentText text="DMS 가이드, 소개문서"/>
                                </div>
                            </a>
                            <Tab/>기능소개서 및 가이드를 작성하고 첨부하여 여러 학교에 서비스 사용 제안를 보내었습니다.<br/>
                            <Tab/>그 결과 개발한 프로젝트를 다른 고등학교에서 한 달간 테스트 할 수 있었습니다. 하지만 개인정보 관리 문제가 있고 학생 신분인 저희 동아리가 보안 이슈에 대한 책임을 질 수 없다는 점이 문제되어 지속적인 사용은 무산되었습니다.<br/> 
                            <Tab/>개인정보 문제를 해결하기 위해선 기숙사 관리 소프트웨어 제작에 대한 수요가 있고 보안을 관리할 수 있는 능력이 있는 기업과 협업하는 것이 방법일 것이라 판단했습니다. 따라서 이후 기능소개서 및 가이드를 기업을 대상으로  전송하여 서비스를 홍보하는 전략을 세웠습니다.<br/> 
                            <Tab/>기숙사 관리 서비스를 제공하는 한 회사와 성공적인 컨택이 이뤄져 DMS의 기능에 대한 피드백을 받았고, 특정 학교에서 서비스를 운영하는 것에 대한 제의를 받았습니다. 그러나 학교에서 유지보수의 어려움, 금전적인 대가에 대한 문제 등을 이유으로 기업과의 협업을 반대하여 성사되지 못했고 현재는 외부 컨택 프로젝트가 종료되었습니다.
                        </>
                    }/>
                </div>
            </p>
            <p className="relative self-stretch">
                <Bold text="• 백엔드 개발"/>
                <div className="ml-[10px]">
                    <Toggle summary="자습실, 상벌점, 엑셀 출력, 알림 기능 DB 설계 및 api 개발" detail={
                        <>
                            <Tab/>자습실을 커스텀하여 생성하고 자리별로 신청하는 기능, 상벌점을 관리하는 기능, 유저 정보를 엑셀로 등록하는 기능, 자습실 신청 현황을 엑셀로 출력하는 기능, 이벤트가 생길 시 알림을 전송하는 FCM 기능에 대한 DB Table을 설계하고 로직 개발을 수행하였습니다.
                            <Tab/>detekt로 설정해놓은 lint 룰을 준수했고, mockk로 테스트코드를 작성했습니다. 
                            <ModalImage
                                src="/img/description/dms-pr-list.png"
                                className="h-[210px] mt-[10px]" open={imageOpen}
                                caption="6개월간 총 84개의 PR을 올리고 개발하였습니다"
                            />
                        </>
                    }/>
                    <Toggle summary="효율적인 개발을 위한 아키텍처 리팩토링" detail={
                        <>
                            <Tab/>아키텍처 재설계를 통해 중복된 로직을 줄이고 테스트코드를 작성에 수월하도록 개선하였습니다. 기존 아키텍처는 presentation → service → Repository 세 계층으로 이뤄져 있었기 때문에 service에 도메인에서 공통으로 나타나는 로직들이 자주 생겼는데, 이러한 점을 해결하기 위해 백엔드 팀원들과 함께 새 구조를 구상하였습니다. <br/>
                            <Tab/>새로운 아키텍처는 repository 계층과 비즈니스 로직 사이에 각 도메인에서 사용되는 공통적인 함수를 묶는 계층을 추가하는 형태입니다. Save시 공통적으로 검증되는 로직이나 여러번 비슷한 순서로 사용되는 쿼리들을 한 함수로 묶고, usecase를 Facade Pattern과 같은 형태로 구현할 수 있었습니다.
                            <ModalImage
                                src="/img/description/dms-backend-architecture.png"
                                className="h-[280px] mt-[10px]" open={imageOpen}
                                caption="아키텍처 구조도"
                            />
                        </>
                    }/>
                    <Toggle summary="UUID 기본값 삽입으로 인한 JPA 쿼리 방지로 api 성능 개선" detail={
                        <>
                            <Tab/>새로운 Entity를 생성할 때 의도치 않게 발생하는 쿼리를 발견하여 개선하였습니다.<br/>
                            <Tab/>POJO domain class의 Id가 nullable 하지 않도록 만들기 위해 초기 생성한 Id에 기본값으로 <code>UUID(0,0)</code>를 주입하는 코드가 있었는데,JPA의 persistable class의 <code>isNew()</code> method에서 해당 값을 기본값이 아닌 것으로 간주해 저장시 <code>merge</code> 가 호출되어 select 쿼리가 추가로 발생하였습니다. <code>UUID(0,0)</code> 값이 ID인 경우에 ID 필드를 null로 세팅하는 코드를 <code>BaseEntity</code>에 추가하여 문제를 해결했습니다.<br/>
                            <Tab/> Entity를 생성하는 모든 api에 영향을 끼쳤고, 많은 entity를 저장하는 자습실 저장 api에서 평균 응답 속도를 40% 이상 개선할 수 있었습니다. (<code>129ms</code> → <code>72ms</code>)
                            <ModalImage
                                src="/img/description/dms-baseuuidentity.png"
                                className="h-[150px] mt-[10px]" open={imageOpen}
                                caption="수정한 BaseUUIDEntity의 모습"
                            />
                        </>
                    }/>
                </div>
            </p>
                    
            <p className="relative self-stretch">
                <Bold text="• Infra"/><br/>
                <div className="ml-[10px]">
                    <Toggle summary="Docker gateway Missing 이슈 해결" detail={
                        <>
                            <Tab/> Docker를 사용해 EC2에 Spring 서버와 MySQL, Redis를 함께 올려서 사용하고 있었기에 세 서버를 bridge 도커 네트워크로 연결하고 DB는 해당 내부 ip를 통해서만 통신하도록 하여 DB의 외부 노출을 줄이려 하였습니다. 그러나 Docker 네트워크를 구축하던 중, 외부에서 bridge에 연결되어있는 container의 port에 접근할 수 없는 이슈가 발생했습니다.<br/>
                            <Tab/> <code>Docker network inspect</code> 명령어로 확인하니 network의 gateway가 사라진 것을 확인할 수 있었습니다.
                            <ModalImage
                                src="/img/description/docker-gateway-missing.png"
                                className="h-[250px] mt-[10px]" open={imageOpen}
                                caption="docker network inspect 결과에 gateway가 없는 모습"
                            />
                            <Tab/> 정확한 원인은 알아내지 못했으나 Docker를 재시작함으로써 해결했습니다. 이 이슈를 통해 통신 문제가 생겼을 때 그 발생 지점을 빠르게 찾아내기 위해선 네트워크에 대한 이해와 디버깅 능력이 중요하다는 것을 느꼈습니다. docker network에서의 subnet과 gateway의 역할 및 ip 구조에 대해 더 깊게 이해하게 되었습니다.
                        </>
                    }/>
                    <Toggle summary="Terraform을 통해 EKS, S3, RDS 등 인프라 스펙 선언 및 관리" detail={
                        <>
                            <Tab/>Terraform을 사용해 EC2, S3, Cloudflare pages 등을 코드로<br/>
                            선언하여 관리하고 있습니다. state 파일은 Terraform Cloud를 통해 저장합니다.
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
                <Tab/>'서비스를 다른 학교에 적용하는 것'을 목표로 홍보와 컨택 작업을 적극적으로 주도하였습니다. 설문조사와 인터뷰를 통해 필요한 요구사항들을 수집했고 이를 바탕으로 PRD와 기능명세서를 작성하여 팀원들과 함께 서비스의 기능을 세밀하게 기획해 나갔습니다. 여러 학교를 인터뷰하며 서비스에 대한 다양한 피드백을 받았습니다. 서비스 기획시에 사용자가 정말로 원하는 것이 무엇인지 끊임없이 고려해야한다는 것을 알게되었습니다.<br />
            </p>
            <p className="relative self-stretch">
                <Tab/>고등학교와 기숙사 관리 업체에 서비스를 운영할 기회가 있었으나, 여러 이유로 인해 좌초된 점이 아쉽습니다. 학생 신분으로 인한 제약 때문에 목표 달성을 위한 대안을 시도하지 못했던 것도 일부 원인이지만 더 근본적인 문제는 잠재적인 문제점에 대해 미리 파악하고 시작하지 않은 점이었다고 생각합니다. 초기 단계에서 여러 시나리오를 고려하는 것이 중요하다는 걸 깨달았으며 예상치 못한 어려움에 부딪혔을 때 새로운 방향을 탐색하고 대응할 수 있는 유연성 또한 필요함을 알게 되었습니다.
            </p>
            <p className="relative self-stretch">
                <Tab/>팀을 이끌면서 많은 회의와 의사결정을 거쳤습니다. 효율적인 회의를 위해선 안건을 사전에 공유하고, 회의 목적 달성을 위해서 각 안건별 논의 시간을 제한하는 것이 도움된다는 걸 알았습니다. 팀 내에서 프로젝트 진행 방향에 대한 의견이 갈릴 때 팀원들이 감정을 담지 않고 솔직한 이야기를 할 수 있도록 조정하여, 논의에서 모든 팀원들이 동의할 수 있는 결론을 낼 수 있도록 노력하였습니다. 
            </p>
            <p className="relative self-stretch">
                <Tab/>프로젝트를 성공적으로 진행하기 위해선 팀원 각자가 지향하는 목표가 일치될 수 있도록 이끄는 것이 중요하다는 것을 알았습니다. 프로젝트를 주도하는 저 조차도 진행에 있어 불확실함이 크다고 느꼈기에 구체적인 비전를 제시할 수 없었고, 그것이 팀원들에게도 영향을 준다는 걸 느꼈습니다. 어떻게 해야 분명한 비전을 만들 수 있는지 답을 찾지는 못했지만 좋은 리더가 되기 위해선 더 많은 공부와 경험이 필요하겠다고 생각했습니다.<br />
            </p>
            <p className="relative self-stretch">
                <span>
                <Tab/>프로젝트의 기능이 많아지다보니 백엔드 코드에서 중복을 없애고 각 도메인의 역할을 구분하기 위해선
                코드를 보다 구조적으로 적용해야 했습니다. 이를 위해 DDD, Hexagonal Architecture, 그리고 그를
                응용한 아키텍처에 대해 공부하고 고민할 수 있었습니다.
                </span>
            </p> 
            </div>
        </div>
    );
}
