import '../styles/globals.css';
import '../styles/style.css';
import type { AppProps } from 'next/app';
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(`In MyApp!`);
  console.log(`In MyApp. Component is ${JSON.stringify(Component)}!`);
  console.log(`In MyApp. PageProp is ${JSON.stringify(pageProps)}!`);
  return (<CookiesProvider>
            <div> 
              <Component {...pageProps} />
            </div>
          </CookiesProvider>)
}
export default MyApp