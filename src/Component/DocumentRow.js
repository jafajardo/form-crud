import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getDocumentById } from '../Flux/actions/documentActions';

class DocumentRow extends Component {

  handleDocumentClick = () => {
    //this.props.getDocumentById(this.props.id);
    window.location.href = `/document:${this.props.id}`;
  }

  render() {
    return (
      <tr key={this.props.id} onClick={this.handleDocumentClick}>
        <td>{this.props.id}</td>
        <td>{this.props.documentName}</td>
        <td>{this.props.originalDocumentName}</td>
        <td>{this.props.documentHyperlink}</td>
        <td>{this.props.documentText}</td>
        <td>{this.props.documentType}</td>
        <td>{this.props.isEmailAttachment}</td>
        <td>{this.props.sortOrder}</td>
      </tr>
    )
  }
}

export default connect(null,{getDocumentById})(DocumentRow);
