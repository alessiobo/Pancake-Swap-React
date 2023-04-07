import notFound from "./images/404.png";

function NotFound() {
  const imgStyle = {
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return <img style={imgStyle} src={notFound} alt="404" />;
}

export default NotFound;
