import "./titleNFT.css";
function TitleNFT({ title, subTitle }) {
  return (
    <section className="titleNFT-container">
      <div className="titleNFT-content">
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default TitleNFT;
