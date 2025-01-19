import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { useSelectTheme } from "@/redux/reducer/theme.reducer";
import GlobalNotFound from "@/components/view/global-not-found";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: React.lazy(
    () => import("@/components/view/global-not-found"),
  ),
});

function RootComponent() {
  const theme = useSelector(useSelectTheme);
  React.useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme: string) => {
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      applyTheme(systemTheme);
    } else {
      applyTheme(theme);
    }
  }, [theme]);
  return (
    <React.Fragment>
      <div className="font-geist bg-background text-foreground">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
