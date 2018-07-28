/* eslint-disable */
export default function routing ($httpProvider) {
  // GOOGLE
  GoogleInit()
  function GoogleInit() {
    let auth2
    gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({
        client_id: '634477843209-g930vq5eqfuohn7np4913mhs5jt9a4n8.apps.googleusercontent.com',
        fetch_basic_profile: true,
        scope: 'profile',
      })
    })
    return auth2
  }

  const headerAuth = JSON.parse(window.localStorage.getItem('ngStorage-headerAuth'))
  if (headerAuth) {
    $httpProvider.defaults.headers.common.Authorization = headerAuth
  }
}
