import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDocuments, loadDocumentTypes, getDocumentById } from '../Flux/actions/documentActions';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import DropdownSelect from './Shared/DropdownSelect';

class DocumentView extends Component {
  state = {
    id: 0,
    documentName: '',
    originalDocumentName: '',
    documentHyperlink: '',
    documentText: '',
    documentType: '',
    isEmailAttachment: 0,
    sortOrder: 0
  }

  componentDidMount = () => {
    this.props.loadDocuments();
    this.props.getDocumentById(this.props.match.params.id.replace(":", ""));
    this.props.loadDocumentTypes();

    this.setState({
      id: this.props.document.document.id,
      documentName: this.props.document.document.documentName,
      originalDocumentName: this.props.document.document.originalDocumentName,
      documentHyperlink: this.props.document.document.documentHyperlink,
      documentText: this.props.document.document.documentText,
      documentType: this.props.document.document.documentType,
      isEmailAttachment: this.props.document.document.isEmailAttachment,
      sortOrder: this.props.document.document.sortOrder
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  emailAttachment = [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ];

  render() {
    return(
      <Form>
          <FormGroup>
            <Label for='documentName'>Document Name</Label>
            <Input type='text' name='documentName' id='documentName' placeholder='ProductDisclosureStatement.pdf' onChange={this.handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='originalDocumentName'>Original Document Name</Label>
            <Input type='text' name='originalDocumentName' id='originalDocumentName' placeholder='ProductDisclosureStatementV1.pdf' />
          </FormGroup>
          <FormGroup>
            <Label for='documentHyperlink'>Document Hyperlink</Label>
            <Input type='text' name='documentHyperlink' id='documentHyperlink' placeholder='https://document.com/PDS' />
          </FormGroup>
          <FormGroup>
            <Label for='documentText'>Document Text</Label>
            <Input type='text' name='documentText' id='documentText' placeholder='Specimen Signature' />
          </FormGroup>
          <div className='singleRow'>
            <FormGroup>
              <DropdownSelect name='documentType' label='Document Type' options={this.props.document.documentTypes} />
            </FormGroup>
            <FormGroup>
              <DropdownSelect name='isEmailAttachment' label='Is Email Attachment' options={this.emailAttachment} />
            </FormGroup>
            <FormGroup>
              <Label for='sortOrder'>Document Sort Order</Label>
              <Input type='text' name='sortOrder' id='sortOrder' placeholder='0' />
            </FormGroup>
          </div>
        </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  document: state.document
})

export default connect(mapStateToProps,{loadDocuments, loadDocumentTypes,getDocumentById})(DocumentView);
