var company = (function() {
	var companyObj = {
		footerPosition:function(){
			//var cwh = $("div[class*='-page-wrapper']").height();
			//$("div[class*='-page-wrapper']").height(cwh);
			var fh = $("footer").height();
			var cwh = $(".company-wrapper").height();
			var dh = $(document).height();
			var wh = $(window).height();

			var cwp = $("#cw-page").height();
			//alert(cwp);
			//$("footer").css("top",h);
		},
		loginPage:function(){
			var loginPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){

					//------- show the placeholder as a label form form fields

					$(".form-wrap .fw input").on("keyup",function() {
						if($(this).val() != ''){
							$(this).parent("div").addClass("focus");
						}else{
							$(this).parent("div").removeClass("focus");
						}
					});
				}
			};
			return loginPagePropertiesWrap.init();
		},
		registerPage:function(){
			var registerPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){
					setTimeout(function() {
        				$('#infoStatus').html("");
        		    }, 5000);
					
					//------- show the placeholder as a label form form fields

					/*$(".form-wrap .fw input").on("keypress",function() {
						if($(this).val() != ''){
							$(this).parent("div").addClass("focus");
						}else{
							$(this).parent("div").removeClass("focus");
						}
					});

					$(".form-wrap select").on("change",function() {
						if($(this).val() != ''){
							$(this).parents("div[data-label]").addClass("focus");
						}else{
							$(this).parents("div[data-label]").removeClass("focus");
						}
					});*/

					//----- .our-partners-swiper

					var mySwiper = new Swiper ('.our-partners-swiper .swiper-container', {
						slidesPerView:"auto",
					    // Navigation arrows
					    nextButton: '.swiper-button-next',
					    prevButton: '.swiper-button-prev',
					});


					//----- .happy-customers-swiper

					var mySwiper = new Swiper ('.happy-customers-swiper .swiper-container', {
						slidesPerView:1,
					    // Navigation arrows
					    nextButton: '.swiper-button-next',
					    prevButton: '.swiper-button-prev',
					});
				}
			};
			return registerPagePropertiesWrap.init();
		},
		aboutUsPage:function(){
			var aboutUsPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){


				}
			};
			return aboutUsPagePropertiesWrap.init();
		},
		servicesPage:function(){
			var servicesPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){

					$(".st-head li").on("click",function() {

						$(".st-head li").removeClass("active");

						$(".st-body .st-tab-content").addClass("hidden");
						$(this).addClass("active");

						var thisDataId = $(this).attr("data-id");

						$(".st-body #"+thisDataId).removeClass("hidden");

					});

				}
			};
			return servicesPagePropertiesWrap.init();
		},
		newsMediaPage:function(){
			var newsMediaPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){

					var mySwiper = new Swiper ('.swiper-container', {
					    // Optional parameters
					    direction: 'vertical',
						// And if we need scrollbar
    		 			scrollbar: '.swiper-scrollbar',
						scrollbarHide:false,
						autoHeight:true
				    })

				}
			};
			return newsMediaPagePropertiesWrap.init();
		},
		faqsPage:function(){
			var faqsPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){

					$(".tw-head li").on("click",function() {

						$(".tw-head li").removeClass("active");

						$(".tw-body .twb").addClass("hidden");
						$(this).addClass("active");

						var thisDataId = $(this).attr("data-id");

						$(".tw-body #"+thisDataId).removeClass("hidden");

					});

					$(".tw-body li .q").on("click",function(){
						$(this).toggleClass("showAns");
						$(this).next(".a").toggleClass("hidden");
					});

				}
			};
			return faqsPagePropertiesWrap.init();
		},
		contactUsPage:function(){
			var contactUsPagePropertiesWrap = {
				init:function(){
					companyObj.footerPosition();
					this.afterLoad();
				},
				afterLoad:function(){
					var editor = new wysihtml5.Editor("textarea", {
				      	toolbar:      "toolbar",
				      	//stylesheets:  "css/wysihtml5-0.3.0.css",
				      	parserRules:  wysihtml5ParserRules
				    });

				    var log = document.getElementById("log");

				    editor
			      	.on("load", function() {
			        	log.innerHTML += "<div>load</div>";
			      	})
			      	.on("focus", function() {
			        	log.innerHTML += "<div>focus</div>";
			      	})
			      	.on("blur", function() {
			        	log.innerHTML += "<div>blur</div>";
			      	})
			      	.on("change", function() {
			        	log.innerHTML += "<div>change</div>";
			      	})
			      	.on("paste", function() {
			        	log.innerHTML += "<div>paste</div>";
			      	})
			      	.on("newword:composer", function() {
			        	log.innerHTML += "<div>newword:composer</div>";
			      	})
			      	.on("undo:composer", function() {
			        	log.innerHTML += "<div>undo:composer</div>";
			      	})
			      	.on("redo:composer", function() {
			        	log.innerHTML += "<div>redo:composer</div>";
			      	});
				    
				    var filesize = 5*1024*1024;
					$("#attach-a-file").on("change",function() {
						if(this.files[0].size > filesize){
				    	       $('div.file_error').text("You can upload file of 5 MB maximum.");
				    	       $(this).val("");
				    	}else{
				    		var filename = $(this).val();
				    		if((filename.toLowerCase().lastIndexOf(".Jpg".toLowerCase())>0) || filename.toLowerCase().lastIndexOf(".Jpeg".toLowerCase())>0 ||
				    			filename.toLowerCase().lastIndexOf(".DOC".toLowerCase())>0 || filename.toLowerCase().lastIndexOf(".DOCX".toLowerCase())>0 ||
				    			filename.toLowerCase().lastIndexOf(".TXT".toLowerCase())>0 || filename.toLowerCase().lastIndexOf(".PDF".toLowerCase())>0 ||
				    			filename.toLowerCase().lastIndexOf(".xlsx".toLowerCase())>0 || filename.toLowerCase().lastIndexOf(".xls".toLowerCase())>0
				    		    ){
				    			
					    		$('div.file_error').text("");
					    		$('div.select-file-btn').hide();
					    		$(this).parent().prev(".attached-files-list").append("<span class='af'>"+$(this).val()+"<i class='fa fa-times' onclick='deleteImage()'></i></span>");
				    			
				    		}else{
				    			$("div.file_error").html('Supported formats are jpg, jpeg, doc, docx, txt, pdf, xlsx, xls')	
					    	    $(this).val("");
				    		}
				    	}					
					});
				}
			};
			return contactUsPagePropertiesWrap.init();
		},
		footPrintsPage:function(){
			var cityArray = [];
			var footPrintsPagePropertiesWrap = {
				init:function(){
					this.afterLoad();
				},
				initializeMap:function(x,y){

					var mapProp = {
				        center: new google.maps.LatLng(x,y), //LLANDRINDOD WELLS
				        zoom:2,
						mapTypeControl: false,
						streetViewControl:false,
				        mapTypeId: google.maps.MapTypeId.ROADMAP
				    };
					var infowindow = new google.maps.InfoWindow();
				    map = new google.maps.Map(document.getElementById("locations"), mapProp);

					$.getJSON("json/footPrintsData.json",function(data){
					    $.each(data, function (k, v) {
					        var latLng = new google.maps.LatLng(v.latitude, v.longitude);
					        var marker = new google.maps.Marker({
					            position: latLng,
					            map: map,
					            // icon: icon,
					            title: data.title
					        });

							var city = v.title,continent=v.continent,img=v.img,address=v.address;

							var arr = [{
								city:v.title,
								continent:v.continentId,
								img:v.img,
								address:v.address
							}];

					        footPrintsPagePropertiesWrap.bindInfoWindow(marker, map, infowindow, arr);

							if(v.countryId == ""){
								$("#continents-list").append("<li id='"+v.continentId+"' class='continent'> <span>"+v.title+"</span><ul class='countries-list' id='in-"+v.continentId+"'></ul></li>");
							}
							for(i in v.countries){
								$("#continents-list ul#in-"+v.continentId).append("<li class='country'><span>"+v.countries[i]+"</span></li>");
							}
							$("#continents-list .countries-list li").each(function(){
								if(v.country == $(this).text()){
									$(this).attr({"id":v.countryId,"data-continent":v.continentId,"data-latitude":v.latitude,"data-longitude":v.longitude,"data-image":v.img,"data-address":v.address});
								}
							});

					    });

					});
				},
				showMap:function(x,y){

					var mapProp = {
				        center: new google.maps.LatLng(x,y), //LLANDRINDOD WELLS
				        zoom:4,
						mapTypeControl: false,
						streetViewControl:false,
				        mapTypeId: google.maps.MapTypeId.ROADMAP
				    };
					var infowindow = new google.maps.InfoWindow();
				    map = new google.maps.Map(document.getElementById("locations"), mapProp);

					$.getJSON("json/footPrintsData.json",function(data){
					    $.each(data, function (k, v) {
					        var latLng = new google.maps.LatLng(v.latitude, v.longitude);
					        var marker = new google.maps.Marker({
					            position: latLng,
					            map: map,
					            // icon: icon,
					            title: data.title
					        });

							var city = v.title,continent=v.continent,img=v.img,address=v.address;

							var arr = [{
								city:v.title,
								continent:v.continentId,
								img:v.img,
								address:v.address
							}];

					        footPrintsPagePropertiesWrap.bindInfoWindow(marker, map, infowindow, arr);
					    });

					});
				},
				bindInfoWindow:function(marker, map, infowindow, detailsArr) {
				    google.maps.event.addListener(marker, 'click', function () {
				        //infowindow.setContent(strDescription);
				        //infowindow.open(map, marker);
						$(".location-details").empty();
						for(i in detailsArr){
							var ldHtml = "<div id='img-wrap'><img src='images/footprints/"+detailsArr[i].img+"'/></div><div id='l-name'><label id='l-continent'>"+detailsArr[i].continent+"</label><p id='l-city'>"+detailsArr[i].city+"</p></div><div id='l-address'><label>Location</label><p>"+detailsArr[i].address+"</p></div>";
							$(".location-details").append(ldHtml);
						}


				    });
				},
				afterLoad:function(){
					x =  8.7832, y = 34.5085;
					google.maps.event.addDomListener(window, 'load', this.initializeMap(x,y));

					$(document).on("click",".country",function(){

						var this_lat = $(this).attr("data-latitude"),
						this_long = $(this).attr("data-longitude"),
						this_img = $(this).attr("data-image"),
						this_address = $(this).attr("data-address"),
						this_continent = $(this).attr("data-continent"),
						this_city = $(this).text();

						$(".location-details img").attr("src","images/footprints/"+this_img);
						$(".location-details #l-continent").text(this_continent);
						$(".location-details #l-city").text(this_city);
						$(".location-details #l-address").text(this_address);

						footPrintsPagePropertiesWrap.showMap(this_lat,this_long);


					});

				}
			};
			return footPrintsPagePropertiesWrap.init();
		}

	};

	return companyObj;
})();

