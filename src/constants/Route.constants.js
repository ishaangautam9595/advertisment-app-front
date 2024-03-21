const RouteList = {
     MAIN : '/*',
     DASHBOARDMAIN : '/protected/*',
     HOME : '/',
     SIGNUP : 'signup',
     LOGIN : 'login',
     PASSWORD_RESET : 'passwordReset/*',
     FORGOT_PASSWORD : 'forgot-password',
     VERIFY_EMAIL : 'verify',
     NOTFOUND: '*',
     ABOUTUS : 'about-us',
     LIST : "list",
     ALLCATEGORIES : 'all-categories',
     PRODUCT : 'products',
     PRODUCTID : 'products/:id',
     CAREER : 'career',
     POST : 'post',
     PROFILE : 'profile',
}

export default RouteList;