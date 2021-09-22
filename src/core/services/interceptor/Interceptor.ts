import axios from 'axios'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedError) {
    }
    return Promise.reject(error)
  },
)

// will send token to headers request ( in x-auth-token body )
// axios.interceptors.request.use((config) => {
//   config.headers['x-auth-token'] = getItem('token')
//   return config
// })

export default axios
