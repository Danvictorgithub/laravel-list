import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <main class="container mx-auto text-gray-900">
      <section class="min-h-svh flex items-center justify-center">
        <div class="max-w-lg w-full min-h-svh flex items-center justify-start flex-col relative">
          <header>
            <p>Hello, Juan</p>
          </header>
          <Button>Click me</Button>
        </div>
      </section>
    </main>
  );
}
