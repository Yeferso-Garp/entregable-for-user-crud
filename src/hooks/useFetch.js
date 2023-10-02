import { useState } from "react";
import axios from 'axios';

const useFetch = (baseUrl) => {

  const [infoAPi, setInfoAPi] = useState();

  //READ
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios.get(url)
        .then(res => setInfoAPi(res.data))
        .catch(err => console.log(err));
  }

  //CREATE
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios.post(url, data)
        .then(res => {
          console.log(res.data)
          setInfoAPi([...infoAPi, res.data])
        })
        .catch(err => console.log(err));
  }

  // DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
        .then(res => {
            console.log(res.data)
            setInfoAPi(infoAPi.filter(e => e.id !== id))
        })
        .catch(err => console.log(err));
  }

  //UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.patch(url, data)
        .then(res => {
            console.log(res.data)
            setInfoAPi(infoAPi.map(e => e.id === id ? res.data : e))
        })
        .catch(err => console.log(err));
  };

  return [infoAPi, getApi, postApi, deleteApi, updateApi];
}

export default useFetch
