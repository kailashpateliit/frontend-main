import {FaTwitter} from 'react-icons/fa'
import { FaFacebookF} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import {Button ,ButtonToolbar, ButtonGroup} from 'react-bootstrap';
const Footercontact = () => {
    return (
      <div className="row" style={{textAlign: 'left', paddingBottom: '20px'}}>
          <h4 style={{fontWeight: 'bold'}}>Contact us</h4>
          <div>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="outline-success" href="https://www.facebook.com/ajayiitism/"><FaFacebookF/></Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
            <Button variant="outline-success" href="https://www.twitter.com/urbanreach.in/"> <FaTwitter /></Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group" >
            <Button  style={{}}variant="outline-success" href="https://www.linkedin.com/urbanreach/"> 
          <FaLinkedinIn/>
          </Button>
      
            </ButtonGroup>
          </ButtonToolbar>
          </div>
      </div>
    );
  };
  export default Footercontact;
  