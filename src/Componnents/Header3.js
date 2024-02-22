import './Header2.css';
import iy from '../Images/pngimg.com - paw_PNG62.png'
import user from '../Images/UserInterface.png'
export default function Header3() {
  return (
    <div className='content2'>
      <div className='log'>
        <img src={iy}  height={55} width={60} className='i' alt=''></img> <br></br>
        <h1 className='log3'>HOPE FOR PAW</h1>
        <h5 className='log4'>RESCUE</h5>
      </div>
      <div className='header2'>
        <a className='n2' href="Home">HOME</a>
        <a className='n2' href="Login">LOGIN</a>
        <a className='n2' href="/ResPage">RESCUER HOME</a>
        <a className='n2' href="/ListRes">RESCUED LIST</a>
        <a className='n2' href="/About">ABOUT</a> 
        <a className='n2' href="/Home">LOG OUT</a> 
        <span className='imuser'> Nelson Samuel J &#160;<img  src={user} height={50} width={50}></img></span>
      </div>
    </div>
  );
}