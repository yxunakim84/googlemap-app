import { ReactNode } from "react";
import styles from "../styles/Layout.module.css";


export const Layout = (children: any) => {

  return (
    <div className={styles.container}>
      <div className={styles.view} style={{backgroundImage: '/background.png'}}>
        {children}
      </div>
    </div>
  )
}