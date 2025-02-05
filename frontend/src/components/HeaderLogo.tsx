import { A } from "@solidjs/router";

export default function HeaderLogo() {
  return (
    <A href="/">
      <div class="flex items-end justify-end">
        <img src="/cropped_logo.png" alt="" class="h-16 w-16 object-contain" />
        <h1 class="font-bold text-3xl -mx-1">askmone</h1>
      </div>
    </A>
  );
}
