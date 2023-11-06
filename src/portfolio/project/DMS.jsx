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
            기숙사에서는 다양한 신청 정보를 수기로 관리하는 경우가 많고, 필요한 정보를 빠르게 확인할 수 없었습니다. 따라서 기숙사 관리 절차, 또는 기숙사 생활에서 불편한 점을 개선하는 기숙사 관리 시스템을 개발했습니다.
            <br />
            모든 학교에 적용할 수 있는 서비스이며, 급식 보기, 공지사항, 분실물 관리, 상/벌점 관리 등 기숙사 생활의 편리함을 위해 다양한 기능을 제공합니다.
            </p>

            <div className="relative w-[85.5px] h-[27.99px] text-head3">
            역할
            </div>

            <div className="flex flex-col items-start gap-[9px]">
            <p className="relative self-stretch">
                <span>
                12명의 인원으로 구성된 학교 동아리에서 진행한 프로젝트이며 PM 및 백엔드 개발을 맡아 진행하였습니다. <br />
                </span>
            </p>
            <p className="relative self-stretch">
                <Bold text="• 일정 관리 및 기획 개발 과정 주도"/>
                <div className="ml-[10px]">
                    <Toggle summary="요구사항 수집 및 추가 기능 기획, 문서화" detail={
                        <>
                            프로젝트 요구사항 수집 및 기획 과정을 주도했습니다.<br/> 
                            <Gap/>
                            <Tab/> 설문조사와 인터뷰를 통해 요구사항을 수집하고 기능에 대한 다양한 피드백을 받으며, 기획시에 사용자가 정말로 원하는 것이 무엇일지 끊임없이 고려해야한다는 것을 몸소 느꼈습니다. 요구사항을 바탕으로 PRD와 기능명세서 등 문서를 작성하여 서비스의 기능을 팀원들과 함께 세밀하게 기획해 나갔습니다. <br/> 
                        </>
                    }/>
                    <Toggle summary={<>외부 컨택 → 특정 고등학교에서 한 달간 테스트 운영, 기숙사 관리 업체와의 미팅 및 피드백</>} detail={
                        <>
                            <Tab/>'DMS를 다른 학교에 적용하는 것'을 목표로 서비스를 홍보하고, 학교 및 기업과 직접 소통하였습니다.
                            기능소개서 및 가이드를 작성하여 여러 대상 고객에 서비스 사용 제안을 보냈습니다. 이를 통해 한 고등학교와 기숙사 관리 업체에 긍정적인 연락을 이어갔습니다.<br/>
                            <Tab/>주어진 상황이나 요구에 대한 다양한 해결방안을 찾는 능력을 기를 수 있었습니다.
                            <Gap/>
                            <a href="https://teamaliens.notion.site/DMS-Dormitory-Management-System-1a1c2b14473845e5a36ce944f008a97f?pvs=4" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[2px] mb-[5px] h-[29px] w-fit rounded ">
                                    <DocumentText text="DMS 소개 페이지"/>
                                </div>
                            </a>

                            <div className="flex flex-row gap-[10px]">
                                <ModalImage
                                    src="/img/description/dms-guide.png"
                                    className="h-[130px] mt-[10px]" open={imageOpen}
                                    caption="DMS 소개 페이지"
                                />
                                <ModalImage
                                    src="/img/description/dms-function-introduction.png"
                                    className="h-[130px] mt-[10px]" open={imageOpen}
                                    caption="DMS 기능소개서"
                                />
                            </div>
                        </>
                    }/>
                </div>
            </p>
            <p className="relative self-stretch">
                <Bold text="• 백엔드 개발"/>
                <div className="ml-[10px]">
                    <Toggle summary="자습실, 상벌점, 엑셀 출력, 알림 기능 DB 설계 및 api 개발" detail={
                        <>
                            <Gap/>아래와 같은 기능에 대한 DB Table을 설계하고 로직을 개발했습니다.<br/>
                            Detekt로 설정해놓은 lint 룰을 준수하고, MockK로 테스트코드를 작성하며 진행했습니다.
                            <div className="ml-[20px]">
                            - 자습실을 커스텀하여 생성하고 자리별로 신청하는 기능<br/>
                            - 상벌점을 관리하는 기능<br/>
                            - 학생 정보를 엑셀로 등록하는 기능<br/>
                            - 자습실 신청 현황을 엑셀로 출력하는 기능<br/>
                            - 이벤트가 생길 시 알림을 전송하는 FCM 기능<br/>
                            </div>
                        </>
                    }/>
                    <Toggle summary="효율적인 개발을 위한 아키텍처 리팩토링" detail={
                        <>
                            <Tab/>아키텍처 재설계로 중복 로직을 줄이고, 테스트코드 작성이 수월하도록 개선하였습니다. <br/>
                            <Gap/>
                            <Tab/>기존 아키텍처는 presentation → service → Repository 세 계층으로 이뤄져 있었기 때문에 service에 로직에 공통으로 나타나는 코드가 자주 생겼습니다.<br/>
                            <Gap/>
                            <Tab/>따라서 계층과 비즈니스 로직 사이에 각 도메인에서 사용되는 공통적인 함수를 묶는 계층을 추가하는 형태로 리팩토링했습니다. 공통적으로 검증되는 로직이나 여러번 비슷한 순서로 사용되는 쿼리들을 한 함수로 묶어 usecase를 Facade Pattern과 비슷한 형태로 구현할 수 있었습니다.
                            <ModalImage
                                src="/img/description/dms-backend-architecture.png"
                                className="h-[220px] mt-[10px]" open={imageOpen}
                                caption="아키텍처 구조도"
                            />
                        </>
                    }/>
                    <Toggle summary="UUID 기본값 삽입으로 인한 JPA 쿼리 방지로 api 성능 개선" detail={
                        <>
                            <Tab/>새로운 Entity를 생성할 때 의도치 않게 발생하는 쿼리를 발견하여 개선하였습니다.<br/>
                            <Gap/>
                            <Tab/>Id를 null이 아닌 필드로 선언하기 위해 초기 생성한 Id에 기본값으로 <code>UUID(0,0)</code>를 주입하는 코드가 있었는데, JPA persistable  의<code>isNew()</code>에서 해당 값을 기본값이 아닌 것으로 간주해 저장시 <code>merge</code> 가 호출되어 select 쿼리가 추가로 발생했습니다.<br/>
                            <Gap/>
                            <Tab/> <code>UUID(0,0)</code> 값이 ID인 경우에 ID 필드를 null로 세팅하는 코드를 <code>BaseEntity</code>에 추가하여 문제를 해결했습니다. 새 Entity를 생성하는 모든 api에 영향을 끼쳤고, 많은 entity를 저장하는 자습실 저장 api에서 평균 응답 속도를 40% 이상 개선할 수 있었습니다. (<code>129ms</code> → <code>72ms</code>)
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
                            선언하여 관리하였습니다. state 파일은 Terraform Cloud를 통해 저장합니다.
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
                <Tab/>고등학교와 기숙사 관리 업체에 서비스를 운영할 기회가 있었으나, 여러 이유로 인해 성사되지 못한 점이 아쉽습니다. 학생 신분으로 인한 제약 때문에 목표 달성을 위한 대안을 시도하지 못했던 것도 일부 원인이지만 더 근본적인 문제는 잠재적인 문제점에 대해 미리 파악하고 시작하지 않은 점이었다고 생각합니다. 비용을 아끼기 위해선 초기 단계에서 여러 시나리오를 고려하는 것이 중요하다는 걸 깨달았으며 예상치 못한 어려움에 부딪혔을 때 새로운 방향을 탐색하고 대응할 수 있는 유연성 또한 필요함을 알게 되었습니다.
            </p>
            <p className="relative self-stretch">
                <Tab/>프로젝트를 성공적으로 진행하기 위해선 팀원 각자가 지향하는 목표가 일치될 수 있도록 이끄는 것이 중요하다는 것을 알았습니다. 프로젝트를 주도하는 저조차도 진행에 있어 불확실함이 크다고 느꼈기에 구체적인 비전을 제시할 수 없었고, 그것이 팀원들에게도 영향을 준다는 걸 느꼈습니다. 어떻게 해야 분명한 비전을 만들 수 있는지 답을 찾지는 못했지만, 좋은 리더가 되기 위해선 더 많은 공부와 경험이 필요하겠다고 생각했습니다.<br />
            </p>
            <p className="relative self-stretch">
                <span>
                <Tab/>프로젝트의 기능이 많아지다 보니 백엔드 코드에서 중복을 없애고 각 도메인의 역할을 구분하기 위해선
                코드를 더욱 구조적으로 적용해야 했습니다. 이를 위해 DDD, Hexagonal Architecture, 그리고 그를
                응용한 아키텍처에 대해 공부하고 고민할 수 있었습니다.
                </span>
            </p> 
            </div>
        </div>
    );
}
