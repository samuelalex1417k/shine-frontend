"use client";

import { useState } from "react";
import { useAccessibility } from "./AccessibilityProvider";
import {
  Check,
  EyeOff,
  Zap,
  Eye,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Moon,
  TextCursor,
  BookOpen,
  Accessibility,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CardOption = {
  label: string;
  key: keyof ReturnType<typeof useAccessibility>["state"];
  icon: React.ReactNode;
  values?: any[];
};

const options: CardOption[] = [
  { label: "Contrast", key: "contrast", icon: <Moon size={20} />, values: [1, 2, 3] },
  { label: "Text Size", key: "textSize", icon: <TextCursor size={20} />, values: [1, 2, 3] },
  { label: "Dyslexia Friendly", key: "dyslexia", icon: <BookOpen size={20} /> },
  { label: "Stop Animations", key: "stopAnimations", icon: <Zap size={20} /> },
  { label: "Hide Images", key: "hideImages", icon: <EyeOff size={20} /> },
  { label: "Line Height", key: "lineHeight", icon: <AlignLeft size={20} /> },
  { label: "Cursor Size", key: "cursorBig", icon: <Eye size={20} /> },
  { label: "Text Align", key: "textAlign", icon: <AlignLeft size={20} />, values: ["left", "center", "right"] },
  { label: "Grayscale", key: "grayscale", icon: <Moon size={20} /> },
  { label: "Invert", key: "invert", icon: <Moon size={20} /> },
];

export default function AccessibilityMenu() {
  const { state, setState } = useAccessibility();
  const [open, setOpen] = useState(false);

  const toggleOption = (option: CardOption) => {
    const key = option.key;
    const current = state[key];

    if (option.values) {
      const currentIndex = option.values.indexOf(current);
      let nextValue;

      if (current === null) {
        nextValue = option.values[0]; // start cycle
      } else if (currentIndex === option.values.length - 1) {
        nextValue = null; // turn off after last
      } else {
        nextValue = option.values[currentIndex + 1];
      }

      setState({ [key]: nextValue } as any);
    } else if (typeof current === "boolean") {
      setState({ [key]: !current } as any);
    }
  };

  const isActive = (option: CardOption) => {
    const current = state[option.key];
    if (option.values) return current !== null && option.values.includes(current);
    if (typeof current === "boolean") return current;
    return false;
  };

  const getIndicator = (option: CardOption) => {
    if (!option.values) return null;
    const current = state[option.key];
    const index = option.values.indexOf(current);
    return (
      <div className="indicator">
        {option.values.map((_, i) => (
          <span key={i} className={cn("dot", i === index && "active")}></span>
        ))}
      </div>
    );
  };

  return (
    <div className="accessibility-widget">
      <button className="accessibility-trigger" onClick={() => setOpen(!open)}>
        <Accessibility size={24} />
      </button>

      <div className={cn("accessibility-drawer", open && "open")}>
        <div className="flex justify-between items-center mb-3">
          <h2 className="accessibility-title">Accessibility</h2>
          <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div className="accessibility-grid">
          {options.map(opt => (
            <button
              key={opt.label}
              className={cn("acc-card", isActive(opt) && "active")}
              onClick={() => toggleOption(opt)}
            >
              {opt.icon}
              <span>{opt.label}</span>
              {getIndicator(opt)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}