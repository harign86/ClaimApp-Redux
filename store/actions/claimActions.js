export const FETCH_CLAIMS_BEGIN = 'FETCH_CLAIMS_BEGIN';
export const FETCH_CLAIMS_SUCCESS = 'FETCH_CLAIMS_SUCCESS';
export const FETCH_CLAIMS_ERROR = 'FETCH_CLAIMS_ERROR';
import axios from 'axios'

export function fetchClaimList() {
    return async dispatch => {
      dispatch(fetchClaimsBegin());
      try {
            const res = await axios
                .get(`http://localhost:7000/claims`);
            //console.log('DATA', res);
            dispatch(fetchClaimsSuccess(res.data));
            return res.data;
        }
        catch (error) {
            return dispatch(fetchClaimsError(error));
        }
    };
  }
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
export function fetchClaimsBegin() {
    return {
        type: FETCH_CLAIMS_BEGIN
    }
}

export function fetchClaimsSuccess(data) {
    return {
        type: FETCH_CLAIMS_SUCCESS,
        payload: {data}
    }
}

export function fetchClaimsError(error) {
    return {
        type: FETCH_CLAIMS_ERROR,
        payload: {error}
    }
}

// import axios from 'axios'
// import {FETCH_CLAIMS_REQUEST,FETCH_USERS_REQUEST} from './claimtypes'

// export const fetchClaims = () => {
//     console.log('trigger');
//     return (dispatch) => {
//         dispatch(fetchUsersRequest())
//             axios.get('http://localhost:7000/claims')
//             .then(response =>{
//                 const claims = response.data;
//                 dispatch(fetchClaimSuccess(claims))
//             })
//     }
// }
// export const fetchUsersRequest = () => {
//     return {
//       type: FETCH_USERS_REQUEST
//     }
//   }
// export const fetchClaimSuccess = claims => {
//     return {
//       type: FETCH_CLAIMS_REQUEST,
//       payload: claims
//     }
//   }





  // export const getClaims = (claim) =>{
//     return(dispatch,getState)=>{
//         dispatch({type:'GET_CLAIMS', claim});
//     }
// };

  // export function getClaims(){
//     return(dispatch)=>{
//         return axios.get(`http://localhost:7000/claims`)
//         .then(res => {
//             dispatch(claimData(res.data));
//         })
//     }
// }

// export function claimData(claim){
//     return{
//         type:"GET_CLAIM",
//         claim:claim
//     }
// }