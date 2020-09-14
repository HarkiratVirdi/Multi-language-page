if (window.location.hash === "#eng") {
  var language = {
    eng: {
      welcome: "Hello, I am Harkirat Singh Virdi",
    },
  };

  if (location.hash) {
    if (window.location.hash === "#eng") {
      hi.textContent = language.eng.welcome;
    }
  }
}
