import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Markdown from 'react-markdown'

class ModalExample extends React.Component {
  render() {

    const data = this.props.activeModalContent

    return (
      <div>
        <Modal
        fade={false}
          isOpen={this.props.modal}
          toggle={this.props.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
           <Markdown source={data.readme} /> 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleModal}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
