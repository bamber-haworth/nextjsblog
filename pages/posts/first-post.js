import Head from 'next/head';
import styles from '/Users/bamberhaworth/Documents/GitHub/blog-nextjs/nextjsblog/styles/Home.module.css'
import Link from 'next/link';

export default function FirstPost() {
    return (
      <>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
      <main>
        <h1 className={styles.title}>First Post</h1>
        <Link href="../">Home</Link> 
      </main>
      </div>
      </>
  );
}
