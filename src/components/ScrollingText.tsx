import "../scrollingText.css";

const ScrollingText = () => {
  return (
    <>
      <section className="a-section">
        <div className="a-section-marquee-box">
          <h2 className="marquee-text">fake products - real prices •</h2>
          <h2 className="marquee-text">fake products - real prices •</h2>
        </div>
      </section>

      <section className="b-section">
        <div className="b-section-marquee-box">
          <h2 className="marquee-text">fake products - real prices •</h2>
          <h2 className="marquee-text">fake products - real prices •</h2>
        </div>
      </section>
    </>
  );
};

export default ScrollingText;
