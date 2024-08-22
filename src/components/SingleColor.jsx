import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Text copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy text");
        console.error("Failed to copy text: ", error);
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};
export default SingleColor;
