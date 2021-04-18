import React from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import { Counter } from "./_components/Counter";

export default IndexPage;

function IndexPage({ activePath }: { activePath: string | undefined }) {
  return (
    <>
      <h1>
        Welcome to <code>vite-plugin-ssr</code>
      </h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <li>{activePath ? activePath : "No active path"}</li>
      </ul>
      <p>
        We use <code>useClientRouter()</code> to do Client-side Routing.{" "}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            navigate("/foo");
          }}
        >
          /foo
        </button>
        <button
          onClick={() => {
            navigate("/bar");
          }}
        >
          /bar
        </button>
        <button
          onClick={() => {
            navigate("/404");
          }}
        >
          /404
        </button>
      </p>
    </>
  );
}
