import { Frown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "@tanstack/react-router";

export default function GlobalNotFound() {
  const router = useRouter();
  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <div className="container mx-auto my-auto p-5 text-center">
        <Card className="bg-transparent border-none">
          <CardContent className=" text-center p-5 flex flex-col items-center justify-center gap-4">
            <Frown size={64} />
            <div>
              <h1 className="text-2xl font-bold">404 - Not Found</h1>
              <p className="text-muted-foreground">
                The page you are looking for does not exist.
              </p>
            </div>
            <Button onClick={() => router.navigate({ to: "/" })}>
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
