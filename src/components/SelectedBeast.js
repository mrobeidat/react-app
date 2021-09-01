import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class SelectBeast extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} style={{ width: '18rem' }} />
                        <p>{this.props.description}</p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default SelectBeast;