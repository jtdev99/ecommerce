import ReactLoading from "react-loading";

import { TLoadingProps } from "../../types";

const Loading = ({
    message = "Đang tải dữ liệu",
    type = "spin",
    color = "#2563eb",
}: TLoadingProps) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <ReactLoading type={type} color={color} />
            <p>{message}</p>
        </div>
    );
};

export default Loading;
