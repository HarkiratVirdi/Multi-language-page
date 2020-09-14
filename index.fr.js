if (location.hash === "#fr") {
  console.log(dataReload);

  var language = {
    fr: {
      welcome: "Bonjour, Je m'appelle Harkirat Singh Virdi",
    },
  };

  if (window.location.hash) {
    if (window.location.hash === "#fr") {
      hi.textContent = language.fr.welcome;
    }
  }
}
