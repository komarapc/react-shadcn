import ForgotPassword from "@/components/view/auth/forgot-password";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/(auth)/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <ForgotPassword />
    </>
  );
}
