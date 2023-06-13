import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { createRoot } from "react-dom/client";
import "../css/app.css";

const el = document.getElementById("app");
el.style.height = "100%";
createRoot(el).render(
  <InertiaApp
    // Pass props from the server down to the client app
    initialPage={JSON.parse(el.dataset.page)}
    // Dynamically load the required page component
    resolveComponent={(name) => {
      return import(`./pages/${name}`).then((module) => module.default);
    }}
    initialComponent={false}
  />
);
