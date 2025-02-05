import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import HeaderLogo from "~/components/HeaderLogo";

export default function Page() {
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
                <h1>Let's Recover</h1>
                <p>your Account!</p>
              </div>
              <p class="text-base text-gray-700">
                Enter your new password to recover your account.
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
                  value="juandelacruz@email.com"
                />
              </div>
              <div class="mt-8 relative">
                <label for="password" hidden>
                  password
                </label>
                <input
                  type={showPassword() ? "text" : "password"}
                  placeholder="password"
                  class="border-b w-full p-2"
                />
              </div>
              <div class="mt-8 relative">
                <label for="password" hidden>
                  confirm password
                </label>
                <input
                  type={showPassword() ? "text" : "password"}
                  placeholder="confirm password"
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
