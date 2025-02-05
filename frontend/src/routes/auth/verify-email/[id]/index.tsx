import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import HeaderLogo from "~/components/HeaderLogo";

export default function index() {
  return (
    <main class="container mx-auto text-gray-900">
      <section class="min-h-svh flex items-center justify-center p-1">
        <div class="max-w-lg w-full min-h-svh flex items-center justify-start flex-col relative">
          <div class="w-full mt-4 p-1">
            <HeaderLogo />
          </div>
          <div class="h-full w-full flex-1 flex items-center justify-center flex-col">
            <header class="h-full w-full">
              <div class="text-6xl font-bold">
                <h1>Email</h1>
                <p>Verified!</p>
              </div>
              <p class="text-base text-gray-700">
                Thank you for verifying your email address. You can now login to
                your account.
              </p>
            </header>
            <A href="/auth/signin" class="w-full">
              <button class="flex items-center gap-2 btn w-full mt-12">
                <Icon icon="mingcute:back-line" />
                <p>go to sign in</p>
              </button>
            </A>
          </div>
        </div>
      </section>
    </main>
  );
}
