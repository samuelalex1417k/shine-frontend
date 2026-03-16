"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type AccessibilityState = {
  contrast: 1 | 2 | 3;
  textSize: 1 | 2 | 3;
  dyslexia: boolean;
  stopAnimations: boolean;
  hideImages: boolean;
  lineHeight: boolean;
  cursorBig: boolean;
  textAlign: "left" | "center" | "right";
  grayscale: boolean;
  invert: boolean;
  readingGuide: boolean;
};

type AccessibilityContextType = {
  state: AccessibilityState;
  setState: (newState: Partial<AccessibilityState>) => void;
};

const defaultState: AccessibilityState = {
  contrast: 1,
  textSize: 1,
  dyslexia: false,
  stopAnimations: false,
  hideImages: false,
  lineHeight: false,
  cursorBig: false,
  textAlign: "left",
  grayscale: false,
  invert: false,
  readingGuide: false,
};

const AccessibilityContext = createContext<AccessibilityContextType>({
  state: defaultState,
  setState: () => {},
});

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [state, setInternalState] = useState<AccessibilityState>(defaultState);

  // Load saved state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("accessibilityState");
    if (saved) {
      setInternalState(JSON.parse(saved));
    }
  }, []);

  // Apply body classes and persist state
  useEffect(() => {
    localStorage.setItem("accessibilityState", JSON.stringify(state));

    const body = document.body;

    // Remove all classes first
    body.classList.remove(
      "acc-contrast-1","acc-contrast-2","acc-contrast-3",
      "acc-text-1","acc-text-2","acc-text-3",
      "acc-dyslexia","acc-stop-animations","acc-hide-images",
      "acc-line-height","acc-cursor-big",
      "acc-align-left","acc-align-center","acc-align-right",
      "acc-grayscale","acc-invert","acc-reading-guide"
    );

    // Apply new classes
    body.classList.add(`acc-contrast-${state.contrast}`);
    body.classList.add(`acc-text-${state.textSize}`);
    if(state.dyslexia) body.classList.add("acc-dyslexia");
    if(state.stopAnimations) body.classList.add("acc-stop-animations");
    if(state.hideImages) body.classList.add("acc-hide-images");
    if(state.lineHeight) body.classList.add("acc-line-height");
    if(state.cursorBig) body.classList.add("acc-cursor-big");
    body.classList.add(`acc-align-${state.textAlign}`);
    if(state.grayscale) body.classList.add("acc-grayscale");
    if(state.invert) body.classList.add("acc-invert");
    if(state.readingGuide) body.classList.add("acc-reading-guide");
  }, [state]);

  const setState = (newState: Partial<AccessibilityState>) => {
    setInternalState(prev => ({ ...prev, ...newState }));
  };

  return (
    <AccessibilityContext.Provider value={{ state, setState }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);