import './Select.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Front from './Front';
function SelectPosition() {
  return (
    <div className="Choose">
      <Front/>
      <center>
       <div
      className="modal1 show"
      style={{ display: 'block', position: 'initial' }} >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title className='tit'><p>HOPE FOR PAW</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Make Your Choice</p>
        </Modal.Body>

        <Modal.Footer className='cho1'>
          <Link to="/SignCit"><Button className='b12' variant="warning gradient text-white">CITIZEN</Button></Link>
          <Link to="/SignRes"><Button className='b12' variant="warning gradient text-white">RESCUER</Button></Link>
          <Link to="/Login"><Button className='b12' variant="warning gradient text-white">CANCEL</Button></Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
      </center>
    </div>
  );
}

export default SelectPosition;