angular.module("MyApp")
    .factory('vetDevFactory', vetDevFactory);

vetDevFactory.$inject = ['$http'];


function vetDevFactory($http) {

    return {
        getEmails: function(category) {
            category = category ? "/" + category : " ";
            return $http.get("/api/emails" + category);
        },

        createEmail: function(emailData) {
            return $http.post("/api/emails", emailData);
        },

    }
}
