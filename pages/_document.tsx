import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
        <script src="https://cdn.tailwindcss.com"></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
