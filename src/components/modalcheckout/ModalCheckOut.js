import { Button, Modal } from "bootstrap";
import { useContext, useState } from "react";
import { providerCart } from "../context/CartContext";


function ModalCheckOut() {
    //const [show, setShow] = useState(false);
  
    const handleClose = () => setModal(false);
   // const handleShow = () => setShow(true);
  
    const {
        modalShow,
        setModal,
      } = useContext(providerCart);

      if (!modalShow) return <h1>Loading...</h1>

    return (
      <>
        <h1>por que no se muestra el modal?</h1>
        <Modal
          show={modalShow}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalCheckOut;