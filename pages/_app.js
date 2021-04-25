import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showBackToHome =
    router.pathname === '/' || router.pathname === '/guns' ? false : true;
  return (
    <main>
      <Component {...pageProps} />
      {showBackToHome && (
        <Link href="/guns">
          <a
            style={{ color: 'rgb(30,30,30)', textDecoration: 'underline', marginTop: 10 }}
          >
            Back to home
          </a>
        </Link>
      )}
    </main>
  );
}

export default MyApp;
