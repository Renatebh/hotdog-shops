import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "leaflet/dist/leaflet.css";
import store from "../global/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
