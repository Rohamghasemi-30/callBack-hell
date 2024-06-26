let users = [];
let idGet = document.querySelector("#idGet");
let idPreparing = document.querySelector("#idPreparing");
let idDone = document.querySelector("#idDone");
let idgetUserData = document.querySelector("#idgetUserData");

function getUserData(food, drink, callback) {
    setTimeout(() => {
        idGet.innerText = (`Customer's Order: ${food}, ${drink}`);
        callback();
    }, 1000);
}

function Get() {
    setTimeout(() => {
        idPreparing.innerText = "Order Taken"

    }, 3000);
}

function Preparing() {
    setTimeout(() => {
        idDone.innerText = "Preparing and delivering to the customer"
        
    }, 6000);
}

function Done() {
    setTimeout(() => {
        idgetUserData.innerText = "Orders delivered to customer"

    }, 9000);
}

getUserData("Pizza", "Water", () => {
    Get();
    Preparing();
    Done();
});
