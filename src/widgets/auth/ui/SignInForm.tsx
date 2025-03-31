import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Icon, Input, Link, PasswordInput } from "@/shared/ui";
import { useLogin } from "@/features/auth";
import { AuthForm } from "@/widgets/auth";
import { cn } from "@/shared/utils";

interface Props {
  className?: string;
}

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const SignInForm: FC<Props> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending, error } = useLogin();

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <AuthForm
      className={cn(className)}
      title="Welcome Back"
      footer={
        <div className="text-center text-sm">
          {"Don't have an account?"}
          <Link href="/auth/register"> Start the quiz</Link>
        </div>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            icon={<Icon name="email" width={22} />}
            error={errors.email?.message}
            {...register("email")}
            className={errors.email ? "bg-red-50" : ""}
          />
        </div>

        <div>
          <PasswordInput
            id="password"
            placeholder="Your password"
            error={errors.password?.message}
            {...register("password")}
            className={errors.password ? "bg-red-50" : ""}
          />
        </div>

        <div className="flex justify-end">
          <Link href="/auth/reset-password" className="text-sm">
            Forgot password?
          </Link>
        </div>

        {!!error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
            Invalid email or password
          </div>
        )}

        <Button type="submit" isLoading={isPending} className="w-full">
          Sign In
        </Button>
      </form>
    </AuthForm>
  );
};
