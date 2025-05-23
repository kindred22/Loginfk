var branches = [];
var currentFocus = -1;
var isbranchSearched = false;
$(function() {
	setTimeout(function(){
		$('#textarea-wrapper').find('textarea').next().next().contents().find('.wysihtml5-editor').keydown(function(event){
			var text =  $('#textarea-wrapper').find('textarea').next().next().contents().find('.wysihtml5-editor').text();
			var textLength = text.length;
			if(textLength>500 && event.which!=8){
				return false;
			}
		}); 
	},500);
});

$(document).ready(function() {	
    $.ajax({
        url: contextPath + '/contactUs/getUniqueBranch',
        type: "POST",
        contentType: "application/json",
        dataType: "text",
        success: function(result) {
            var obj = JSON.parse(result);
            for (k in obj) {
                branches.push(obj[k]);
            }
        }
    });

    $('#searchBranch').click(function() {
        var searchTerm = $('#myInput').val();

        $.ajax({
            url: contextPath + '/contactUs/getBranch/' + searchTerm,
            type: "POST",
            contentType: "application/json",
            dataType: "text",
            success: function(result) {
                var obj = JSON.parse(result);

                $('#branchAddress').text("");
                $('#branchAddress').append($('<p>').text(((obj.address != null && obj.address != "") ? obj.address : '')));
                $('#branchAddress').append($('<p>').text(((obj.address2 != null && obj.address2 != "") ? obj.address2 : '')));
                $('#branchAddress').append($('<p>').text('P.O Box : ' + ((obj.zipcode != null && obj.zipcode != "") ? obj.zipcode : '')));
                $('#branchAddress').append($('<p>').text(((obj.cityName != null && obj.cityName != "") ? obj.cityName : '')));
                $('#branchAddress').append($('<p>').text(((obj.stateName != null && obj.stateName != "") ? obj.stateName : '') + " , " + ((obj.countryName != null && obj.countryName != "") ? obj.countryName : '')));

                var emailId = ((obj.email != null && obj.email != "") ? obj.email : 'infoodeysys@odeysys.com');
                $('#mailTo').val(emailId);
                $('#admin').val(obj.admin);
                $('#branch').val(obj.branchName);

                $('#branchContact').text("");
                $('#branchContact').append($('<p>').text('FAX: ' + ((obj.fax != null && obj.fax != "") ? obj.fax : 'NA')));
                $('#branchContact').append($('<p>').text('TEL: ' + ((obj.phone != null && obj.phone != "") ? obj.phone : 'NA')));
                $('#branchContact').append($('<p>').text('EMAIL: ').append('<a href="mailto: ' + emailId + '">' + emailId + '</a>'));

            
                var position = {lat: parseFloat(obj.latitude), lng: parseFloat(obj.longitude)};
  			  	var map = new google.maps.Map(
  			  			document.getElementById('map'), {zoom: 4, center: position});
  			  	var marker = new google.maps.Marker({position: position, map: map});
            }
        });
        
        isbranchSearched = true;
    });

    $("#myInput").autocomplete({
        minLength: 0,
        autoFocus: true,
        source: function(request, response) {
            var items = [];
            $.each(branches, function(key, value) {
                if (value.substr(0, request.term.length).toUpperCase() == request.term.toUpperCase()) {
                    items.push({
                        label: "<strong>" + value.substr(0, request.term.length) + "</strong>" + value.substr(request.term.length) ,
                        value: value
                    });
                }
            });
            response(items);
        },
        select: function(event, ui) {
            closeAllLists();
        }
    }).data("ui-autocomplete")._renderItem = function(ul, item) {
        ul.addClass("ui-autocomplete-contactus");
        return $("<li>")
            .data("ui-autocomplete-item", item)
            .append("<div>" + item.label + "</div>")
            .appendTo(ul);

    };

    $(document).on("click", function(e) {
        closeAllLists(e.target);
    });
});

