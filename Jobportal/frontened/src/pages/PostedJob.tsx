import { Divider } from "@mantine/core";
import PostedJobComp from "../components/PostedJob.tsx/PostedJobComp";
import PostedJobDes from "../components/PostedJob.tsx/PostedJobDes";

const PostedJob = () => {
  return (
    <div className="min-h-[90vh] px-4 py-6 bg-[#1A1A1A]">
      <Divider size="sm" className="mb-4" />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Fixed Width Left Panel */}
        <div className="w-full lg:w-[350px] flex-shrink-0">
          <PostedJobComp />
        </div>

        {/* Flexible Right Panel */}
        <div className="flex-1">
          <PostedJobDes />
        </div>
      </div>
    </div>
  );
};

export default PostedJob;
