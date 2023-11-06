import { GithubText } from "../../components/IconText";
import { DocumentText } from "../../components/IconText";
import { ProjectBanner } from "../../components/ProjectBanner";
import { Toggle } from "../../components/Toggle";
import { ModalImage } from "../../components/ModalImage";
import { Bold, Semibold, Tab, Gap, TextSection } from "../../components/Text";

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
                        <Toggle summary={<>
                            GitHub Actions 기반 인프라 구성 자동화 및 ArgoCD 배포 파이프라인 제공
                        </>} detail={
                            <>
                                <Tab/>다른 동아리의 프로젝트를 <b>인프라에 추가하고 지속적으로 배포하기 위해 드는 공수를 최소화</b>하기 위해 GitHub Actions 기반 파이프라인을 구현하였습니다. ArgoCD, Terraform 등의 툴과 Shell Script, Go와 같은 다양한 언어를 사용하여 구조를 설계하고 구축했습니다.
                                <Gap/>
                                <ModalImage src="/img/description/deployment-action.png" className="h-[150px]" open={imageOpen}/>
                                <Gap/><Gap/>
                            </>
                        }/>
                        <Toggle summary="Golang을 사용해 배포 access key 발급 서버 개발" detail={
                            <>
                                <Tab/>Action 실행을 위한 Access key를 발급, 인증하고 허가된 프로젝트 정보를 저장하는 백오피스 Restapi 서버를 개발했습니다.
                            </>
                        }/>
                    </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="• EKS 환경 구축"/>

                    <div className="ml-[10px]">
                        <Toggle summary="필요한 manifest를 chart로 정의하여 Terraform, ArgoCD로 배포" detail={
                            <>
                                명령어를 통해 manifest나 chart를 설치하면 어떤 요소를 누가 수정했는지 파악하기 힘듭니다.<br/>
                                따라서 GitOps 기반으로 인프라에 누가 언제 어떤 변경을 적용했는지 기록하기 위해 필요한 manifest를 chart로 정의한 뒤 Terraform, ArgoCD를 사용해 배포하였습니다.<br/>
                                <Gap/><Gap/>

                                <a href="https://github.com/team-xquare/k8s-resource" target='_blank' rel="noopener noreferrer">
                                <div className="bg-white border-solid border-[1px] drop-shadow-sm bg-white border-lightgray px-[10px] my-[5px] mb-[15px] h-[29px] w-fit rounded ">
                                    <GithubText text="team-xquare/k8s-resource"/>
                                </div>
                                </a>
                            </>
                        }/>
                        <Toggle summary={
                            <>
                                Spot instance node에서 downtime 없는 서버 운영을 위해 PDB와 커스텀한 NTH를 함께 사용<br/>
                                (가용성 2%pt 개선, 약 97.9% → 99.95%)
                            </>} detail={
                                <>
                                    <Tab/>Xquare 인프라에서는 프로젝트 증가에 따라 노드를 스케일 아웃할 수 있어야 했고, 학교에서 지원해주는 예산의 한계가 있었기에 가격이 저렴한 <b>Spot Instance로 모든 노드를 구성</b>하였습니다.<br/>

                                    <Tab/>가격 변동으로 인해 불시에 내려갈 수 있는 Spot Instance의 특성 때문에 서버가 비주기적으로 <b>10분 이상 정지하는 현상</b>이 발생했습니다. 예측할 수 없는 서버 정지로 인해 사용자들이 불편을 느끼는 상황이 잦았습니다.<br/>

                                    <ModalImage
                                        src="/img/description/uptimia-dashboard.png"
                                        className="h-[190px]" open={imageOpen}
                                        caption="Uptimia를 사용해 측정한 가용성 결과 대시보드"
                                    />

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
                        <Toggle summary="Istio로 내부 통신 추적, Envoy ext auth로 공통 토큰 인증을 위한 middleware 개발" detail={
                            <>
                                서버 내부끼리 통신할 때 발생하는 트래픽을 관리하고 로그로 기록하기 위해 Istio를 사용하였습니다. istio-proxy 로그를 통해 pod별 요청 내역을 확인할 수 있어 서버 문제를 디버깅하기 수월했습니다.<br/>
                                kiali dashboard를 사용해 통신 구조, 서버별 평균 응답시간을 쉽게 파악할 수 있도록 했습니다.
                                <ModalImage
                                    src="/img/description/kiali-dashboard.png"
                                    className="h-[150px] mt-[10px]" open={imageOpen}
                                    caption="Istio 통신 로그를 시각화한 kiali dashboard"
                                />
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
                        <Toggle summary="Loki 사용하여 로그 수집, Prometheus(+Thanos)로 매트릭 수집" detail={
                            <>
                                <Tab/>Loki를 사용하여 로그를 수집하고 s3 storage에 저장합니다. 등록된 프로젝트를 개발하는 인원은 Oauth로 로그인하여 프로젝트의 로그 대시보드에 접근할 수 있도록 하였습니다.
                                <Gap/>
                                <Tab/>Prometheus를 통해 CPU, memory 등의 매트릭을 수집하고, thanos로 s3 storage에 영구 저장하여 모니터링합니다. 리소스가 급격하게 많이 사용되는 경우 alertmanager를 통해 slack 알림을 받아 확인하고 서버 상태를 점검합니다.<br/>

                                <div className="flex flex-row gap-[10px]">
                                    <div className="mt-[10px] mb-[5px]">
                                        <ModalImage
                                            src="/img/description/grafana-loki-dashboard.png"
                                            className="h-[160px]" open={imageOpen}
                                            caption="프로젝트의 로그를 나타내는 grafana 대시보드"
                                        />
                                    </div>
                                    <div className="mt-[10px] mb-[5px]">
                                        <ModalImage
                                            src="/img/description/grafana-compute-resources.png"
                                            className="h-[160px]" open={imageOpen}
                                            caption="리소스 사용률을 나타내는 Grafana 대시보드"
                                        />
                                    </div>
                                </div>
                            </>
                        }/>
                    </div>
                    </p>
                    <p className="relative self-stretch">
                    <Bold text="• IaC"/><br/>
                    <div className="ml-[10px]">
                        <Toggle summary="Terraform을 통해 EKS, S3, RDS, IAM role 등 인프라 스펙 선언 및 관리" detail={
                            <>
                                <Tab/>Terraform을 사용해 VPC, EKS, S3, RDS, SQS, ElasticCache, IAM Role, ECR 등을 코드로<br/>
                                선언하여 관리하고 있습니다. state 파일은 Terraform Cloud를 통해 저장합니다.<br/>
                                필요한 리소스를 모듈화하여 중복 코드를 줄였습니다.
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
                    중요하다는 것을 느꼈습니다. Prometheus, loki로 다양한 정보를 수집하여 누적함으로써 오류가 발생할 경우에
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
                    <Tab/>앞으로는 기술을 도입하거나 인프라를 변경할 때 그 기술을 완전히 이해하고, 영향받는 부분이 없을지 꼼꼼히 살피고 고려해야겠다고 생각했습니다.
                </span>
                </p>
            </div>
            </div>
        </div>
    )
};
