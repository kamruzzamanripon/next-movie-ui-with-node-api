import AiFormInput from "../component/ai-make-movie/AiFormInput";
import LeftSideBar from "../component/common/LeftSideBar";
import RightSideBar from "../component/common/RightSideBar";

const Page = () => {
    return (
        <div className="flex min-h-screen">
        <LeftSideBar />
        <div className=" flex-1 py-10  px-5 sm:px-10 ">
         <AiFormInput />
        </div>
        <RightSideBar />
        </div>
    );
};

export default Page;