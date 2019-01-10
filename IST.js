// filter criteria
var searchLocations = ["CT", "NJ", "NY", "PA"];
var arrLength = searchLocations.length;

var results = document.getElementById("resultsCol");
var organicJobs = results.querySelectorAll('[data-tn-component="organicJob"]');

// retrieve location of each job and suppress all listings outside of filter criteria
for (let job of organicJobs) {
    let jobLocation = job.getElementsByClassName("companyInfoWrapper")[0].getElementsByClassName("location")[0].textContent;

    for (var i = 0; i < arrLength; i++) {
        if (jobLocation.indexOf(searchLocations[i]) != -1) {
            break;
        }
        else if ((jobLocation.indexOf(searchLocations[i]) == -1) && (i == arrLength-1)) {
            job.style.display = "none";
        }
    }
}

// change background color of sponsored job listings
var sponsoredJobs = results.getElementsByClassName(" sponsoredGray ");

for (let job of sponsoredJobs) {
    job.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "#C0C0C0";
}