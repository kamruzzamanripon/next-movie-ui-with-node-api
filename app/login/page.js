"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Error from "../component/common/Error";
import { useLoginMutation } from "../reduxStore/features/auth/authApi";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { data, isLoading, error: responseError }] = useLoginMutation();
  const router = useRouter();
  console.log('login data', data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("loging data", email, password)
    setError("");

    login({
      email,
      password,
    });

    router.push("/");
  };

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      router.push("/");
    }
  }, [data, responseError, router]);

  return (
    <div class="flex h-screen items-center justify-center bg-gray-100">
      <div class="bg-white p-8 shadow-md rounded-lg w-80">
        <h1 class="text-2xl font-semibold mb-4">Login </h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              class="mt-1 block w-full border rounded-md px-3 py-2 text-red-800"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              class="mt-1 block w-full border rounded-md px-3 py-2 text-red-800"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {error !== "" && <Error message={error} />}
      </div>
    </div>
  );
};

export default page;
