function getData(url, method, data, cb){
    
    var returnedData = {};
    var error = undefined;
    
    $.ajax({
        url: url,
        data: data,
        type: method,
        dataType: 'json',   
    })
    
    .done(function(json){
        returnedData = json;
    })
    
    .fail(function(xhr, status, error){
        console.log("Error");
        console.log("Status", status);
        console.log("xhr", xhr);
    })
    
    .always(function(xhr, status){
        cb(error, returnedData);
    })
}

getData("/tweets", "GET", {}, function(error, data){
    if(error){
        console.log("error from ajax");
    } else if (data) {
        var feed = '<li>' + data + '</li>'
        $('#feed').append(feed);
    }
})

module.exports = router;