"use client";

import { useEffect, useState } from "react";

type CommandShortcut = {
  label: string;
  modifier: "meta" | "ctrl";
};

function detectCommandShortcut(): CommandShortcut {
  const navigatorWithUserAgentData = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform =
    navigatorWithUserAgentData.userAgentData?.platform ||
    navigator.platform ||
    navigator.userAgent ||
    "";

  return /Mac|iPhone|iPad|iPod/i.test(platform)
    ? { label: "⌘K", modifier: "meta" }
    : { label: "Ctrl+K", modifier: "ctrl" };
}

export function useCommandShortcut() {
  const [shortcut, setShortcut] = useState<CommandShortcut>({
    label: "Ctrl+K",
    modifier: "ctrl",
  });

  useEffect(() => setShortcut(detectCommandShortcut()), []);
  return shortcut;
}
