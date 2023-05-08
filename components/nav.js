import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
list-style-type:none;
`

const Li = styled.li`
margin: 4px;
font-size: 1.3rem;
text-decoration: none;
background-color:#e6fcd640;
padding:4px 8px;
border-radius: 3px;
`
const NavCont = styled.div`
border-radius: 0px 0px 20px 20px;
background: linear-gradient(145deg, #764d1e, #8c5b23);
box-shadow:  20px 20px 60px #6f481c,
             -20px -20px 60px #976226;
             padding: 20px 40px;
min-width: 100vw;
min-height: auto;
margin-bottom: 20px;
padding: 20px 40px;
`
const DivR = styled.div`
display:flex;
justify-content: flex-end;
`
const DivC = styled.div`
display:flex
`

export default function Nav(){
  return (
    <NavCont>
      <Link href="/"><Image
              priority
              src="/images/woodLogo1.jpeg"
              className={utilStyles.p5}
              height={80}
              width={144}
              alt=""
            /></Link>
    <DivR>
      
      <DivC>
    <Ul>
      <Li>
        <Link
          href="/gallery"
        >
          Gallery 
        </Link>
      </Li>
      <Li>
        <Link
          href="/about"
        >
          About 
        </Link>
      </Li>
      <Li>
        <Link
          href="/order"
        >
          Order 
        </Link>
      </Li>
      <Li>
        <Link
          href="/contact"
        >
          Contact
        </Link>
      </Li>
      <Li>
        <Link
          href="/"
        >
          Login/Register
        </Link>
      </Li>
      <Li>
        <Link
          href="/"
        >
          Logout
        </Link>
      </Li>
    </Ul>
    </DivC>
    </DivR>
    </NavCont>
  )
}