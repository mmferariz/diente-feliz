import axios from "axios";
import * as qs from 'qs';

const baseUrl = 'https://diente-feliz-strapi.herokuapp.com/api';
// const baseUrl = 'http://localhost:1337/api';

const login =  async (identifier, pass) => {
  let res = await axios.post(
    `${baseUrl}/auth/local`,
    {
      identifier: identifier,
      password: pass
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  const { jwt } = res.data;
  if(!jwt) {
    if(res.data.code != 200){
      // throw Boom.badRequest(res.data.message, res.data);
    }
    throw res.error;
  } else {
    return {...res.data.user, jwt};
  }
  
};

const getCitas = async (token, id) => {
  const query = qs.stringify({
    populate: '*',
    filters: {
      doctor: {
        id: {
          $eq: id
        }
      },
    }
  },{
    encodeValuesOnly: true
  });
  let res = await axios.get(
    `${baseUrl}/citas?${query}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  );
  const { data } = res.data;
  if(!res.data) {
    throw res.error;
  } else {
    return data;
  }
};

export {login, getCitas};
