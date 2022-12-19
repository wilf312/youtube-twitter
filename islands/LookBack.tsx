import { useState } from "preact/hooks";

interface CounterProps {
  // start: number;
}

export default function LookBack(props: CounterProps) {
  const [name, setName] = useState("");
  return (
    <div class="flex gap-2 w-full">
      <h2>Twitterのユーザー名を入力してください</h2>
      <input
        type="text"
        style={{
          border: "solid 1px ",
          borderRadius: "3px",
        }}
        onInput={(e) => setName(e.currentTarget.value)}
        value={name}
      />

      <a
        href={`https://twitter.com/search?q=from%3A${name}%20youtu.be%20until%3A2022-12-31%20since%3A2022-01-01&src=typed_query&f=live`}
        target="_blank"
        referrerpolicy="no-referrer"
        style={{
          pointerEvents: !name ? "none" : "auto",
        }}
        disabled={!name}
      >
        振り返る！
      </a>
    </div>
  );
}
