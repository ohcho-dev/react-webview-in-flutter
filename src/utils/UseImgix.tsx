import Imgix from "react-imgix";

const UseImgix = ({ srcUrl = "" }) => {
  console.log(process.env.REACT_APP_IMGIX_URL + srcUrl);
  return (
    <Imgix
      src={`${process.env.REACT_APP_IMGIX_URL}${srcUrl}?auto=format&q=100&dpr=2`}
      sizes="100vw"
      attributeConfig={{
        src: "data-src",
        srcSet: "data-srcset",
        sizes: "data-sizes",
      }}
      htmlAttributes={{
        src: process.env.REACT_APP_IMGIX_URL + srcUrl + "?auto=compress&q=0", // low quality image here
      }}
    />
  );
};

export default UseImgix;
