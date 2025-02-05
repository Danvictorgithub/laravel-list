import { createSignal } from "solid-js";
import HeaderLogo from "~/components/HeaderLogo";
import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";

export default function Signin() {
  const [showPassword, setShowPassword] = createSignal(false);
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
                <h1>Hi!</h1>
                <p>Welcome</p>
              </div>
              <p class="text-base text-gray-700">
                Please enter your credentials
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
              <div class="mt-8 relative">
                <label for="password" hidden>
                  password
                </label>
                <input
                  type={showPassword() ? "text" : "password"}
                  placeholder={showPassword() ? "password" : "********"}
                  class="border-b w-full p-2"
                />
                {showPassword() ? (
                  <button onClick={() => setShowPassword(!showPassword())}>
                    <Icon
                      icon="bx:hide"
                      class="text-3xl absolute top-1 right-4"
                    />
                  </button>
                ) : (
                  <button onClick={() => setShowPassword(!showPassword())}>
                    <Icon
                      icon="bx:show"
                      class="text-3xl absolute top-1 right-4"
                    />
                  </button>
                )}
              </div>
              <div>
                <A href="/auth/forgot-password">
                  <p class="text-right p-2 text-sm text-gray-700">
                    Forgot Password?
                  </p>
                </A>
              </div>
              <button class="btn w-full mt-12">sign in</button>
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
