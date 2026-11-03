import "./UrlShortner.css";
import { useEffect, useState } from "react";

export default function UrlShortner() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("urlHistory")) || [];
  } catch {
    return [];
  }
});
    useEffect(() =>{
        localStorage.setItem("urlHistory", JSON.stringify(history));
    }, [history])
  

  async function shortenUrl() {
    setError("");
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    let validUrl;

    try {
      const inputUrl = /^https?:\/\//i.test(url.trim())
        ? url.trim()
        : `https://${url.trim()}`;

      validUrl = new URL(inputUrl);

      if (
        !["http:", "https:"].includes(validUrl.protocol) ||
        !validUrl.hostname.includes(".")
      ) {
        throw new Error("Invalid URL");
      }
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://shrtr.top/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: validUrl.href,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || data.title || "Unable to shorten this URL.",
        );
      }

      if (data.short_url) {
        setHistory((prevHistory) => [
          ...prevHistory,
          {
            
            shortUrl: data.short_url,
          },
        ]);
      } else {
        setError("The API did not return a short URL.");
      }
    } catch (err) {
      console.error("Shortening failed:", err);
      setError("Request failed. Check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="url-container" aria-label="Shorten a link">
      <div className="url-input-container">
        <input
          type="text"
          className="url-input"
          placeholder="Shorten a link here..."
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />

        <button className="shorten-btn" onClick={shortenUrl} disabled={loading}>
          {loading ? "Shortening..." : "Shorten It!"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {history.map((item, index) => (
        <div className="result" key={`${item.shortUrl}-${index}`}>
          <a href={item.shortUrl} target="_blank" rel="noreferrer">
            {item.shortUrl}
          </a>

          <button onClick={() => navigator.clipboard.writeText(item.shortUrl)}>
            Copy
          </button>
        </div>
      ))}
    </section>
  );
}
