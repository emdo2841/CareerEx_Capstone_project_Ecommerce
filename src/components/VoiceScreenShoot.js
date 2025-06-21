import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const VoiceScreenshot = ({ triggerKeyword = "take screenshot" }) => {
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = async (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();
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

  const stripUnsupportedColors = () => {
    const allElements = document.querySelectorAll("*");

    allElements.forEach((el) => {
      const computed = window.getComputedStyle(el);

      // Force override inline if "oklch" is found in computed styles
      if (computed.color.includes("oklch")) {
        el.style.setProperty("color", "#000", "important");
      }

      if (computed.backgroundColor.includes("oklch")) {
        el.style.setProperty("background-color", "#fff", "important");
      }

      if (computed.borderColor && computed.borderColor.includes("oklch")) {
        el.style.setProperty("border-color", "#ccc", "important");
      }
    });
  };

  const takeScreenshot = async () => {
    const element = document.body;
    try {
      stripUnsupportedColors(); // Fix oklch before rendering
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = "screenshot.png";
      link.click();
    } catch (err) {
      console.error("Screenshot failed", err);
    }
  };

  return null;
};

export default VoiceScreenshot;
