import { SignInForm } from "@/widgets/auth/ui";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  );
}
