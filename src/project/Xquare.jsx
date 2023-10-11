import { GithubText } from "../components/IconText";
import { DocumentText } from "../components/IconText";
import { ProjectBanner } from "../components/ProjectBanner";
import { Toggle } from "../components/Toggle";
import { ModalImage } from "../components/ModalImage";
import { Bold, Semibold, Tab, Gap, TextSection } from "../components/Text";

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
                    <Bold text="• CI/CD"/><br />
                    <div className="ml-[10px]">
                        <Toggle summary="Xquare 배포를 위한 Git Action Template 개발" detail={
                            <>
                                <Tab/>다른 동아리의 Repository에 있는 프로젝트를 한 인프라에 배포하기 위해 Git Action을 사용하여 배포 파이프라인을 제작했습니다. ArgoCD, Terraform 등의 툴과 Shell 스크립트, Go와 같은 다양한 언어를 사용하여 구조를 설계하고 구축했습니다. <br/>
                                <Tab/>프로젝트 추가 및 CD 구축을 위해 드는 공수을 최소화합니다. 각 동아리는 액세스 키를 발급받으면 Git Action을 통해 배포 파이프라인을 자유롭게 활용할 수 있습니다. 
                                <Gap/>
                                <ModalImage src="/img/description/deployment-action.png" open={imageOpen}/>
                                <Tab/>Xquare 배포 액션을 사용해 배포할 때 수행되는 과정을 나타낸 흐름도입니다.<br/>
                                <Gap/>
                                <Semibold text="1. Git Action 실행"/>
                                <TextSection text={<>
                                    각 동아리는 xquare Action Template을 레포지토리의 Action에 적용합니다.<br/>
                                    access key를 관리자에게 발급받아 input에 넣으면 Action Template을 실행할 수 있습니다.
                                </>}/>
                                <Semibold text="2. OIDC로 ECR, Secret Manager 권한 assume"/>
                                <TextSection text={<>
                                    Git Action에 OIDC role을 assume하여 필요한 AWS 리소스에 접근하도록 합니다.
                                </>}/>
                                <Semibold text="3. 도커 이미지 빌드"/>
                                <TextSection text={<>
                                    도커로 이미지를 빌드합니다.
                                </>}/>
                                <Semibold text="4. ECR에 이미지 push"/>
                                <TextSection text={<>
                                    배포하려는 프로젝트에 대한 ECR이 존재하지 않는 경우 aws cli를 통해 우선 생성합니다.<br/>
                                    이후 Terraform repository에서 import 하여 공통 설정을 추가하고 코드, state에 반영합니다.
                                </>}/>
                                <Semibold text="5. ArgoCD에 application 추가"/>
                                <TextSection text={<>
                                    ArgoCD repository가 Git Action Dispatch를 통해 적용할 정보를 전달받고, yaml 파일에  ecr 레포지토리와 이미지 태그 정보를 담아 커밋합니다. 이후 ArgoCD의 ApplicationSet이 설정 파일 목록을 읽어 Application을 생성 혹은 수정합니다. 그러므로 Project를 쉽게 추가할 수 있고 구조 변경에 유연합니다.<br/>
                                </>}/>
                                <Semibold text="6. K8s Cluster에 반영"/>
                                <TextSection text={<>
                                    ArgoCD가 Application 정보에 대한 Pod와 Service를 업데이트합니다.
                                </>}/>
                            </>
                        }/>
                        <Toggle summary="Golang을 사용해 배포 access key 발급 서버 개발" detail={
                            <>
                                <Tab/>Action 실행을 위한 Access key를 발급, 인증하고 허가된 프로젝트 정보를 저장하는 백오피스 Restapi 서버를 개발했습니다. <code>net/http</code>, <code>go-gorm/gorm</code> 패키지를 사용하여 구현했습니다.
                                <Gap/>
                                <div className="flex flex-row gap-[10px]">
                                    <ModalImage
                                        src="/img/description/project-manager-file-structure.png"
                                        className="h-[200px]" open={imageOpen}
                                        caption="프로젝트 파일 구조"
                                    />
                                    <ModalImage
                                        src="/img/description/project-manager-code.png"
                                        className="h-[200px]" open={imageOpen}
                                        caption="프로젝트 코드 일부"
                                    />
                                </div>
                            </>
                        }/>
                    </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="• EKS 환경 구축"/>

                    <div className="ml-[10px]">
                        <Toggle summary="필요한 manifest를 chart로 정의하여 Terraform으로 배포" detail={
                            <>
                                명령어를 통해 manifest나 chart를 설치하면 어떤 요소를 누가 수정했는지 파악하기 힘들기 때문에,<br/>
                                GitOps 기반으로 누가 언제 어떤 변경을 적용했는지 기록하기 위해 아래와 같이 구성하였습니다.<br/>
                                <Gap/><Gap/>
                                1. 기본적으로 설치되어야 하며 자주 변하지 않는 인프라 요소(istio, karpenter, argoCD 등)는<br/>
                                <Tab/>Chart value를 override하여 정의한 뒤 Terraform을 통해 배포했습니다.<br/>


                                <ModalImage
                                    src="/img/description/helm-chart.png"
                                    className="h-[280px] ml-[20px]" open={imageOpen}
                                    caption="정의한 custom chart를 Terraform으로 배포하는 절차"
                                />
                                
                                <Gap/>
                                2. 자주 변경되는 차트는 ArgoCD Application으로 정의하여 커밋시에 변경사항이 바로 적용되도록<br/>
                                <Tab/>했습니다. 차트에는 서버 설정을 위해 직접 작성한 manifest도 포함되어있습니다.

                                <ModalImage
                                    src="/img/description/argocd-resource.png"
                                    className="ml-[20px]" open={imageOpen}
                                    caption="리소스를 ArgoCD Application으로 등록한 모습"
                                />

                                <a href="https://github.com/team-xquare/k8s-resource" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <GithubText text="team-xquare/k8s-resource"/>
                                </div>
                                </a>
                            </>
                        }/>
                        <Toggle summary={
                            <>
                                전체 node가 Spot instance인 환경에서 downtime 없는 서버 운영을 위한 전략 수립 <br />
                                PDB와 커스텀한 NTH를 함께 사용하여 99.95%의 가용성 확보
                            </>} detail={
                                <>
                                    <Tab/>Xquare 인프라에서는 프로젝트 증가에 따라 노드를 스케일링할 수 있어야 했고, 학교에서 지원해주는 예산의 한계가 있어 월 60만원 이상의 비용을 사용할 수 없었습니다. 따라서 가격이 저렴하고 인스턴스를 늘리고 줄이기 쉬운 Spot Instance로 모든 노드를 구성하였습니다.<br/>

                                    <Tab/>Spot Instance는 가격 변동으로 인해 불시에 내려갈 수 있는 특성이 있는데, node가 내려갈 때 마다 서버가 10분 이상 정지하는 현상이 발생했습니다. 예측할 수 없는 서버 정지로 인해 사용자들이 불편을 느끼는 상황이 잦았기에 이를 해결하기 위해 아래와 같은 방법을 사용했습니다.<br/>

                                    <Gap/><Gap/>

                                    <Semibold text="Karpenter"/>
                                    
                                    <TextSection text={<>
                                        <Tab/>Karpenter는 ASG(자동 확장 그룹)를 사용할 때 긴 downtime 이 발생하는 문제를 해결하기 위해 도입했습니다. NTH가 cordon 되는 시점에 새로운 노드를 바로 생성할 수 있으며, ASG 볻다 노드 생성 및 등록 시간이 짧아져 downtime을 줄일 수 있습니다.
                                    </>}/>

                                    <Gap/><Gap/>

                                    <Semibold text="Node Termination Handler 커스터마이징"/>
                                    <TextSection text={<>
                                        <Tab/> PDB(Pod Disruption Budget) 설정 후 pod의 복제본(replica) 개수를 2개 이상으로 증가시키면 한 노드가 종료되더라도 downtime 없이 서버를 운영할 수 있습니다. 그러나 pod의 복제본을 2배로 증가시키면 추가적인 노드 비용 부담이 발생해 상황에 부적절합니다.<br/>
                                        <Tab/> node 종료 직전에 replica 개수를 임시적으로 증가시킨 후, 새로운 replica 서버를 생성해 트래픽을 받을 수 있을 때 다시 줄인다면 최소한의 리소스만 사용하면서 문제를 해결할 수 있다는 가설을 세웠습니다. Node Termination Handler의 코드를 커스텀하여 해당 동작을 구현함으로써 가용성을 향상시켰습니다.
                                        <a href="https://github.com/team-xquare/node-termination-handler" target='_blank' rel="noopener noreferrer">
                                        <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                            <GithubText text="team-xquare/node-termination-handler"/>
                                        </div>
                                        </a>
                                    </>}/>

                                    <Gap/><Gap/>

                                    <ModalImage
                                        src="/img/description/uptimia-dashboard.png"
                                        className="h-[280px]" open={imageOpen}
                                        caption="Uptimia를 사용해 측정한 가용성 결과 대시보드"
                                    />

                                    <br/>
                                    9월 한달 간 27개의 Pod에 대해 측정한 결과 가용성이 99.95%로 개선되었다는 것을 확인할 수 있었습니다. (분당 1회씩 health check용 api, url에 요청을 보내 측정)

                                    <a href="https://team-xquare.notion.site/spot-instance-downtime-660ad99c5dd549eb95e2c206f1d21d6d?pvs=4" target='_blank' rel="noopener noreferrer">
                                    <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                        <DocumentText text="자세한 과정에 대한 기술문서"/>
                                    </div>
                                    </a>
                                </>
                            }/>
                        </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="• 모니터링"/><br/>
                    <div className="ml-[10px]">
                        <Toggle summary="Istio를 통해 Service mesh 내부 통신 추적" detail={
                            <>
                                서버 내부끼리 통신할 떄 발생하는 트래픽을 관리하고 로그를 기록하기 위해 Istio를 사용하였습니다. istio-proxy 로그를 통해 pod별 요청 내역을 확인할 수 있어 서버 문제를 디버깅하기 수월했습니다.<br/>
                                kiali dashboard를 사용해 통신 구조, 서버별 평균 응답시간을 쉽게 파악할 수 있도록 했습니다.
                                <ModalImage
                                    src="/img/description/kiali-dashboard.png"
                                    className="h-[280px] mt-[10px]" open={imageOpen}
                                    caption="Istio 통신 로그를 시각화한 kiali dashboard"
                                />
                            </>
                        }/>
                        <Toggle summary="Istio(Envoy) ext auth로 공통 토큰 인증을 위한 middleware 구축" detail={
                            <>
                                <Tab/>xquare에서 공통으로 쓰이는 유저 토큰에 대한 파싱을 수행하기 위해 golang으로 envoy <code>external-auth</code> 서버를 개발했습니다. Authorization 헤더가 포함된 외부 트래픽이 들어오면 proxy에서 검증을 수행하고 유저 Id, role 정보를 담은 헤더를 추가합니다.<br/>
                                <Tab/><code>testing</code> package로 로직에 대한 테스트코드를 작성했습니다.
                                <a href="https://github.com/team-xquare/envoy-middleware" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <GithubText text="team-xquare/envoy-middleware"/>
                                </div>
                                </a>

                                <div className="flex flex-row gap-[10px]">
                                    <ModalImage
                                        src="/img/description/envoy-middleware-file-structure.png"
                                        className="h-[200px]" open={imageOpen}
                                        caption="프로젝트 파일 구조"
                                    />
                                    <ModalImage
                                        src="/img/description/envoy-middleware-code.png"
                                        className="h-[200px]" open={imageOpen}
                                        caption="프로젝트 코드 일부"
                                    />
                                </div>
                            </>
                        }/>
                        <Toggle summary="Loki 사용하여 로그 수집, Prometheus로 매트릭 수집 후 Thanos로 영구 저장" detail={
                            <>
                                <Tab/>Loki를 사용하여 로그를 수집하고 s3 storage에 저장합니다. 등록된 프로젝트를 개발하는 인원은 Oauth로 로그인하여 프로젝트의 로그 대시보드에 접근할 수 있도록 하였습니다.
                                <div className="mt-[10px] mb-[5px]">
                                    <ModalImage
                                        src="/img/description/grafana-loki-dashboard.png"
                                        className="h-[240px]" open={imageOpen}
                                        caption="프로젝트의 로그를 나타내는 grafana 대시보드"
                                    />
                                </div>
                                <Tab/>Prometheus를 통해 CPU, memory 등의 매트릭을 수집하고, thanos로 s3 storage에 영구 저장하여 모니터링합니다. 리소스가 급격하게 많이 사용되는 경우 alertmanager를 통해 slack 알림을 받아 확인하고 서버 상태를 점검합니다.<br/>
                                <div className="mt-[10px] mb-[5px]">
                                    <ModalImage
                                        src="/img/description/grafana-compute-resources.png"
                                        className="h-[220px]" open={imageOpen}
                                        caption="리소스 사용률을 나타내는 Grafana 대시보드"
                                    />
                                </div>
                            </>
                        }/>
                    </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="• IaC"/><br/>
                    <div className="ml-[10px]">
                        <Toggle summary="Terraform을 통해 EKS, S3, RDS 등 인프라 스펙 선언 및 관리" detail={
                            <>
                                <Tab/>Terraform을 사용해 VPC, EKS, S3, RDS, SQS, Elasticcache, IAM, Role, ECR 등을 코드로<br/>
                                선언하여 관리하고 있습니다. state 파일은 Terraform Cloud를 통해 저장합니다.
                                <a href="https://github.com/team-xquare/xquare-infrastructure-global" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <GithubText text="team-xquare/xquare-infrastructure-global"/>
                                </div>
                                </a>
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
                    <Tab/>또, 모니터링을 통해 서버의 상태를 실시간으로 파악하거나, 면밀하게 살펴보고 기록하는 것이
                    중요하다는 것을 느꼈습니다. prometheus, loki로 다양한 정보를 수집하여 누적함으로써 오류가 발생할 경우에
                    빠르게 파악하여 조치할 수 있었습니다.
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
                    <Tab/>앞으로는 기술을 도입하거나 인프라를 변경할 때 그 기술을 완전히 이해하고 영향받는 부분이 없을지 꼼꼼히 살피고 고려해야겠다고 생각했습니다.
                </span>
                </p>
            </div>
            </div>
        </div>
    )
};
