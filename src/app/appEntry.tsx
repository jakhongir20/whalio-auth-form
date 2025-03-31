import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "@/app/providers";
import { AppRouter } from "@/app/routes";
import "@/app/styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Providers>
      <AppRouter/>
    </Providers>
  </StrictMode>,
);
