import AuthLogin from "@/components/view/auth/login";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AuthLogin />
    </>
  );
}
