import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import HeaderLogo from "~/components/HeaderLogo";

export default function Signup() {
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
                <h1>Hello!</h1>
                <p>Welcome</p>
              </div>
              <p class="text-base text-gray-700">Let's create your account</p>
            </header>
            <form class="w-full mt-12 p-4">
              <div>
                <label for="email" hidden>
                  image
                </label>
                <input
                  placeholder="Juan Dela Cruz"
                  class="border-b w-full p-2"
                  type="file"
                />
              </div>
              <div class="mt-8">
                <label for="email" hidden>
                  name
                </label>
                <input
                  placeholder="Juan Dela Cruz"
                  class="border-b w-full p-2"
                  type="text"
                />
              </div>
              <div class="mt-8">
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
              <button class="btn w-full mt-12">sign up</button>
            </form>
            <div class="w-full p-2 px-4 text-right">
              <p>Already have an account?</p>
              <A href="/auth/signin">
                <p class="font-bold">sign in</p>
              </A>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
