import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer rPPqWetIBfllzwCtnsIopDkn0tEkRqSt_d2qGv7Kd_yZYi89x_x8_D6NFsJg37SDpKs-8UBS_fQ2S-h6OTHPGrlMn2a7T4rlfR4zpF8NzzCwveOhJhJoxgbgidwWYnYx'
  }
})