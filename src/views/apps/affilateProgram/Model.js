import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
} from "reactstrap";

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commission_Amount: " ",
      modal: false,
    };
  }
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Button outline color="primary" onClick={this.toggleModal}>
          Add Commis..
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={this.toggleModal}>
            Commission Amount!
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Commission: </Label>
              <Input
                type="text"
                maxlength="10"
                name="commission_Amount"
                value={this.state.commission_Amount}
                onChange={this.handleChange}
                placeholder="Enter Commission Amount..."
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
export default ModalForm;
