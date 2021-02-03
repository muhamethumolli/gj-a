import '../styles/main.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-200">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
