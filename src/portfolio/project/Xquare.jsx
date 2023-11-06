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
                    여러 동아리에서 진행하는 프로젝트를 한 인프라에서 통합하여 관리하기 위한 프로젝트입니다.<br/>통합 인프라를 통해 많은 학생들이 서버 성능이나 관리, 비용 부담 없이 프로젝트를 배포하고 사용할 수 있도록 하는 것이 목적입니다. 현재 5개 동아리에서 6개의 서비스, 28개의 프로젝트(56개의 Pod)를 배포해 운영중입니다.
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
                            GitHub Actions 기반 인프라 구성 자동화 및 ArgoCD 배포 파이프라인 제공
                        </>} detail={
                            <>
                                <Tab/>다른 동아리의 프로젝트를 <b>인프라에 추가</b>하고 <b>지속적으로 배포</b>하기 위해 드는 공수를 최소화하기 위해 GitHub Actions 기반 파이프라인을 구현하였습니다. ArgoCD, Terraform 등의 툴과 Shell Script, Go와 같은 다양한 언어를 사용하여 구조를 설계하고 구축했습니다.
                                <Gap/>
                                <ModalImage src="/img/description/deployment-action.png" className="h-[130px]" open={imageOpen}/>
                                <Gap/><Gap/>
                            </>
                        }/>
                    </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="EKS 환경 구축"/>
                    <div className="ml-[10px]">
                        <Toggle summary="필요한 manifest를 chart로 정의하여 Terraform, ArgoCD로 배포" detail={
                            <>
                                <Tab/>인프라에 누가 언제 어떤 변경을 반영했는지 명시적으로 관리하고 기록하기 위해 GitOps 방식을 사용하였습니다. 자주 변하지 않는 인프라 요소는 Chart Repository를 정의한 뒤 Terraform으로 배포하고, 나머지 Chart는 ArgoCD Application으로 정의하여 커밋시에 변경사항이 바로 적용되도록 했습니다.
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <a href="https://github.com/team-xquare/k8s-resource" target='_blank' rel="noopener noreferrer">
                                    <GithubText text="team-xquare/k8s-resource"/>
                                    </a>
                                </div>
                            </>
                        }/>
                        <Toggle summary={
                            <>
                                Spot instance node에서 가용성 문제 해결 (약 97.9% → 99.95%, 2%pt 개선)
                            </>} detail={
                                <>
                                    <Tab/>사용할 수 있는 예산이 적었고 프로젝트 갯수 변화에 따라 노드를 스케일 인/아웃할 수 있어야 했기에 가격이 저렴한 Spot Instance로 모든 노드를 구성하였습니다. 그러나 가격 변동으로 인해 불시에 내려가는 Spot의 특성 때문에 서버가 비주기적으로 <b>10분 이상 정지하는 현상</b>이 발생했습니다.<br/>
                                    <Gap/>
                                    문제를 개선하기 위해 크게 두가지 방법을 사용했습니다.<br/>
                                    1. <b>Karpenter</b>를 도입하여 새로운 노드를 신속하게 생성하도록 했습니다.<br/>
                                    <Gap/>
                                    2. <Tab/>최소 1개의 Pod가 활성 상태이도록 보장하는 <b>PDB</b>를 설정하고 <b>Node Termination Handler의</b><br/>
                                    <div className="ml-[20px]">
                                        <b>코드를 커스텀</b>하여, node 종료 직전에 replica 개수를 임시로 증가시킨 후 새로운 Pod가 트래픽을 받을 수 있을 때 다시 갯수를 줄이는 블루/그린 배포를 구현했습니다.<br/>
                                    </div>
                                    <Gap/>

                                    <Tab/>위 작업으로 사용 리소스를 최소화하며 가용성을 늘릴 수 있었고, 27개의 Pod에 대해 측정한 결과 가용성이 99.95%로 개선된 것을 확인할 수 있었습니다. <br/>(한 달간 측정, 분당 1회씩 health check용 url에 요청을 보내 서버 활성 여부 판단)

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
                        <Toggle summary="Istio를 사용해 내부 통신 추적, 공통 토큰 인증을 위한 middleware 개발" detail={
                            <>
                                서버 내부끼리 통신할 때 발생하는 트래픽을 관리하고 로그로 기록하기 위해 Istio를 사용하였습니다.<br/>
                                <Gap/>
                                <Tab/>프로젝트에서 공통으로 쓰이는 유저 토큰에 대한 파싱을 위해 envoy external-auth와 연동되는<br/>
                                grpc 서버와 테스트코드를 golang으로 개발하였습니다.<br/>
                                <a href="https://github.com/team-xquare/envoy-middleware" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <GithubText text="team-xquare/envoy-middleware"/>
                                </div>
                                </a>
                            </>
                        }/>
                        <Toggle summary="Loki, Prometheus(+Thanos)로 로그 및 매트릭 수집" detail={
                            <>
                                <Tab/>Loki를 사용하여 로그를 수집 및 저장하고, Prometheus로 CPU, memory 등의 매트릭을 수집해 thanos를 통해 S3 storage에 저장합니다. 에러 로그가 발생하거나 리소스가 급격하게 많이 사용되는 경우 지정된 rule에 따라 alertmanager로 slack 알림을 받아 확인 및 점검합니다.<br/>
                                <Tab/>정보를 확인하는 대시보드는 Grafana를 사용했으며 Github Oauth를 적용하여 Organization별 권한을 관리하였습니다.
                            </>
                        }/>
                    </div>
                    </p>
                    <Gap/>
                    <p className="relative self-stretch">
                    <Bold text="IaC"/><br/>
                    <div className="ml-[10px]">
                        <Toggle summary="Terraform을 통해 EKS, S3, RDS, IAM role 등 인프라 스펙 선언 및 관리" detail={
                            <>
                                <Tab/>Terraform을 사용해 VPC, EKS, S3, RDS, SQS, ElasticCache, IAM Role, ECR 등 리소스를 코드로 선언하여 관리하고 있습니다. 필요한 경우  모듈과 변수를 활용하여 중복 코드를 줄였습니다.<br/>
                                <Tab/>state 파일은 Terraform Cloud를 통해 저장합니다.
                                
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
                    중요하다는 것을 느꼈습니다. Prometheus, loki로 다양한 정보를 수집하여 누적함으로써 오류가 발생할 경우에 빠르게 파악하여 조치할 수 있었습니다.
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
