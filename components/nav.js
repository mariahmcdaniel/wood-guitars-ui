import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './nav.module.css';
import styled from 'styled-components';

const Ul = styled.ul`
list-style-type:none;
`

const Li = styled.li`
text-decoration: none;
`

export default function Nav(){
  return (
    <div className={styles.navContainer}>
      <Link href="/"><Image
              priority
              src="/images/woodLogo1.jpeg"
              className={utilStyles.p5}
              height={80}
              width={144}
              alt=""
            /></Link>
    <div className={styles.navRow}>
      
      <div className={styles.navCol}>
    <Ul className={styles.navTabs}>
      <Li className={styles.navItem}>
        <Link
          href="/gallery"
        >
          Gallery | 
        </Link>
      </Li>
      <Li className={styles.navItem}>
        <Link
          href="/about"
        >
          About | 
        </Link>
      </Li>
      <Li className={styles.navItem}>
        <Link
          href="/order"
        >
          Order | 
        </Link>
      </Li>
      <Li className={styles.navItem}>
        <Link
          href="/contact"
        >
          Contact
        </Link>
      </Li>
    </Ul>
    </div>
    </div>
    </div>
  )
}