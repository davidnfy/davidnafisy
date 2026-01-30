"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);

    const onLoad = () => setIsLoading(false);
    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className={`loader-container ${!isLoading ? "hidden" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}
