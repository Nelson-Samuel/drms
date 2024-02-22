import './Header.css';
import iy from '../Images/pngimg.com - paw_PNG62.png'
export default function Header() {
  return (
    <div className='content'>
      <div className='log'>
        <img src={iy} height={55} width={60} className='i' alt=''></img> <br></br>
        <h1 className='log1'>HOPE FOR PAW</h1>
        <h5 className='log2'>RESCUE</h5>
      </div>
      <div className='header'>
        <a className='n1' href="Home">HOME</a>
        <a className='n1' href="Login">LOGIN</a>
        <a className='n1' href="/About">ABOUT</a>
      </div>
    </div>
  );
}