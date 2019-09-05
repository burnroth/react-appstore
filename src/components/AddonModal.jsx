import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Markdown from "react-markdown";
import Highlight from "react-highlight";

class AddonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0
    };
    this.increment = this.increment.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  increment() {
    this.setState({ duration: this.state.duration + 1 });
  }

  componentDidMount() {
    // Tracks when a modal is opened
    window.analytics.track("Modal opened", {
      addon: this.props.activeModalContent.unique_name
    });
    setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    // Tracks when a modal is closed
    window.analytics.track("Modal closed", {
      addon: this.props.activeModalContent.unique_name
    });
    // Tracks when a modal has been active and tracks the duration
    window.analytics.track(`${this.props.activeModalContent.unique_name}`, {
      addon: this.props.activeModalContent.unique_name,
      duration: this.state.duration
    });
    clearInterval(this.increment);
  }

  handleScroll(data, e) {
    const { scrollHeight, scrollTop, clientHeight } = e.target;

    if(scrollHeight - scrollTop === clientHeight){
      window.analytics.track("Max scroll depth reached", {
        addon: data.unique_name
      });
    }

  }

  render() {
    const data = this.props.activeModalContent;

    return (
      <div onScroll={this.handleScroll.bind(this, data)}>
        <Modal
          fade={false}
          isOpen={this.props.modal}
          toggle={this.props.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
          <ModalBody>{data.readme}</ModalBody>
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

export default AddonModal;
