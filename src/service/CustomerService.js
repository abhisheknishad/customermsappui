import axios from 'axios';

const baseurl='http://localhost:8585';

function fetchCustomer(id){
    const url = baseurl+"/customers/byid/" +id;
    const promise=axios.get(url);
    return promise;
}



export {fetchCustomer};