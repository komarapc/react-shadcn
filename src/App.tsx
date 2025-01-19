import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
const router = createRouter({ routeTree });
import { HelmetProvider } from "react-helmet-async";
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ReduxProvider>
    </>
  );
}
