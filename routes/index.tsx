import { Head } from "$fresh/runtime.ts";
import LookBack from "../islands/LookBack.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          2022年にTwitterでシェアしたYoutubeを振り返ろう！
        </p>
        <LookBack />
      </div>
    </>
  );
}
