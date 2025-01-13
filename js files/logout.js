function logout(){
    sessionStorage.setItem('loggedInUser','')
    sessionStorage.setItem('loggedIn-status', false)
    window.location.href = `/pages/home.html?`;
}