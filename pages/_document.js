import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/navbar";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <script src="https://cdn.tailwindcss.com"></script>
        <Head />
        <body className="bg-violet-300">
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
