/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/**this code loads the google API map when the website is loaded I copyed it from googles website  */
async function initMap() {
    console.log("Maps JavaScript API loaded.");
  }
  
  window.initMap = initMap;
/**this code is a timer that sets opacity of text on page 1 to 0 after 10 seconds */
window.onload = function() {
  const text = document.getElementById("fade");
  setTimeout(() => {
    text.style.opacity = 0;
  }, 10000); 
};