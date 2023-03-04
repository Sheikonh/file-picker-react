import { PreviewProps } from "../types/PreviewProps";

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
    return (
        <>
            <img src={props.filePreview} />
        </>
    );
};

export default Preview;