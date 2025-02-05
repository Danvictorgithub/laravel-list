import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import HeaderLogo from "~/components/HeaderLogo";

export default function ForgotPassword() {
  return (
    <main class="container mx-auto text-gray-900">
      <section class="min-h-svh flex items-center justify-center">
        <div class="max-w-lg w-full min-h-svh flex items-center justify-start flex-col relative">
          <div class="w-full p-4">
            <HeaderLogo />
          </div>
          <div class="h-full w-full flex-1 flex items-center justify-center flex-col">
            <header class="h-full w-full px-4">
              <div class="text-6xl font-bold">
                <h1>Oh No!</h1>
                <p>I forgot</p>
              </div>
              <p class="text-base text-gray-700">
                Enter your email address to reset your password.
              </p>
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
              <button class="btn w-full mt-12">submit</button>
            </form>
            <div class="w-full p-2 px-4 text-right">
              <p>Don't have an account?</p>
              <A href="/auth/signup">
                <p class="font-bold">sign up</p>
              </A>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
