// Function to extract job details
function extractJobDetails() {
  const jobDetailsContainer = document.querySelector(
    ".job-details-jobs-unified-top-card__container--two-pane"
  );
  if (!jobDetailsContainer) {
    console.error("Job details container not found");
    return null;
  }

  const titleElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__job-title"
  );
  const title = titleElement ? titleElement.textContent.trim() : "";

  const companyLocationElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__primary-description-container"
  );
  const companyLocationText = companyLocationElement
    ? companyLocationElement.textContent.trim()
    : "";
  const [companyName, location, datePosted] = companyLocationText.split(" · ");

  const jobDetailsElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__job-insight.job-details-jobs-unified-top-card__job-insight--highlight"
  );
  const jobDetails = jobDetailsElement
    ? jobDetailsElement.textContent.trim()
    : "";

  const jobDescriptionContainer = document.querySelector(
    ".jobs-description-content__text"
  );
  const jobDescriptionText = jobDescriptionContainer
    ? jobDescriptionContainer.textContent.trim()
    : "";

  console.log("jobDescriptionText", jobDescriptionText);

  const skillsElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__job-insight-text-button"
  );
  const skills = skillsElement ? skillsElement.textContent.trim() : "";

  const url = window.location.href;

  const rawProfileData = {
    title,
    companyName,
    location,
    datePosted,
    jobDescriptionText,
    skills,
    jobDetails,
    url,
  };

  const profileData = {
    companyName: getCleanText(rawProfileData.companyName),
    title: getCleanText(rawProfileData.title),
    url: rawProfileData.url,
    location: getCleanText(rawProfileData.location),
    datePosted: getCleanText(rawProfileData.datePosted),
    jobDescriptionText: getCleanText(rawProfileData.jobDescriptionText),
    skills: getCleanText(rawProfileData.skills),
    jobDetails: getCleanText(rawProfileData.jobDetails),
  };

  return profileData;
}

// Function to clean text
const getCleanText = (text) => {
  const regexRemoveMultipleSpaces = / +/g;
  const regexRemoveLineBreaks = /(\r\n\t|\n|\r\t)/gm;

  if (!text) return null;

  const cleanText = text
    .replace(regexRemoveLineBreaks, "")
    .replace(regexRemoveMultipleSpaces, " ")
    .replace("...", "")
    .replace("See more", "")
    .replace("See less", "")
    .trim();

  return cleanText;
};

// Observer configuration
const observerConfig = {
  childList: true,
  subtree: true,
};

// Callback function for the observer
const observerCallback = function (mutationsList, observer) {
  // Loop through the mutations
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Check if job details are available
      const jobDetails = extractJobDetails();
      if (jobDetails) {
        console.log(jobDetails);
        chrome.runtime.sendMessage({ action: "job", message: jobDetails });
        // Disconnect the observer once job details are extracted
        observer.disconnect();
      }
    }
  }
};

// Target element for the observer
const targetNode = document.querySelector(
  ".job-details-jobs-unified-top-card__container--two-pane"
);

// Create a new observer instance
const observer = new MutationObserver(observerCallback);

// Start observing the target node for changes
observer.observe(targetNode, observerConfig);

// Function to check for URL changes
const checkURLChange = () => {
  let currentURL = window.location.href;

  // Set up a timer to periodically check for URL changes
  setInterval(() => {
    const newURL = window.location.href;

    // If the URL changes, trigger the extraction function
    if (newURL !== currentURL) {
      currentURL = newURL;
      // Disconnect the existing observer before starting a new one
      observer.disconnect();
      observer.observe(targetNode, observerConfig);
    }
  }, 1000); // Check every second
};

// Start checking for URL changes
checkURLChange();
