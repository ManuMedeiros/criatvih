"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { Stack, Input, Button } from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    console.log(user?.user?.accessToken, 'user')

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);

    if (error) {
      alert("erro ao logar, tente novamente");
      return;
    } else {
      setTimeout(() => {
        localStorage.setItem("token", user?.user?.accessToken);
      }, 1000);
    }
  };

  return (
    <Stack alignItems="center" p={55}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Stack w={300}>
          <Input
            backgroundColor="#CD90FE"
            padding={2}
            borderRadius={10}
            border="none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            backgroundColor="#CD90FE"
            padding={2}
            borderRadius={10}
            border="none"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            mt={10}
            backgroundColor="blue.600"
            color="#FFF"
            height={0}
            padding="13px"
            borderRadius={20}
            type="submit"
          >
            Entrar
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
