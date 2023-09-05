async function fetchFunction(){
    let response = await fetch('/data.json');

    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        } else {
        alert("HTTP-Error: " + response.status);
    }
}

fetchFunction();
