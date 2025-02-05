import { A } from "@solidjs/router";
import HeaderLogo from "~/components/HeaderLogo";

export default function Signin() {
  return (
    <main class="container mx-auto text-gray-900">
      <section class="min-h-svh flex items-center justify-center">
        <div class="max-w-lg w-full min-h-svh flex items-center justify-center flex-col relative">
          <div class="absolute top-12 right-4">
            <HeaderLogo />
          </div>
          <header class="h-full w-full px-4">
            <div class="text-6xl font-bold">
              <h1>Hi!</h1>
              <p>Welcome</p>
            </div>
            <p class="text-base text-gray-700">Please enter your credentials</p>
          </header>
          <form class="w-full mt-12 p-4">
            <div>
              <label for="email" hidden>
                email
              </label>
              <input
                placeholder="juandelacruz@email.com"
                class="border-b w-full p-2"
                type="email"
              />
            </div>
            <div class="mt-8">
              <label for="password" hidden>
                password
              </label>
              <input
                type="password"
                placeholder="*************"
                class="border-b w-full p-2"
              />
            </div>
            <button class="btn w-full mt-12">sign in</button>
          </form>
        </div>
      </section>
    </main>
  );
}
