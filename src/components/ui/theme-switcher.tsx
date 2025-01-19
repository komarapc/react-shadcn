import { setTheme, useSelectTheme } from "@/redux/reducer/theme.reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { IoMoonOutline, IoSunny, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDesktopWindows } from "react-icons/md";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <IoSunny />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => dispatch(setTheme("light"))}>
            <IoSunnyOutline />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme("dark"))}>
            <IoMoonOutline />
            Dark
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => dispatch(setTheme("system"))}>
            <MdOutlineDesktopWindows />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
