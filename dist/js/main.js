function openUrl(url) {
  // Specify the width and height of the new window
  var newWindowWidth = 600;
  var newWindowHeight = 1080;

  // Calculate the position to center the window on the screen
  var leftPosition = (window.innerWidth - newWindowWidth) / 2;
  var topPosition = (window.innerHeight - newWindowHeight) / 2;

  // Open the new window with the specified size and position
  window.open(
    url,
    "_blank",
    "width=" +
      newWindowWidth +
      ", height=" +
      newWindowHeight +
      ", top=" +
      topPosition +
      ", left=" +
      leftPosition
  );
}