/*$(".submit_btn").click(function(){
	$(this).hide();
	$("#processing").attr("disabled", "disabled");
	$("#processing").show();
});*/

function deleteImage(){
	$('div.select-file-btn').show();
	$('#attach-a-file').val("");
	$('span.af').remove();
	$('div.file_error').text("");
}

var stateData = stateJson;
var cityData = cityJson;
$('#countryDrop').on('change', function (e) {
    var countryId = this.value;
    //console.log("valueSelected "+countryId);
    $('#stateDrop').empty();
    $('#cityDrop').empty();
    var targetState = $('#stateDrop');
    targetState.append($('<option></option>').val("").html("Select State"));
    var targetCity = $('#cityDrop');
    targetCity.append($('<option></option>').val("").html("Select City"));
    if(countryId !==null && countryId!=""){
    	if(stateData !=null && stateData !=""){
    		stateData.forEach(function(state){
    			if(state.countryId==countryId){    				
    				$("<option value="+state.stateId+">" + state.stateName + "</option>").appendTo(targetState);
    			}
      		});	
    	}    	
    }
});

$('#stateDrop').on('change', function (e) {
	console.log("test");
    var stateId = this.value;
    $('#cityDrop').empty();
    var targetCity = $('#cityDrop');
    targetCity.append($('<option></option>').val("").html("Select City"));
    if(stateId !==null && stateId!=""){
    	if(cityData !=null && cityData !=""){
    		var targetCity = $('#cityDrop');
    		//"<option value="">Select City</option>".appendTo(targetCity);
    		
    		cityData.forEach(function(city){
    			if(city.stateId==stateId){
    				$("<option value="+city.cityId+">" + city.cityName + "</option>").appendTo(targetCity);
    			}
    		});	
    	} 
    }   
});

