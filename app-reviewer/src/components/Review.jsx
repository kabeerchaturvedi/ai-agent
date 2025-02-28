import MarkDownPreview from "@uiw/react-markdown-preview";

const Review = () => {
  return (
    <div className="h-full w-6/12 relative">
      <MarkDownPreview source="# Hello World" style={{ fontSize: "30px", height: "100vh" }} />
    </div>
  );
};
export default Review;
