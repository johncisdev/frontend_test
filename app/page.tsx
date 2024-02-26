import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";
import { Suspense, useEffect, useState } from "react";

export default async function Home() {
  // data from https://jsonplaceholder.typicode.com/users
 
  return (
      <main className={styles.main}>
        <Gallery />
      </main>
  );
}
