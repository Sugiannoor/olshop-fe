import { Helmet } from "react-helmet-async";
import { LoginForm } from "../components/LoginForm";
import { Center } from "@mantine/core";

export const Login = () => {
  return (
    <>
      <Center>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login Page" />
        </Helmet>
        <LoginForm />
      </Center>
    </>
  );
};
