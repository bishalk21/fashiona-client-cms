import axios from "axios";
const rootUrlAPI = "http://localhost:8000/api/v1";
const productsAPI = rootUrlAPI + "/products";
const categoriesAPI = rootUrlAPI + "/categories";
const customerAPI = rootUrlAPI + "/customer";

//there will be lots of repetition on doing individual axios get method
//so i am creating this api, processor
const apiProcessor = async ({ method, url, dataobj, headers }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataobj,
      headers,
    });
    return data;
  } catch (error) {
    let message = error.message;
    if (error.response && error.response.status === "401") {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
      return { status: "error", message: "unauthorized!" };
    }
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    if (message === "jwt expired!") {
      //call the api to get new refresh jwt and recall the process
      const accssJWT = await requestAccessJWT();
      if (accssJWT) {
        return apiProcessor({
          method,
          url,
          dataobj,
          headers: {
            Authorization: accssJWT,
          },
        });
      }
    }
    // console.log("jglsjgl", status, message, customer);
    console.log(error, message);

    return {
      status: "error",
      message,
    };
  }
};

//request new accessjwt by refresh jwt
export const requestAccessJWT = async () => {
  const { accessJWT } = await apiProcessor({
    method: "get",
    url: customerAPI + "/accessjwt",
    headers: {
      Authorization: localStorage.getItem("refreshJWT"),
    },
  });
  console.log(accessJWT);
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};
