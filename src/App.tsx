import { BrowserRouter } from "react-router";
import Router from "./routes/Router"
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProjects } from "./utils/strapi";

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["projects"],
      queryFn: getProjects,
    });
  }, [queryClient]);
  
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App