$(document).ready(function() {
	
	if(RegStatusMsg!=""){
			$("#regisrtation-request-modal").modal({
			show : true,
		});
	}
	var selectedCountryId=$("#countryDrop").val();
	if(selectedCountryId!=undefined && selectedCountryId!=""){
		selectedStateList(selectedCountryId);
		selectedCityList(selectedStateId);
	}
		
    $(".only-numeric").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
             
        if (!(keyCode >= 48 && keyCode <= 57)) {
          return false;
        }
    });
    
    $(".only-numeric-and-minus-operator").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
        if(keyCode!=45){
        	if(keyCode >= 48 && keyCode <= 57){
        		return true;
        	}else if((keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123)){
        		return true;
        	}else{
        		return false;
        	}
        }
    });
    
    $(".only-numeric-and-minus-plus-operator").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
        if(keyCode!=45 && keyCode!=43){    
        	if (!(keyCode >= 48 && keyCode <= 57)) {
        		return false;
        	}	
        }
    });
    var countryJosn=[];
    var countryListNew=countryJosn; //JSON.parse(nationalityList);
	var items=[];
	$("#countryDrop").val(67)
	$.map(countryListNew, function(item) {
		if ((null != item.phoneNo && item.phoneNo.indexOf("+20")>=0)){
			$("#phoneCode_1").val(item.phoneNo);
			$("#phoneCode_2").val(item.phoneNo);
			
		}
	});
	var targetState = $('#stateDrop');
	stateData.forEach(function(state){
		if(state.countryId==67){
			if(state.stateId==selectedStateId){
				$("<option selected='selected' value="+state.stateId+">" + state.stateName + "</option>").appendTo(targetState);
			}else{
				$("<option value="+state.stateId+">" + state.stateName + "</option>").appendTo(targetState);
			}	
		}
		});	
    $(document).on('keydown','.autoSuggestCode',function(e){
		if($(this).val().length==0 || e.keyCode == 8 ){
			$(this).val('');
			$(this).next().val('');
			$(this).parent().find("i").removeAttr('class');
			$(this).removeClass("abcd");
		}

		var currentId=$(this).attr('id');
		$('.autoSuggestCode').autocomplete({
			minLength:0,
			source: function(request, response) {
				var countryList=countryJosn; //JSON.parse(nationalityList);
				var items=[];
				/*$.map(countryList, function(item) {
					if (item.countryName.toLowerCase().myStartsWith(request.term.toLowerCase()) == true || item.countryCode.toLowerCase().myStartsWith(request.term.toLowerCase()) == true) {
						items.push({
						  label: item.countryName, // Set the display lebel for the searched list of company names which we're getting from server side coding.
						  value: item.phoneNo, // Set the raw value of each shown items.
						  others: item.countryCode.toLowerCase(),
						});
					}
				});*/
				var countryListNew=countryJosn; //JSON.parse(nationalityList);
				var items=[];
				$.map(countryListNew, function(item) {
					if (null != item.phoneNo && ((null != item.phoneNo && item.phoneNo.indexOf(request.term) > -1)|| item.countryName.toLowerCase().indexOf(request.term.toLowerCase()) > -1|| item.countryCode.toLowerCase().indexOf(request.term.toLowerCase()) > -1)){
						items.push({
						  label: item.countryName, // Set the display lebel for the searched list of company names which we're getting from server side coding.
						  value: item.phoneNo, // Set the raw value of each shown items.
						  others: item.countryCode.toLowerCase(),
						});
					}
				//	}
				});
				var _dp_id = parseInt(currentId.match(/\d+$/));
				var selectitem= $("#phoneCode_"+_dp_id). val();
			
				if(items.length>0 ){
					response(items);
					$("#phoneCodeError_"+_dp_id).removeClass('margin-nation').html("");
				}
				else{
					$("#"+currentId).val("+20");
					//$("#phoneCodeError_"+_dp_id).addClass('margin-nation').html("Select value from the autosuggestion.");
					$("#phoneCode_"+_dp_id).val("+20");
					$("#"+currentId).parent().find("i").removeAttr('class');
					$("#"+currentId).removeClass("abcd");
				}
				 
				
				$('.ui-autocomplete').height('auto');
				
			},
			select: function(event, ui) {
					var _dp_id = parseInt(currentId.match(/\d+$/));
					$("#phoneCodeError_"+_dp_id).html("");
					var country_name = ui.item.label;
					var country_code = ui.item.value;
					var flag=ui.item.others;
					$(this).val(country_code);
					$(this).next().val(country_code);
					$(this).parent().find("i").removeAttr('class');
					$(this).parent().find("i").addClass("new_i flagstrap-icon flagstrap-"+flag).attr('style','display:block;');
					$(this).addClass("abcd");
					$(this).autocomplete("close");
				
				return false;
			},
			create : function(){
				$(this).data("ui-autocomplete")._renderItem = function(ul, item) {
					ul.addClass("countryCode-autocomplete")
					return $("<li>")
						.data("ui-autocomplete-item", item)
						.append("<div><i class='flagstrap-icon flagstrap-"+item.others+"' aria-hidden='true' style='margin-right:3%;'></i>" + item.label + " "+item.value+"</div>")
						.appendTo(ul);
				};
			}
		})/*.data("ui-autocomplete")._renderItem = function(ul, item) {
			ul.addClass("countryCode-autocomplete")
			return $("<li>")
				.data("ui-autocomplete-item", item)
				.append("<div><i class='flagstrap-icon flagstrap-"+item.others+"' aria-hidden='true' style='margin-right:3%;'></i>" + item.label + " "+item.value+"</div>")
				.appendTo(ul);
		};*/
	
	//----- for accordion effect in the summary section
	
	$('.autoSuggestCode').blur(function() {
			var currentId=$(this).attr('id');
			var _dp_id = parseInt(currentId.match(/\d+$/));
			var nationalityCode =$(this).next().val().trim();
			if(nationalityCode !="" && nationalityCode !=null)
			{
				var keyword = $(this).val().trim();
    		    var isFound = false;
    		    var countryListNew=countryJosn;
    		    $.map(countryListNew, function(item) {
    			if (item.phoneNo == keyword) {
    				//if(nationalityCode =="")
    				isFound = true;
    				$("#phoneCode_"+_dp_id).val(item.phoneNo);
    				
    			}else{	
    				isFound = false;	
				}
    		});
    		
    		if (!isFound) {
    			$("#phoneCodeError_"+_dp_id).removeClass('margin-nation').html("");
    			return true;
    		} else {
    			//$("#phoneCodeError_"+_dp_id).addClass('margin-nation').html("Select value from the autosuggestion.");
    			$("#phoneCode_"+_dp_id).val("+20");
				$("#"+currentId).parent().find("i").removeAttr('class');
				$("#"+currentId).removeClass("abcd");
    			return false;
    		}
		}
		else
		{
			//$("#phoneCodeError_"+_dp_id).addClass('margin-nation').html("Select value from the autosuggestion.");
			$("#phoneCode_"+_dp_id).val("+20");
			$("#"+currentId).parent().find("i").removeAttr('class');
			$("#"+currentId).removeClass("abcd");
    		return false;
		}
	}); 
	
	});
    
  });

