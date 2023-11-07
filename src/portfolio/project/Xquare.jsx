import { GithubText } from "../../components/IconText";
import { DocumentText } from "../../components/IconText";
import { ProjectBanner } from "../../components/ProjectBanner";
import { Toggle } from "../../components/Toggle";
import { ModalImage } from "../../components/ModalImage";
import { Bold, Tab, Gap } from "../../components/Text";

export const Xquare = ({imageOpen}) => {
    return (
        <div className="flex flex-col w-[643px] items-start gap-[20px] relative">
            <ProjectBanner image="/img/xquare-banner.png" link="https://rlaisqls0324.notion.site/XQUARE_Guide-f28ab844cd024835bed72137cd497442?pvs=4" />

            <div className="flex flex-col w-full items-start gap-[7px] relative">
                <div className="relative text-head3">
                    개요
                </div>

                <p className="relative">
                    <Tab/>여러 동아리의 프로젝트를 한 인프라에서 통합하여 관리하기 위한 프로젝트입니다. PaaS 형태의 통합 인프라를 통해 많은 학생들이 서버 성능이나 관리, 비용 부담 없이 프로젝트를 배포하고 사용할 수 있도록 하는 것이 목적입니다.<br/>
                    <Tab/>현재 5개 동아리에서 개발하는 6개의 서비스, 28개의 프로젝트(56개의 Pod)를 인프라에서 관리 중이며, 교내 선생님과 학생을 포함한 약 250명의 유저가 배포된 서비스를 사용하고 있습니다.
                </p>
                </div>

                <div className="flex flex-col w-full items-start gap-[7px] relative">
                <div className="relative text-head3">
                    역할
                </div>

                <div className="flex flex-col items-start gap-[9px]">
                    <p className="relative self-stretch">
                    2명으로 이뤄진 데브옵스 팀에서 전체적인 인프라 구조를 주도적으로 설계 및 구축하였습니다.<br />
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="CI/CD"/><br />
                    <div className="ml-[10px]">
                        <Toggle summary={<>
                            GitHub Actions, ArgoCD 기반 인프라 구성 자동화 및 배포 파이프라인 구축
                        </>} detail={
                            <>
                                <Tab/>다른 동아리의 프로젝트를 <b>인프라에 추가</b>하고 <b>지속적으로 배포</b>하는 공수를 최소화하기 위해 GitHub Actions 기반 배포 파이프라인을 구축했습니다. ArgoCD, Terraform 등의 툴과 Shell Script, Go와 같은 다양한 언어를 사용하여 구조를 설계, 구현했습니다.<br/>
                                <Tab/>각 동아리가 폼을 통해 신청하면 백오피스 서버를 통해 DB 계정과 액세스 키를 발급받아 GitHub Actions 배포 파이프라인을 자유롭게 활용할 수 있습니다. Action에서 빌드된 프로젝트는 오토스케일링 가능한 EKS 환경에 배포됩니다.
                                <Gap/>
                                <ModalImage src="/img/description/deployment-action.png" className="h-[150px]" open={imageOpen}/>
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <a href="https://github.com/team-xquare/xquare-deployment-action" target='_blank' rel="noopener noreferrer">
                                    <GithubText text="team-xquare/xquare-deployment-action"/>
                                    </a>
                                </div>
                            </>
                        }/>
                    </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="EKS 환경 구축"/>
                    <div className="ml-[10px]">
                        <Toggle summary="필요한 K8s 리소스를 Helm Chart로 정의하여 Terraform, ArgoCD로 배포" detail={
                            <>
                                <Tab/>인프라에 언제 어떤 변경이 반영되었는지 기록하기 위해 Menifest를 GitOps 기반으로 관리합니다.<br/>
                                Helm Chart로 템플릿화하여 중복 정의를 피하고 값을 쉽게 변경할 수 있도록 했습니다.
                                <Gap/>
                                1. 자주 변경되는 차트는 ArgoCD Application으로 정의하여 배포합니다.<br/>
                                2. 기본적으로 설치되어야 하며 자주 변하지 않는 인프라 요소는 Chart Repository 정의 후 <br/>
                                <span className="ml-[20px]"/>Terraform을 통해 배포합니다.
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <a href="https://github.com/team-xquare/K8s-resource" target='_blank' rel="noopener noreferrer">
                                    <GithubText text="team-xquare/K8s-resource"/>
                                    </a>
                                </div>
                            </>
                        }/>
                        <Toggle summary={
                            <>
                                Spot Instance Node에서 가용성 문제 해결 (약 97.9% → 99.95%)
                            </>} detail={
                                <>
                                    <Tab/>사용할 수 있는 예산이 적었으나 프로젝트 수 변동에 따라 Node를 자유롭게 스케일 인/아웃할 수 있어야 했기에, 모든 Node를 가격이 저렴한 Spot Instance로 구성했습니다. 그러나 Spot Instance의 특성으로 Node가 불시에 내려가 서버 작동이 <b>비주기적으로 10분 이상 정지</b>하는 현상이 발생했습니다.<br/>
                                    <Gap/>
                                    문제를 개선하기 위해 크게 두가지 방법을 사용했습니다:<br/>
                                    1. <b>Karpenter</b>를 도입하여 새로운 노드를 신속하게 생성하도록 했습니다.<br/>
                                    <Gap/>
                                    2. <Tab/>최소 1개의 Pod가 활성 상태이도록 보장하는 <b>PDB</b>를 설정하고 <b>Node Termination Handler의</b><br/>
                                    <div className="ml-[20px]">
                                        <b>코드를 커스텀</b>하여, Node 종료 직전에 Replica 개수를 임시로 증가시킨 후 새로운 Pod가 트래픽을 받을 수 있을 때 다시 갯수를 줄이는 블루/그린 배포를 구현했습니다.<br/>
                                    </div>
                                    <Gap/>

                                    <Tab/>위 작업으로 리소스를 추가로 사용하지 않고도 문제를 개선할 수 있었으며, 측정한 결과 가용성이 약 97.9%에서 99.95%로 향상된 것을 확인할 수 있었습니다. <br/>
                                    <span className="text-gray">(한 달간 측정, 분당 1회씩 Health Check용 URL에 요청을 보내 서버 활성 여부 판단)</span>

                                    <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                        <a href="https://team-xquare.notion.site/spot-instance-downtime-660ad99c5dd549eb95e2c206f1d21d6d" target='_blank' rel="noopener noreferrer">
                                        <DocumentText text="자세한 과정을 담은 기술문서"/>
                                        </a>
                                    </div>
                                </>
                            }/>
                        </div>
                    </p>
                    <Gap/>
                    <p className="relative self-stretch">
                    <Bold text="모니터링"/><br/>
                    <div className="ml-[10px]">
                        <Toggle summary="Istio를 사용해 내부 통신 추적, 공통 토큰 인증을 위한 Middleware 개발" detail={
                            <>
                                서버 내부끼리 통신할 때 발생하는 트래픽을 관리하고 로그로 기록하기 위해 Istio를 사용합니다.<br/>
                                <Gap/>
                                <Tab/>Go를 사용하여 Istio Proxy(Envoy) 필터에서 프로젝트 공통 유저 토큰을 파싱하는 External Authorization GRPC 서버와 테스트코드를 추가로 개발하였습니다.<br/>
                                <a href="https://github.com/team-xquare/envoy-middleware" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <GithubText text="team-xquare/envoy-middleware"/>
                                </div>
                                </a>
                            </>
                        }/>
                        <Toggle summary="Loki, Prometheus(+Thanos)로 로그 및 매트릭 수집" detail={
                            <>
                                <Tab/>Loki를 사용하여 로그를 수집 및 저장하고, Prometheus로 CPU, Memory 등의 매트릭을 수집해 Thanos를 통해 S3에 저장합니다. 에러 로그가 발생하거나 리소스가 급격하게 많이 사용되는 경우 지정된 Rule에 따라 Alertmanager로 Slack 알림을 받아 확인 및 점검합니다.

                                <div className="flex flex-row gap-[10px]">
                                    <div className="mt-[10px] mb-[5px]">
                                        <ModalImage
                                            src="/img/description/grafana-loki-dashboard.png"
                                            className="h-[150px]" open={imageOpen}
                                            caption="프로젝트의 로그를 나타내는 grafana 대시보드"
                                        />
                                    </div>
                                    <div className="mt-[10px] mb-[5px]">
                                        <ModalImage
                                            src="/img/description/grafana-compute-resources.png"
                                            className="h-[150px]" open={imageOpen}
                                            caption="리소스 사용률을 나타내는 Grafana 대시보드"
                                        />
                                    </div>
                                </div>

                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <a href="https://team-xquare.notion.site/DevOps-a8693ce0928c465db3a1e598473dda6f?p=049f6f1c1a4e4a35b767f8a17036fcf3&pm=s" target='_blank' rel="noopener noreferrer">
                                    <DocumentText text="모니터링 툴 설정 구조에 대한 기술 문서"/>
                                    </a>
                                </div>
                            </>
                        }/>
                    </div>
                    </p>
                    <Gap/>
                    <p className="relative self-stretch">
                    <Bold text="IaC"/><br/>
                    <div className="ml-[10px]">
                        <Toggle summary="Terraform을 통해 AWS 인프라 스펙 선언 및 관리" detail={
                            <>
                                <Tab/>Terraform을 사용해 AWS 리소스를 코드로 선언하여 관리합니다. 필요한 경우  모듈과 변수를 활용하여 중복 코드를 줄였습니다. State 파일은 Terraform Cloud를 통해 저장합니다.
                                
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <a href="https://github.com/team-xquare/xquare-infrastructure-global" target='_blank' rel="noopener noreferrer">
                                    <GithubText text="team-xquare/xquare-infrastructure-global"/>
                                    </a>
                                </div>
                            </>
                        }/>
                    </div>
                    </p>
                </div>
            </div>

            <div className="inline-flex flex-col w-[645px] h-[81px] mb-[5px] mr-[-2.40px] items-center gap-[10px] relative border-solid border-[1px] drop-shadow-md bg-white border-lightgray rounded-lg">
            <div className="inline-flex items-center gap-[26px] absolute top-[13px] left-[18px]">
            <p className="relative w-[491px]">
                구조에 대한 설명 및 자세한 구축 과정은
                <br />
                Notion으로 작성한 기술문서에서 확인하실 수 있습니다!
                </p>
                <a href='https://team-xquare.notion.site/DevOps-a8693ce0928c465db3a1e598473dda6f?pvs=4' target='_blank' rel="noopener noreferrer">
                <div className="flex w-[84px] h-[35px] items-center justify-center gap-[10px] px-[16px] py-[14px] rounded relative bg-[#9650FA] hover:bg-[#7439D3]">
                    <button className="relative w-fit mt-[-11.00px] mb-[-9.00px] ml-[-0.50px] mr-[-0.50px] all-[unset] box-border text-white">
                        바로가기
                    </button>
                </div>
                </a>
            </div>
            </div>

            <div className="flex flex-col w-full items-start gap-[7px] relative">
            <div className="relative text-head3">
                회고
            </div>

            <div className="flex flex-col items-start gap-[9px]">
                <p className="relative self-stretch">
                <span>
                    <Tab/>여러 Pod를 안정적으로 올리고, 동아리별 권한을 쉽게 관리할 수 있는 구조를 기획, 구축하는
                    과정에서 여러 기술을 사용하고 경험해볼 수 있어 뜻 깊은 프로젝트였습니다.
                    <br />
                </span>
                </p>
                <p className="relative self-stretch">
                <span>
                    <Tab/>또, 모니터링을 통해 서버의 상태를 <b>실시간으로 파악</b>하거나 <b>기록해놓고 상태를 면밀하게 살펴보는 것</b>이
                    중요하다는 것을 느꼈습니다. Prometheus, Loki로 다양한 정보를 수집하여 누적함으로써 오류가 발생할 경우에 더 빠르게 파악하여 조치할 수 있었습니다.
                    <br />
                </span>
                </p>
                <p className="relative self-stretch">
                <span>
                    <Tab/>다만, 문제가 발생했을 때 지식의 부족으로 바로 대응하지 못하였을 때가 있었다는 점이
                    아쉽습니다. 사용하는 기술에 대한 근본적인 이해나 디버깅 능력이 부족하다면 서버의 불안정 상태가
                    길어져 사용자에게 불편한 경험을 줄 수 있다는 것을 몸소 느꼈습니다.
                    <br />
                </span>
                </p>
                <p className="relative self-stretch">
                <span>
                    <Tab/>앞으로는 기술을 도입하거나 인프라를 변경할 때 <b>기술을 완전히 이해하고, 영향받는 부분이 없을지</b> 꼼꼼히 살피고 고려해야겠다고 생각했습니다.
                </span>
                </p>
            </div>
            </div>
        </div>
    )
};
