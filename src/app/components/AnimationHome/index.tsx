"use client";

import React, { useEffect } from "react";
import "./styles.css";

const AnimationHome = () => {
  useEffect(() => {
    import("particles.js").then((module) => {
      if (typeof window !== "undefined") {
        const particlesJS = module.particlesJS;
        particlesJS("particles-js", {
          particles: {
            number: { value: 100 },
            size: { value: 3 }
          }
        });
      }
    }).catch((err) => console.error("Erro ao carregar partículas:", err));
  }, []);

  return <div id="particles-js" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default AnimationHome;
