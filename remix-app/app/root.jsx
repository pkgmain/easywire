import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import TheDesktopNav from "~/components/TheDesktopNav";
import TheMobileNav, { TheMobileNavContext } from "~/components/TheMobileNav";
import SearchBar from "~/components/SearchBar";
import { useState } from "react";
import { useAuth } from "~/hooks/auth";

export const links = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
});

export default function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { isAuthenticated } = useAuth();

  return (
    <html lang="en"
          className={`h-full ${isAuthenticated ? "bg-gray-100" : "bg-gradient-to-tr from-gray-100 to-cyan-600"}`}>
    <head>
      <Meta />

      <title>easywire - Remix</title>

      <Links />
    </head>

    <body className="h-full">
    <TheMobileNavContext.Provider value={{ show: showMobileNav, setShow: setShowMobileNav }}>
      <TheDesktopNav />
      <TheMobileNav />

      <div className="flex flex-col flex-1 lg:pl-64">
        {isAuthenticated &&   <SearchBar />}
        <main className={`flex-1 ${isAuthenticated && "pb-8"}`}>
          <Outlet />
        </main>
      </div>
    </TheMobileNavContext.Provider>


    <ScrollRestoration />

    <Scripts />

    <LiveReload />
    </body>
    </html>
  );
}
