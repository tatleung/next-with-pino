import "../styles/globals.css";
import type { AppProps } from "next/app";
import { getLogger } from "../logging/log-util";

export default function App({ Component, pageProps }: AppProps) {
  const logger = getLogger("app");

  logger.error("a error message from _app");
  logger.debug("a debug message from _app");
  logger.info("a info message from _app");

  return <Component {...pageProps} />;
}
