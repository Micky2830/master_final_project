// display URL
document.getElementById('url').innerHTML = "URL: " + window.location.href

// display domain name
document.getElementById('hostname').innerHTML = "Hostname: " + window.location.hostname

// Display the path and filename of the current page
document.getElementById('pathname').innerHTML = "Pathname: " + window.location.pathname;

// Display the web protocol used (http or https)
document.getElementById('protocol').innerHTML = "Protocol: " + window.location.protocol;


// Display the web port
document.getElementById('port').innerHTML = "Port: " + window.location.port;


// Function to prompt the user for navigation
function promptNavigation(){
    const userConfirmation = window.confirm("Do you want to navigate to the new website?")
    if(userConfirmation){
        window.location.assign('https://www.youtube.com/');
        alert("You have successfully navigated to the new website")
    }
    else{
        alert("You stay at current page")
    }
}
