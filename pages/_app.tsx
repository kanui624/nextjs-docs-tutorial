// Types
import { AppProps } from 'next/app';

// CSS
import '../styles/gloabl.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
