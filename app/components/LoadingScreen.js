"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Also hide loading when page is fully loaded
    window.addEventListener("load", () => {
      setIsLoading(false);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", () => {
        setIsLoading(false);
      });
    };
  }, []);

  return (
    <div className={`loader-container ${!isLoading ? "hidden" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}
