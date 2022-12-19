// routes/_app.tsx

import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="ja">
      <Head>
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
