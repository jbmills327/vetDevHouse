angular.module("MyApp")
    .controller("MainCtrl", mainController);


mainController.$inject = ["$http", "vetDevFactory"];



// vetlaunchfactory
function mainController($http, vetDevFactory) {
    var main = this;

    main.greeting = "This is working yo";

    main.emailList = [];
    main.emailUser = {};

    main.newUser = {};

    // This is the get call to get the users from the database
    main.mailRecipients = function(category) {
        vetDevFactory.getEmails(category)
            .then(function(returnData) {
                if (returnData.data.length) {
                    console.log("This is the returndata: ", returnData.data);
                    main.emailList = returnData.data;
                    // main.inventoryList.push(returnData.data);
                    console.log("This is main.inventoryList", main.inventoryList);
                } else {
                    main.emailUser = returnData.data;
                    // main.newEditImages = returnData.data.imageUrl.join();
                }
            }).catch(function(err) {
                console.log("This is the error: ", err);
            });
    }

    // This is to add a user to the mailing list
    main.mailUser = function() {
        vetDevFactory.createEmail(main.newUser)
            .then(function(err, returnData) {
                if (err) {
                    console.log("This is the error", err);
                } else {
                    console.log("This is the return data", returnData);

                }

            })

        main.newUser = {};
    }


}
