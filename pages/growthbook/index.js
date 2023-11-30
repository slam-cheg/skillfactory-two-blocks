

const GrowthBook = window.growthbook.GrowthBook;
const prepareCookie = window.getCookie("_ga").split(".");
const currentUserID = `${prepareCookie[2]}.${prepareCookie[3]}`;

const gb = new GrowthBook({
    apiHost: "https://growthbook.skillfactory.tech:444",
    clientKey: "sdk-d8PoEsUNNQOPh2wK",
    
    // Enable easier debugging during development
    enableDevMode: false,
    
    // Update the instance in realtime as features change in GrowthBook
    subscribeToChanges: true,
    
    // Targeting attributes
    attributes: {
        "id": currentUserID,
        "url" : "https://skillfactory.ru/page40710938.html"
    },
    
    // Only required for A/B testing
    // Called every time a user is put into an experiment
    trackingCallback: (experiment, result) => {
        console.log(experiment, result)
        if(result.key == 1) {
            window.location.replace("https://skillfactory.ru");
        }
    },
});

// Wait for features to be available
async function initGrowthbook() {
    await gb.loadFeatures();
    
    if (gb.isOn("feature-test")) {
        console.log("Feature is enabled!")
    } else {
        console.log("Feature is disabled!")
    }
}


initGrowthbook();