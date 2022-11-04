import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import PostList from '../components/PostList'
export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Navbar />
        <PostList />
      </main>

      <footer className={styles.footer}>
        Made with ❤️ by GV
      </footer>
    </div>
  );
}
