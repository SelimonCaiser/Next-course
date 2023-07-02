import Link from "next/link";
import React from "react";
import styles from '../styles/Links.module.scss'

export default function Links({ href, title }) {
  return <Link className={styles.link} href={href}>{title}</Link>;
}
