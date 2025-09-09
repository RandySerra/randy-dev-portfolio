// src/Components/FadeInSection/FadeInSection.jsx
import { useEffect, useRef, useState } from "react";
import "./FadeInSection.css";

function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
}

export default FadeInSection;
