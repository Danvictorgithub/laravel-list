import { A } from "@solidjs/router";
export default function Home() {
  return (
    <main>
      <section class="h-svh flex items-center justify-center flex-col text-gray-800">
        <div>
          <h1 class="font-bold text-7xl">Taskmone</h1>
          <p>Your ultimate solution for a productivity app</p>
        </div>
        <div class="mt-12">
          <A href="/auth/signin">
            <button
              class="border border-black px-4 py-2 rounded-xl hover:bg-black hover:text-white hover:border-white active:text-black   "
              type="button"
            >
              sign in
            </button>
          </A>
        </div>
      </section>
    </main>
  );
}
