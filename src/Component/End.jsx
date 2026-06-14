import { useEffect } from "react";
import "./End.css";

const End = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    const el = document.querySelector(".end");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="end animate-on-scroll">
      <p>Copyright © 2024 Compagnie Poly R</p>
      <a
        href="https://www.thecoolaxolotl.com"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
};

export default End;
