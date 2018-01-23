import React from 'react';
import { Button, Form, Modal} from 'semantic-ui-react';
import '../../../styles/newTenantModal.css';

class NewTenantModal extends React.Component {
    constructor(props){
        super(props);
        //dimmerOptions: none- false, default-true, 'inverted', 'blurring'
    }

    render() {
        let { isOpen, onClose } = this.props;
        return (
            <div>
                <Modal dimmer='inverted' open={isOpen} onClose={onClose}>
                    <Modal.Header>Add New Tenant</Modal.Header>
                    <Form id="new-tenant-modal">
                        <Modal.Content>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                        </Modal.Content>
                        <Modal.Actions className="buttons">
                            <Button color='black' onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type='submit' positive icon='checkmark'
                                    labelPosition='right' content="Add Tenant" onClick={this.close} />
                        </Modal.Actions>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default NewTenantModal;
