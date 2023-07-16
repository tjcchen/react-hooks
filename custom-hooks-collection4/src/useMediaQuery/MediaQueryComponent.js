import useMediaQuery from "./useMediaQuery";

const MediaQueryComponent = () => {
  const isLarge = useMediaQuery("(min-width: 600px)");

  return <div>Large: {isLarge.toString()}</div>;
};

export default MediaQueryComponent;
