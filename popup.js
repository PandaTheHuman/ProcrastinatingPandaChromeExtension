function runSwitchjs() {
  chrome.tabs.executeScript({
    file: 'switch.js'
  });
}

document.getElementById('startbutton').addEventListener('click', runSwitchjs);