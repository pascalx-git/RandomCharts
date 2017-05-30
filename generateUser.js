//Get Random User Function from https://randomuser.me
function getRandomUsers(n) {
    "use strict";
    var randUsers = [];
    for (var i = 0; i < n; i++){
        $.ajax({
            url: 'http://api.randomuser.me/',
            dataType: 'json',
            success: function (data) {
                randUsers.push(data);
            }
        });
    }
    console.log(randUsers);
}
