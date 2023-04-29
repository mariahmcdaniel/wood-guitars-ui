import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './nav.module.css'

export default function Nav(){
  return (
    <div className={styles.navContainer}>
      <Link href="/"><Image
              priority
              src="/images/woodLogo1.jpeg"
              className={utilStyles.p5}
              height={144}
              width={144}
              alt=""
            /></Link>
    <div className={styles.navRow}>
      
      <div className={styles.navCol}>
    <ul className={styles.navTabs}>
      <li className={styles.navItem}>
        <Link
          href="/gallery/main"
        >
          Gallery | 
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/about/info"
        >
          About | 
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/shop/order"
        >
          Order | 
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
    </div>
    </div>
  )
}