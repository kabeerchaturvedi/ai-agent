import MarkDownPreview from "@uiw/react-markdown-preview";
import PropTypes from "prop-types";
import Loader from "./Loader";

const Review = ({ review, isGenerating }) => {
  return (
    <div className="h-full w-6/12 relative">
      {isGenerating ? <Loader /> : <MarkDownPreview source={review} style={{ fontSize: "30px", height: "100vh" }} />}
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.string.isRequired,
  isGenerating: PropTypes.bool.isRequired,
};
export default Review;
