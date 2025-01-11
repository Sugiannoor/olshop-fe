import { Button, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useLogin } from "../api/login";
import { IconX } from "@tabler/icons-react";

export const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const loginMutation = useLogin();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginMutation.mutateAsync(form.values, {
      onError: ({ response }) => {
        if (response?.data.errors) {
          form.setErrors(response.data.errors);
        } else {
          notifications.show({
            message: response?.data.message,
            color: "red",
            icon: <IconX />,
          });
        }
      },
      onSuccess: () => {
        window.location.reload();
      },
    });
  }
  return (
    <Paper
      radius={20}
      className="w-[100%] lg:w-[50%] mt-20 lg:mt-10 xl:w-[40%] px-10 p-4 xl:p-36 xl"
    >
      <img
        src="/vite.svg"
        alt="olshop"
        loading="lazy"
        className="w-40 h-20 m-auto"
      />
      <div className="text-center mt-5 font-normal text-gray-500 text-sm xl:text-md">
        Selamat Datang di Aplikasi Olshop
        <br /> Junior Web Developer
      </div>
      <div className="text-center mt-8 mb-3 font-bold text-lg xl:text-2xl">
        Login dengan akun anda
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          type="email"
          placeholder="Email Anda"
          size="md"
          required
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Kata Sandi"
          placeholder="Kata Sandi Anda"
          mt="md"
          size="md"
          required
          {...form.getInputProps("password")}
        />
        <Button
          fullWidth
          mt="xl"
          radius={"md"}
          type="submit"
          size="md"
          loading={loginMutation.isLoading}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};
