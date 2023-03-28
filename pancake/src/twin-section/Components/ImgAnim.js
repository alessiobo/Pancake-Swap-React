function ImgAnim({ src, alt, delay }) {
    return (
      <img
        src={src}
        className="img-anim"
        style={{ animationDelay: delay }}
        alt={alt}
      />
    );
  }

  export default ImgAnim;