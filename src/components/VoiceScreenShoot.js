import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const VoiceScreenshot = ({ triggerKeyword = "take screenshot" }) => {
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = async (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      console.log("Voice Command:", transcript);
      
      if (transcript.includes(triggerKeyword.toLowerCase())) {
        takeScreenshot();
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, [triggerKeyword]);

  const takeScreenshot = async () => {
    const element = document.body; // Capture full screen; or use a specific ref
    try {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");

      // Optionally download image
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "screenshot.png";
      link.click();

      // Or just display it:
      // const newTab = window.open();
      // newTab.document.body.innerHTML = `<img src="${imgData}" alt="Screenshot" />`;
    } catch (err) {
      console.error("Screenshot failed", err);
    }
  };

  return null; // This component only listens and triggers
};

export default VoiceScreenshot;
