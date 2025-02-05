import { A } from "@solidjs/router";
export default function Home() {
  return (
    <main>
      <section class="h-svh flex items-center justify-center flex-col text-gray-800">
        <div class="relative">
          <div class="flex items-end">
            <img
              src="/cropped_logo.png"
              alt=""
              class="h-32 w-32 object-contain"
            />
            <h1 class="font-bold text-7xl -mx-4 mb-1">askmone</h1>
          </div>
          <p class="text-center">
            Your ultimate solution for a productivity app
          </p>
        </div>
        <div class="mt-12">
          <A href="/auth/signin">
            <button class="btn" type="button">
              sign in
            </button>
          </A>
        </div>
      </section>
    </main>
  );
}
