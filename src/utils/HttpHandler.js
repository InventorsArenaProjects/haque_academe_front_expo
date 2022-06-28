import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HttpHandler {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.api = axios.create({
      baseURL: baseURL,
    });
    this.api.defaults.withCredentials = true;
  }

  // ----------------------- This function is used to send http post request with authentication token -----------------------
  postFileWithToken = async (url, data) => {
    let responseObj = {};
    try {
      // Validate url and data arguments -----------------------
      if (url !== null && typeof url === 'string') {
        // get token---------------------------------------------
        let token = await AsyncStorage.getItem('token');
        // Check availability of token -----------------------
        if (token !== null) {
          let res = await fetch(this.baseURL+url, {
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": token
            },
            body: data
          })
          let resData = await res.json();
          console.log(resData);
          console.log('-----------POST DATA WITH TOKEN------------');
          if (resData.status) {
            // Data successfully fetched -----------------------
            responseObj = {
              status: true,
              errors: null,
              data: resData,
              msg: 'Your file is successfully uploaded',
            };
          } else {
            // Get response data error -----------------------
            // console.log(`Something problem to fetching data ${responseData}`);
            responseObj = {
              status: false,
              errors: 'no data retrive',
              data: resData,
              msg: 'Something problem to upload file',
            };
          }

        } else {
          // Auth token not available error -----------------------
          console.log(`Something problem get token`);
          responseObj = {
            status: false,
            errors: 'token error',
            data: null,
            msg: 'Something problem get token',
          };
        }

      } else {
        // Invalid arguments error -----------------------
        console.log(`Invalid arguments`);
        responseObj = {
          status: false,
          errors: 'Invalid arguments',
          data: null,
          msg: 'Invalid arguments',
        };
      }
    } catch (error) {
      // Something problem into system error -----------------------
      responseObj = {
        status: false,
        errors: error,
        data: null,
        msg: 'Something problem in system',
      };

      console.log(`Something problem in system ${error}`);
    }

    return responseObj;
  };


  // ----------------------- This function is used to send http get request with authentication token -----------------------
  getDataWithToken = async url => {
    let responseObj = {};
    try {
      // Validate url and data arguments -----------------------
      if (url !== null && typeof url === 'string') {
        // get token---------------------------------------------
        let token = await AsyncStorage.getItem('token');
        // Check availability of token -----------------------
        if (token !== null) {
          let responseData = await this.api.get(url, {
            headers: {
              Authorization: `${token}`,
            },
          });
          console.log("22222222222222222")
          console.log(url);

          if (responseData.data.status) {
            // Data successfully fetched -----------------------
            console.log('-----------GET DATA WITH TOKEN------------');
            console.log(`Your data is successfully fetched ${responseData}`);
            console.log('-----------------------');
            responseObj = {
              status: true,
              errors: null,
              data: responseData.data,
              msg: 'Your data is successfully fetched',
            };
          } else {
            // Get response data error -----------------------
            // console.log(`Something problem to fetching data ${responseData}`);
            responseObj = {
              status: false,
              errors: 'no data retrive',
              data: responseData.data.result,
              msg: 'Something problem to fetching data',
            };
          }
        } else {
          // Auth token not available error -----------------------
          console.log(`Something problem get token`);
          responseObj = {
            status: false,
            errors: 'token error',
            data: null,
            msg: 'Something problem get token',
          };
        }
      } else {
        // Invalid arguments error -----------------------
        console.log(`Invalid arguments`);
        responseObj = {
          status: false,
          errors: 'Invalid arguments',
          data: null,
          msg: 'Invalid arguments',
        };
      }
    } catch (error) {
      // Something problem into system error -----------------------
      responseObj = {
        status: false,
        errors: error,
        data: null,
        msg: 'Something problem in system',
      };

      console.log(`Something problem in system ${error}`);
    }

    return responseObj;
  };

  // ----------------------- This function is used to send http post request with authentication token -----------------------
  postDataWithToken = async (url, data) => {
    let responseObj = {};
    try {
      // Validate url and data arguments -----------------------
      if (url !== null && typeof url === 'string') {
        // get token---------------------------------------------
        let token = await AsyncStorage.getItem('token');
        // Check availability of token -----------------------
        if (token !== null) {
          let responseData = await this.api.post(url, data, {
            headers: {
              Authorization: `${token}`,
            },
          });
          console.log('-----------POST DATA WITH TOKEN------------');
          console.log(responseData.data);
          if (responseData.data.status) {
            // Data successfully fetched -----------------------
            console.log('-----------GET DATA WITH TOKEN------------');
            console.log(`Your data is successfully fetched ${responseData}`);
            console.log('-----------------------');
            responseObj = {
              status: true,
              errors: null,
              data: responseData.data,
              msg: 'Your data is successfully fetched',
            };
          } else {
            // Get response data error -----------------------
            // console.log(`Something problem to fetching data ${responseData}`);
            responseObj = {
              status: false,
              errors: 'no data retrive',
              data: responseData.data.result,
              msg: 'Something problem to fetching data',
            };
          }
        } else {
          // Auth token not available error -----------------------
          console.log(`Something problem get token`);
          responseObj = {
            status: false,
            errors: 'token error',
            data: null,
            msg: 'Something problem get token',
          };
        }
      } else {
        // Invalid arguments error -----------------------
        console.log(`Invalid arguments`);
        responseObj = {
          status: false,
          errors: 'Invalid arguments',
          data: null,
          msg: 'Invalid arguments',
        };
      }
    } catch (error) {
      // Something problem into system error -----------------------
      responseObj = {
        status: false,
        errors: error,
        data: null,
        msg: 'Something problem in system',
      };

      console.log(`Something problem in system ${error}`);
    }

    return responseObj;
  };

  // ----------------------- This function is used to send http post request -----------------------
  postData = async (url, data) => {
    console.log(data);
    let responseObj = {};
    try {
      // Validate url and data arguments -----------------------
      if (
        url !== null &&
        data !== null &&
        typeof url === 'string' &&
        typeof data === 'object'
      ) {
        let responseData = await this.api.post(url, data);
        console.log(responseData.data);
        if (responseData.data.status) {
          // Data successfully fetched -----------------------
          console.log(`Your data is successfully fetched ${responseData}`);
          responseObj = {
            status: true,
            errors: null,
            data: responseData.data,
            msg: 'Your data is successfully fetched',
          };
        } else {
          // Get response data error -----------------------
          console.log(`Something problem to fetching data ${responseData}`);
          responseObj = {
            status: false,
            errors: 'no data retrive',
            data: responseData.data.result,
            msg: 'Something problem to fetching data',
          };
        }
      } else {
        // Invalid arguments error -----------------------
        console.log(`Invalid arguments`);
        responseObj = {
          status: false,
          errors: 'invaliad arguments',
          data: null,
          msg: 'Invalid arguments',
        };
      }
    } catch (error) {
      // Something problem into system error -----------------------
      responseObj = {
        status: false,
        errors: error,
        data: null,
        msg: 'Something problem in system',
      };
      console.log(`Something problem in system ${error}`);
    }
    return responseObj;
  };

  // ----------------------- This function is used to send http get request -----------------------
  getData = async url => {
    let responseObj = {};
    try {
      // Validate url and data arguments -----------------------
      if (url !== null && typeof url === 'string') {
        let responseData = await this.api.get(url);
        if (!responseData.data.status) {
          // Data successfully fetched -----------------------
          console.log(`Your data is successfully fetched ${responseData}`);
          responseObj = {
            status: true,
            errors: null,
            data: responseData.data,
            msg: 'Your data is successfully fetched',
          };
        } else {
          // Get response data error -----------------------
          console.log(`Something problem to fetching data ${responseData}`);
          responseObj = {
            status: false,
            errors: 'no data retrive',
            data: responseData,
            msg: 'Something problem to fetching data',
          };
        }
      } else {
        // Invalid arguments error -----------------------
        console.log(`Invalid arguments`);
        responseObj = {
          status: false,
          errors: 'invalid arguments',
          data: null,
          msg: 'Invalid arguments',
        };
      }
    } catch (error) {
      // Something problem into system error -----------------------
      responseObj = {
        status: false,
        errors: error,
        data: null,
        msg: 'Something problem in system',
      };
      console.log(`Something problem in system ${error}`);
    }
    return responseObj;
  };
}
