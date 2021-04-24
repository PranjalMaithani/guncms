import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showBackToHome =
    router.pathname === '/' || router.pathname === '/guns' ? false : true;
  return (
    <>
      <Component {...pageProps} />
      {showBackToHome && (
        <Link href="/guns">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>Back to home</a>
        </Link>
      )}
    </>
  );
}

export default MyApp;
