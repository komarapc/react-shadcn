import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/(auth)/reset-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="absolute top-5 right-5">
          <ThemeSwitcher />
        </div>
        <div className="container max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
                Create a new password for your account
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your-email@mail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Reset Password</Button>
              <Button className="w-full" variant={"ghost"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
