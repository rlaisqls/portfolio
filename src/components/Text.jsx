
export const Bold = ({text}) => {
    return (<span className="font-bold">{text}</span>);
}

export const Semibold = ({text}) => {
    return (<><span className="font-semibold">{text}</span><br/></>);
}

export const Tab = () => {
    return (<>&nbsp;</>);
}

export const Gap = () => {
    return (<div className="h-[5px]"/>);
}

export const TextSection = ({text}) => {
    return (
        <div className="mb-[10px] ml-[15px]">
            {text}
        </div>
    );
}