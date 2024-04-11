const baseurl = process.env.REACT_APP_BASE_URL;
export const authurl ={
    'signup':baseurl+ '/register',
    'signin':baseurl+ '/login',
    'verifyEmail':baseurl+'/verification',
    'refreshAccessToken':baseurl+'/refreshAccessToken',
    'logout':baseurl+'/logout',
    'profileupdate':baseurl+ '/profileUpdate',
}