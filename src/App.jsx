import "./App.css";
import Navbar from "./Nav";
import Hero from "./Hero";
import UrlShortner from "./UrlShortner";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        <UrlShortner />
        

        <section aria-labelledby="statistics-heading">
          <h2 id="statistics-heading">Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div>
            <article>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>
            <article>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>
            <article>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="boost-heading">
          <h2 id="boost-heading">Boost your links today</h2>
          <button type="button">Get Started</button>
        </section>
      </main>

      <footer>
        <nav aria-label="Footer navigation">
          <section>
            <h2>Features</h2>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </section>
          <section>
            <h2>Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </section>
          <section>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </section>
        </nav>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
