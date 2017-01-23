var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      $("#test").bind( "click", function(event, ui) {
        $.ajax({
            type       : "POST",
            url        : "http://192.168.43.125/siakad/simala/index.php/auth/set_mode_kunci",
            crossDomain: true,
            beforeSend : function() {$.mobile.loading('show')},
            complete   : function() {$.mobile.loading('hide')},
            success    : function(response) {
            //console.error(JSON.stringify(response));
            alert('Works!');
            },
            error      : function() {
            //console.error("error");
            alert('Now working!');
            }
        });
      });
    }
};
