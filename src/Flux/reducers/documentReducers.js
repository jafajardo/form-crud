import {
  LOAD_DOCUMENTS,
  LOAD_DOCUMENT_TYPES,
  GET_DOCUMENT_BY_ID
} from '../actions/types';

const initialState = {
  documents: [],
  documentTypes: [],
  document: {}
}

const documentReducers = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_DOCUMENTS: 
      return {
        ...state, documents: action.payload
      }
    case LOAD_DOCUMENT_TYPES:
      return {
        ...state, documentTypes: action.payload
      }
    case GET_DOCUMENT_BY_ID:
      return {
        ...state, document: state.documents.find(document => document.id === parseInt(action.payload))
      }
    default:
      return state;
  }
}

export default documentReducers;
