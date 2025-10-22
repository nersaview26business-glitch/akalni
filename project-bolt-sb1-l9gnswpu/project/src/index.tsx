import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AgentNoAgent } from "./screens/AgentNoAgent";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AgentNoAgent />
  </StrictMode>,
);
