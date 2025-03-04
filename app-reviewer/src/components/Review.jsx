import MarkDownPreview from "@uiw/react-markdown-preview";
import PropTypes from "prop-types";
import Loader from "./Loader";

const Review = ({ review, isGenerating }) => {
  return (
    <div className="h-full w-6/12 relative overflow-scroll">
      {isGenerating ? (
        <Loader />
      ) : (
        <MarkDownPreview
          style={{ fontSize: "30px", minHeight: "100vh", padding: "20px" }}
          source={JSON.stringify(review)}
        >
          {/* {typeof review === "string" ? review : ""} */}
        </MarkDownPreview>
      )}
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.string.isRequired,
  isGenerating: PropTypes.bool.isRequired,
};

export default Review;
