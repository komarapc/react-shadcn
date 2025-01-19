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
import { ThemeSwitchNonAuth } from "@/components/ui/theme-switcher";
import { useRouter } from "@tanstack/react-router";

export default function ForgotPassword() {
  const router = useRouter();
  return (
    <>
      <ThemeSwitchNonAuth />
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Forgot Password</CardTitle>
            <CardDescription>
              We will send you an email with instructions on how to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="email" placeholder="your-email@mail.com" />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button>Reset Password</Button>
            <Button
              variant="ghost"
              onClick={() => router.navigate({ to: "/login" })}
            >
              Back to Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
