import { useMemo } from "react";
import { useMatches } from "@remix-run/react";

export function useAuth() {
  const matches = useMatches();
  const isAuthenticated = useMemo(() => {
    return matches.find((m) => m.pathname !== "/");
  }, [matches]);

  return { isAuthenticated };
}
