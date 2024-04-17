import React from "react";
import Head from "next/head";

import Link from "next/link";
import Logo from "@/components/Logo";
import LoginRegisterLayout from "@/components/LoginRegisterLayout";
import { TextField } from "@/components/Field";
import Button from "@/components/Button";

const Login = () => {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>

      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="w-auto h-10"></Logo>
        </Link>
      </div>

      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>

      <p className="mt-2 text-sm text-gray-700">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline">
          Sign Up
        </Link>{" "}
        for a free trial.
      </p>

      <form
        action="#"
        className="grid grid-cols-1 mt-10 gap-y-8">
        <TextField
          label="Email Address"
          id="login_email"
          name="login_email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          id="login_password"
          name="login_password"
          type="password"
          autoComplete="current-password"
          required
        />
        <Button
          type="submit"
          className="w-full"
          variant="solid"
          color="blue">
          Sign In &rarr;
        </Button>
      </form>
    </>
  );
};

Login.Layout = LoginRegisterLayout;

export default Login;
