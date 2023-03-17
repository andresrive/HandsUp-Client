
import { Modal} from "react-bootstrap";
import "../Modal/LoginModal.css";

function AlertPackJoin({ showModal, setShowModal }) {


    return (
        <>
            <Modal className="my-modal" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body className="modal-body">
                    <div class="alert alert-primary" role="alert">
                        Thank you for choosing our travel package. You will recieve the information about the travel via email.
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AlertPackJoin;
