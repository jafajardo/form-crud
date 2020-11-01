import {
  LOAD_DOCUMENTS,
  LOAD_DOCUMENT_TYPES,
  GET_DOCUMENT_BY_ID
} from '../actions/types';

const tempDocuments = [
  {
    id: 1,
    documentName: 'ProductA_PDS.pdf',
    originalDocumentName: 'ProductA_PDS_V5.pdf',
    documentHyperlink: 'https://abc.com/documents/productA_PDS.pdf',
    documentText: 'Product A Product Disclosure Statement',
    documentType: 'PDS',
    isEmailAttachment: 0,
    sortOrder: 0
  },
  {
    id: 2,
    documentName: 'ProductB_FSG.pdf',
    originalDocumentName: 'ProductB_FSG_V5.pdf',
    documentHyperlink: 'https://abc.com/documents/productB_FSG.pdf',
    documentText: 'Product B Financial Services Guide',
    documentType: 'FSG',
    isEmailAttachment: 0,
    sortOrder: 0
  },
  {
    id: 3,
    documentName: 'ProductC_T&C.pdf',
    originalDocumentName: 'ProductC_T&C_V5.pdf',
    documentHyperlink: 'https://abc.com/documents/productC_T&C.pdf',
    documentText: 'Product C Terms and Conditions',
    documentType: 'T&C',
    isEmailAttachment: 0,
    sortOrder: 0
  }
];

const tempDocumentTypes = [
  { label: 'Please Select', value: '' },
  { label: 'PDS', value: 'PDS' },
  { label: 'FSG', value: 'FSG' },
  { label: 'T&C', value: 'T&C' }
];

export const loadDocuments = () => (dispatch) => {
  dispatch({
    type: LOAD_DOCUMENTS,
    payload: tempDocuments
  })
}

export const loadDocumentTypes = () => (dispatch) => {
  dispatch({
    type: LOAD_DOCUMENT_TYPES,
    payload: tempDocumentTypes
  })
}

export const getDocumentById = (id) => (dispatch) => {
  dispatch({
    type: GET_DOCUMENT_BY_ID,
    payload: id
  })
}
