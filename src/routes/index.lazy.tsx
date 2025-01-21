import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DefaultDashboard from "@/components/view/dashboard/default-dashboard";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <DefaultDashboard>
        <Card>
          <CardHeader>
            <CardTitle>Blank Card</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 items-center">
            <Button onClick={() => setCount((val) => val + 1)}>
              Click me {count}
            </Button>
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"success"}>Success</Button>
            <Button variant={"warning"}>Warning</Button>
            <Button variant={"info"}>Info</Button>
            <Button variant={"destructive"}>Destructive</Button>
          </CardContent>
        </Card>
      </DefaultDashboard>
    </>
  );
}
