
import { Modal} from "react-bootstrap";
import "../Modal/LoginModal.css";

function AlertPackJoin({ showModal, setShowModal }) {


    return (
        <>
            <Modal className="my-modal" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body className="modal-body">
                    <div class="alert alert-primary" role="alert">
                        Thanks you! You are now inscribate.
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AlertPackJoin;
