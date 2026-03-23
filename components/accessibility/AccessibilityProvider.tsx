"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type AccessibilityState = {
  contrast: 0 | 1 | 2 | 3;
  textSize: 0 | 1 | 2 | 3;
  dyslexia: boolean;
  stopAnimations: boolean;
  hideImages: boolean;
  lineHeight: boolean;
  cursorBig: boolean;
  textAlign: "none" | "left" | "center" | "right";
  grayscale: boolean;
  invert: boolean;
  readingGuide: boolean;
};

type AccessibilityContextType = {
  state: AccessibilityState;
  setState: (newState: Partial<AccessibilityState>) => void;
};

const defaultState: AccessibilityState = {
  contrast: 0,
  textSize: 0,
  dyslexia: false,
  stopAnimations: false,
  hideImages: false,
  lineHeight: false,
  cursorBig: false,
  textAlign: "none",
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

    const contentArea = document.querySelector('.content-area') as HTMLElement;
    if (!contentArea) return;

    // Remove all classes first
    contentArea.classList.remove(
      "acc-contrast-1","acc-contrast-2","acc-contrast-3",
      "acc-text-1","acc-text-2","acc-text-3",
      "acc-dyslexia","acc-stop-animations","acc-hide-images",
      "acc-line-height","acc-cursor-big",
      "acc-align-left","acc-align-center","acc-align-right",
      "acc-grayscale","acc-invert","acc-reading-guide"
    );

    // Apply new classes
    contentArea.classList.add(`acc-contrast-${state.contrast}`);
    contentArea.classList.add(`acc-text-${state.textSize}`);
    if(state.dyslexia) contentArea.classList.add("acc-dyslexia");
    if(state.stopAnimations) contentArea.classList.add("acc-stop-animations");
    if(state.hideImages) contentArea.classList.add("acc-hide-images");
    if(state.lineHeight) contentArea.classList.add("acc-line-height");
    if(state.cursorBig) contentArea.classList.add("acc-cursor-big");
    contentArea.classList.add(`acc-align-${state.textAlign}`);
    if(state.grayscale) contentArea.classList.add("acc-grayscale");
    if(state.invert) contentArea.classList.add("acc-invert");
    if(state.readingGuide) contentArea.classList.add("acc-reading-guide");
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