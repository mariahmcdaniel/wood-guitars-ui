import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
list-style-type:none;
flex-direction:column;
flex-direction: column;
margin-left: 40px;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`

const Li = styled.li`
margin: 4px;
font-size: clamp(.8rem, 4vw, 1.2rem);
text-decoration: none;
background-color:#e6fcd640;
padding: 1vw 1vh;
border-radius: 3px;
`
const NavCont = styled.div`
border-radius: 0px 0px 20px 20px;
background: linear-gradient(145deg, #764d1e, #8c5b23);
box-shadow:  20px 20px 60px #6f481c,
             -20px -20px 60px #976226;
             padding: 20px 40px;
min-width: fit-content;
min-height: auto;
margin-bottom: 20px;
padding: 20px 40px;
display: flex;
@media (min-width: 768px) {
    display: block !important;
    margin-right: 30px;
  }
`
const DivR = styled.div`
display:flex;
justify-content: flex-end;
margin:2px;
`
const DivC = styled.div`
display:flex;
max-width: 75vw;
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
          href="/register"
        >
          Login/Signup
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