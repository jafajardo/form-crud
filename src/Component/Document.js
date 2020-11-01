import React, {Component} from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { loadDocuments } from '../Flux/actions/documentActions';
import DocumentRow from './DocumentRow';

class Document extends Component {
  state = {
    renderFormControl: false
  }

  componentDidMount = () => {
    this.props.loadDocuments();
  }

  render() {
    return(
      <Container>
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Original Name</th>
              <th>Link</th>
              <th>Text</th>
              <th>Type</th>
              <th>Email Attachment</th>
              <th>Sort Order</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.document.documents.map(({
                id,
                documentName,
                originalDocumentName,
                documentHyperlink,
                documentText,
                documentType,
                isEmailAttachment,
                sortOrder}) => (
                  <DocumentRow 
                    key={id}
                    id={id}
                    documentName={documentName}
                    originalDocumentName={originalDocumentName}
                    documentHyperlink={documentHyperlink}
                    documentText={documentText}
                    documentType={documentType}
                    isEmailAttachment={isEmailAttachment}
                    sortOrder={sortOrder}
                  />
              ))
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  document: state.document
})

export default connect(mapStateToProps,{loadDocuments})(Document);
