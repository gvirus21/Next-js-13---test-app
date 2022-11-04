import React from "react";
import Link from "next/link";
import styles from "app/page.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>OrgX</h2>

      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