function selectedStateList(countryId) {
	  if(countryId !==null && countryId!=""){
	    		var targetState = $('#stateDrop');
	    		stateData.forEach(function(state){
	    			if(state.countryId==countryId){
	    				if(state.stateId==selectedStateId){
	    					$("<option selected='selected' value="+state.stateId+">" + state.stateName + "</option>").appendTo(targetState);
	    				}else{
	    					$("<option value="+state.stateId+">" + state.stateName + "</option>").appendTo(targetState);
	    				}	
	    			}
	      		});		
	   }  
}

function selectedCityList(stateId) {
	  if(stateId !==null && stateId!=""){
		  var targetCity = $('#cityDrop');
	    		cityData.forEach(function(city){
	    				if(city.stateId==stateId && city.countryId==selectedCountryId){
	    					if(city.cityId==selectedCityId){
	    						$("<option selected='selected' value="+city.cityId+">" + city.cityName + "</option>").appendTo(targetCity);
	    					}else{
	    						$("<option value="+city.cityId+">" + city.cityName + "</option>").appendTo(targetCity);
	    					}
	    				}
	    		});	
	   }  
}

function validAgencyName(id){
	 var name = $("#"+id).val();
	 var regex='';
	 var msg='';
	 if(id=='companyName'){
		 regex= /^[a-zA-Z]*[ .&]?[a-zA-Z]*/;
		 msg="Only alphabets are allowed and in between only one space or one dot or one &  is permitted ";
	 }
	 else{
		 regex= /^(\s{0,1}\.{0,1}[a-zA-Z]+)+$/;
		 msg="Only alphabets are allowed and in between only one space or one dot  is permitted ";
	 }
	// var regex = /^(\s{0,1}\.{0,1}[a-zA-Z]+)+$/;
   if (regex.test(name)) {
  	 $("#Error"+id).html("");
      return true;
   }else{
	   $("#Error"+id).html(msg);
	   $("#Error"+id).focus();
	   agencyCech=false;
	   return false;
   }
   //$("#"+id).val('');
  
   //e.preventDefault();
  
}

function isValidEmail(emailText) {
	var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
	return emailPattern.test(emailText);
}

function validEmail(){
 var emailText = $("#email").val();
 if (!isValidEmail(emailText)) {
		$("#Erroremail").html("Please type correct email")
		return false;
	} else {
		$("#Erroremail").html("")
	}
}

function validCompnyUrl(){
	$('#ErrorcompanyUrl').html('');
	var url = $('#companyUrl').val();
	if(url!=undefined && url!=""){
		var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
		var regex = new RegExp(expression); 
		if (!url.match(regex)) {
			$('companyUrl').focus();
			$('#ErrorcompanyUrl').html('Please Enter Valid Url');
			return false;
		}
	}else{
		$('#ErrorcompanyUrl').html('');
	}	
}

$('#registerPage').submit(function(event) {
	
	 $(".submit_btn").prop("disabled", true);
	var errorUrlMsg = $('#ErrorcompanyUrl').html();
	if(errorUrlMsg!=undefined && errorUrlMsg !=""){
		$('#companyUrl').focus();
		$(".submit_btn").prop("disabled", false);
		return false;
	}
});


