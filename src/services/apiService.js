import { authurl } from "./url";
import { toast } from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import {
  setAccessToken,
  setRefreshToken,
  setStep,
  setUser,
} from "../redux/slices/authslice";

export async function signup(data, navigate) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", authurl.signup, data);
    toast.success("User registered successfully");
    navigate(`/verifyEmail?email=${data.email}`);
  } catch (error) {
    const matchResult = error.request.response.match(/Error: (.+)<br>/);
    const errorMessage = matchResult
      ? matchResult[1]
      : "Error message not found";

      const updatedMessage=errorMessage.includes("user already exists with this email id") ?"user already exists with this email":"something went wrong while register to your account"
    console.log("SIGNUP API ERROR...", updatedMessage);
    toast.error(updatedMessage);
  }
  toast.dismiss(toastId);
}

export async function emailVerify(id, token, navigate, dispatch) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", authurl.verifyEmail, {
      id,
      token,
    });
    console.log("response", response);
    dispatch(setAccessToken(response?.data?.data?.accessToken));
    dispatch(setRefreshToken(response?.data?.data?.refreshToken));
    dispatch(setUser(response?.data?.data?.user));
    toast.success("User verified successfully");
    navigate("/getStarted");
  } catch (error) {
    console.log("error in email verification", error);
  }
  toast.dismiss(toastId);
}

export async function refreshAccessToken(refreshToken, dispatch) {
  let result;
  try {
    const response = await apiConnector("POST", authurl.refreshAccessToken, {
      refreshToken,
    });
    dispatch(setAccessToken(response?.data?.data?.accessToken));
    dispatch(setRefreshToken(response?.data?.data?.refreshToken));
    result=response?.data?.data?.accessToken;
  } catch (error) {
    console.log("error in refresh access token verification", error);
  }
  return result;
}

export async function server_logout(accessToken,navigate) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", authurl.logout, {
      accessToken,
    });
    console.log("response", response);
    toast.success("user logout successfully");
    navigate("/")
  } catch (error) {
    console.log("error in logout", error);
  }
  toast.dismiss(toastId);
}

export async function server_login(email, password, dispatch, navigate) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", authurl.signin, {
      email,
      password,
    });
    // console.log(response);
    dispatch(setAccessToken(response?.data?.data?.accessToken));
    dispatch(setRefreshToken(response?.data?.data?.refreshToken));
    dispatch(setUser(response?.data?.data?.user));
    toast.success("user logged in successfully");
    navigate("/");
  } catch (error) {
    const matchResult = error.request.response.match(/Error: (.+)<br>/);
    const errorMessage = matchResult
      ? matchResult[1]
      : "Error message not found";
    console.log("Login API ERROR...", errorMessage);
    const updatedMessage=errorMessage.includes("user doesnot exist") ?"user doesnot exist":"something went wrong while login to your account"
    toast.error(updatedMessage);
  }
  toast.dismiss(toastId);
}

export async function updateProfile(formdata, navigate,dispatch) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      authurl.profileupdate,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("response", response);

    toast.success("profile updated successfully");
    dispatch(setUser(response?.data?.data.user))
    navigate("/");
  } catch (error) {
    const matchResult = error.request?.response?.match(/Error: (.+)<br>/);
    const errorMessage = matchResult
      ? matchResult[1]
      : "Error message not found";
    console.log("UPDATE PROFILE API ERROR...", errorMessage);
    toast.error(matchResult);
  }
  toast.dismiss(toastId);
}
