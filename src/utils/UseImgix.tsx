import Imgix from "react-imgix";

interface UseImgixProps {
  srcUrl: string;
  alt?: string;
  style?: object;
}
const UseImgix: React.FC<UseImgixProps> = props => {
  const { srcUrl, alt, style } = props;

  return (
    <>
      {srcUrl && (
        <Imgix
          src={`${process.env.REACT_APP_IMGIX_URL}${srcUrl}?auto=format&q=100&dpr=2`}
          sizes="100vw"
          attributeConfig={{
            src: "data-src",
            srcSet: "data-srcset",
            sizes: "data-sizes",
          }}
          imgixParams={{ w: 100 }}
          htmlAttributes={{
            alt: alt,
            style: style,
            src: process.env.REACT_APP_IMGIX_URL + srcUrl + "?auto=compress&q=0&dpr=0", // low quality image here
          }}
        />
      )}
    </>
  );
};

export default UseImgix;
