import LeftSideBar from "../component/common/LeftSideBar";
import RightSideBar from "../component/common/RightSideBar";
import AiFormInput from "../component/make-category/FormInput";
import ProtectedRoute from "../hooks/ProtectedRoute";

const Page = () => {
  return (
    <ProtectedRoute>
    <div className="flex min-h-screen">
      <LeftSideBar />
      <div className=" flex-1 py-10  px-5 sm:px-10 ">
        <AiFormInput />
      </div>
      <RightSideBar />
    </div>
    </ProtectedRoute>
  );
};

export default Page;