function plotAllBranches(){
	emptyContactDetails();
	isbranchSearched = false;
	$("#loader").modal('show');
	$.ajax({
        url: contextPath + '/contactUs/getAllBranches',
        type: "POST",
        contentType: "application/json",
        dataType: "text",
        success: function(result) {
        	$("#loader").modal('hide');
            var obj = JSON.parse(result);
            var egypt = {lat: 26.8206, lng: 30.8025};
           // var uae = {lat: 25.1093154, lng: 55.183897};
			var map = new google.maps.Map(
			  document.getElementById('map'), {zoom: 4, center: egypt});
            
            for (k in obj) {
                var position = {lat: parseFloat(obj[k].latitude), lng: parseFloat(obj[k].longitude)};
    			var marker = new google.maps.Marker({position: position, map: map});
    			marker.set('orgId', obj[k].id);
    			marker.set('address',obj[k].address);
    			marker.set('address2',obj[k].address2);
    			marker.set('zipcode',obj[k].zipcode);
    			marker.set('cityName',obj[k].cityName);
    			marker.set('stateName',obj[k].stateName);
    			marker.set('countryName',obj[k].countryName);
    			marker.set('email',obj[k].email);
    			marker.set('admin',obj[k].admin);
    			marker.set('branchName',obj[k].branchName);
    			marker.set('fax',obj[k].fax);
    			marker.set('phone',obj[k].phone);
    			
    			marker.addListener('click', function() {
    				 $("#orgId").val(this.get('orgId'));
    				
    		         $('#branchAddress').text("");
    	             $('#branchAddress').append($('<p>').text(((this.get('address') != null && this.get('address') != "") ? this.get('address') : '')));
    	             $('#branchAddress').append($('<p>').text(((this.get('address2') != null && this.get('address2') != "") ? this.get('address2') : '')));
    	             $('#branchAddress').append($('<p>').text('P.O Box : ' + ((this.get('zipcode') != null && this.get('zipcode') != "") ? this.get('zipcode') : '')));
    	             $('#branchAddress').append($('<p>').text(((this.get('cityName') != null && this.get('cityName') != "") ? this.get('cityName') : '')));
    	             $('#branchAddress').append($('<p>').text(((this.get('stateName') != null && this.get('stateName') != "") ? this.get('stateName') : '') + " , " + ((this.get('countryName') != null && this.get('countryName') != "") ? this.get('countryName') : '')));

    	             var emailId = ((this.get('email') != null && this.get('email') != "") ? this.get('email') : 'infoodeysys@odeysys.com');
    	             $('#mailTo').val(emailId);
    	             $('#admin').val(this.get('admin'));
    	             $('#branch').val(this.get('branchName'));

    	             $('#branchContact').text("");
    	             $('#branchContact').append($('<p>').text('FAX: ' + ((this.get('fax') != null && this.get('fax') != "") ? this.get('fax') : 'NA')));
    	             $('#branchContact').append($('<p>').text('TEL: ' + ((this.get('phone') != null && this.get('phone') != "") ? this.get('phone') : 'NA')));
    	             $('#branchContact').append($('<p>').text('EMAIL: ').append('<a href="mailto: ' + emailId + '">' + emailId + '</a>'));
    		         
    	             isbranchSearched = true;  
    			});
            }            		  	
        }
    });	
}

function emptyContactDetails(){
    $('#branchAddress').text("");
    $('#mailTo').val("");
    $('#admin').val("");
    $('#branch').val("");
    $('#branchContact').text("");
}

function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != $("myInput")) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

function validateFormData(){
/*	if(!isbranchSearched){
		alert("Branch Selection is mandatory");
		return false;
	}*/
		
	
	var text =  $('#textarea-wrapper').find('textarea').next().next().contents().find('.wysihtml5-editor').text();
	var textLength = text.length;
	
	if(text.length==0){
		$("#errorLength").html('<span style=\"color:red\">Please fill description.</span>');
		return false;
	}
	
	if(text.length > 500){
		$("#errorLength").html('<span style=\"color:red\">Only 500 characters allowed.</span>');
		return false;
	}
}