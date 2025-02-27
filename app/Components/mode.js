"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Mode = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Button onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")} >
      {currentTheme === "light" ? <Sun width={24} /> : <Moon width={24} />}
    </Button>
  );
};

export default Mode;
