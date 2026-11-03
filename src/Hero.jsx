import "./Hero.css";
import illustrationWorking from "../images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1>
          More than just
          shorter links
        </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button type="button" className="hero-button">
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <img src={illustrationWorking} alt="" />
      </div>
    </section>
  );
}
