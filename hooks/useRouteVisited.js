import { useContext, useEffect } from "react";
import { AppContext } from "../pages/_app";

export const useRouteVisited = (url) => {
  const [contextValue, setContextValue] = useContext(AppContext);

  useEffect(() => {
    return () => {
      if (!contextValue.routesVisited.includes(url)) {
        setContextValue((prev) => ({
          ...prev,
          routesVisited: [...prev.routesVisited, url],
        }));
      }
    };
  }, []);

  const isVisited = contextValue.routesVisited.includes(url);

  return isVisited;
};
