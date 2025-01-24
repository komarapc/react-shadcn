import { setTheme, useSelectTheme } from "@/redux/reducer/theme.reducer";
import { useDispatch, useSelector } from "react-redux";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { Switch } from "./switch";
import { useEffect, useState, useCallback, useMemo } from "react";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector(useSelectTheme);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setChecked(isDarkMode);
    dispatch(setTheme(isDarkMode ? "dark" : "light"));
  }, [theme]);

  const renderIcon = useCallback(() => {
    if (theme === "light") return <IoSunnyOutline />;
    if (theme === "dark") return <IoMoonOutline />;
    if (theme === "system") return <MdOutlineDesktopWindows />;
  }, [theme]);

  const handleCheckedChange = (value: boolean) => {
    setChecked(value);
    dispatch(setTheme(value ? "dark" : "light"));
  };

  const icon = useMemo(() => renderIcon(), [renderIcon]);

  return (
    <div className="flex gap-2 items-center justify-end">
      <Switch
        checked={checked}
        onCheckedChange={(e) => handleCheckedChange(e.valueOf())}
      />
      {icon}
    </div>
  );
}

export function ThemeSwitchNonAuth() {
  return (
    <div className="absolute top-5 right-5">
      <ThemeSwitcher />
    </div>
  );
}
