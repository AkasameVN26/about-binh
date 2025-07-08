import { useEffect, useState, useRef } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        containerRef.current.style.transform = `translate(${x * 15}px, ${
          y * 15
        }px)`;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 4000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
        animationDuration: Math.random() * 5 + 3,
      });
    }
    setStars(newStars);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-transform duration-500 ease-out"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};