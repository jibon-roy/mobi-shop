// src/components/MainLoading.jsx
import { useState, useEffect } from "react";
import Loading from "./Loading";

export const MainLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    const updateDocumentLoadingProgress = () => {
      if (document.readyState === "complete") {
        setProgress(100);
        setIsLoading(false);
      } else if (document.readyState === "interactive") {
        setProgress(75);
      } else if (document.readyState === "loading") {
        setProgress(50);
      }
    };

    const handleLoad = () => {
      updateDocumentLoadingProgress();
    };

    updateDocumentLoadingProgress();
    window.addEventListener("scroll", updateProgress);
    document.addEventListener(
      "readystatechange",
      updateDocumentLoadingProgress
    );
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      document.removeEventListener(
        "readystatechange",
        updateDocumentLoadingProgress
      );
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <>{isLoading ? <Loading progress={progress} /> : children}</>;
};
