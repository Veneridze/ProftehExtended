/*chrome.storage.sync.set({ "yourBody": "myBody" }, function () {
    alert("Настройки сохранены");
}); 


chrome.storage.sync.get(["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});*/

function changeSetting(e) {
    alert("test");
    console.log(e);
}