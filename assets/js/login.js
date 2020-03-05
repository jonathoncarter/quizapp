function onLogin(googleUser) {
  let profile = googleUser.getBasicProfile();
  window.login.textContent = "ID: " + profile.getId() + "<br>"
  + "Full Name: " + profile.getName() + "<br>"
  + "Given Name: " + profile.getGivenName() + "<br>"
  + "Family Name: " + profile.getFamilyName() + "<br>"
  + "Image URL: " + profile.getImageUrl() + "<br>"
  + "Email: " + profile.getEmail(); + "<br>"
}
