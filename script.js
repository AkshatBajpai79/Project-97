function checkLink() {
    var urlInput = document.getElementById('urlInput').value;
    var resultElement = document.getElementById('result');

    if (isValidUrl(urlInput)) {
        if (isScamLink(urlInput)) {
            resultElement.style.color = 'red';
            resultElement.textContent = 'This might be a scam link! Proceed with care!!';
            
        } else {
            resultElement.style.color = 'green';
            resultElement.textContent = 'This link seems safe.';
        }
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Invalid URL. Please enter a valid URL.';
       
    }
}

function isValidUrl(url) {
    
    var pattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/.*)?$/i;
    return pattern.test(url);
}

function isScamLink(url) {
    
    var scamKeywords = ['http://', 'ip', 'IP', 'fake', 'crack','redirect','anydesk','teamviewer'];
    return scamKeywords.some(keyword => url.toLowerCase().includes(keyword));
}
