// onclick="checkCredentials()"
//onclick="resetModel();"
document.getElementById("send").addEventListener("click",checkCredentials);
document.getElementById("forgot-password").addEventListener("click",resetModal);

/**
 * this method is use getCookie to decoded login input field value
 * @param cookieName 
 * @returns
 */
function getCookie(cookieName) {
	  var name = cookieName + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i <ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}
/**
 * to set the cookie name and cookie value
 * @param cookieName
 * @param cookieValue
 * @returns
 */
// function setCookie(cookieName, cookieValue) {
// 	  document.cookie = cookieName + "=" + cookieValue+";max-age=604800;";
// 	}

// if(getCookie("rememberCheck")=="true"){
// 	//setCookie("decptUserDetails","");
// 	$("#customCheck").prop('checked', true); 
// 	$("#agencyCodeMain").val(getCookie("agencyCodeMain"));
// 	$("#userAlias").val(getCookie("userAlias"));
	
// }else{
// 	//setCookie("decptUserDetails","");
// 	$("#customCheck").prop('checked', false);
// 	$("#agencyCodeMain").val("");
// 	$("#userAlias").val("");
// 	$("#password_password").val("");
// }

// function myInputCache(){
// 	if ($('#customCheck').is(':checked')) {
//         // save agencyCodeMain and userAlias
//     	setCookie("rememberCheck", "true");
//     	setCookie("agencyCodeMain", $('#agencyCodeMain').val());
//     	setCookie("userAlias", $('#userAlias').val());
//     } else {
//     	//alert("rememberCheck value is false")
//     	setCookie("rememberCheck", "false");
//     	setCookie("agencyCodeMain", "");
//     	setCookie("userAlias", "");
//     }
// }

function getContextPath(){
	  var contextPath = document.location.pathname;
	  return contextPath.substring(0,contextPath.indexOf('/', 1));
}

$("#userAlias").keyup(function(evt) {
		var code = evt.which ? evt.which : event.keyCode;
		 if(code != 37 && code != 39)
		       $(this).val($(this).val().replace(/\s/g, ""));
	});

	$("#agencyCodeMain").keyup(function(evt) {
		var code = evt.which ? evt.which : event.keyCode;
		 if(code != 37 && code != 39)
		       $(this).val($(this).val().replace(/\s/g, ""));
	});
	
	let clicks = 0;
	let timerInterval;
	
	function resetModal() {
	  clicks++;
	  if (clicks >= 1) {
		$("#forgot-password").css("pointer-events", "none");
		$("#myModal").modal('hide'); // hide the modal if it's already open
		$("#timer").css("display", "block"); // show the timer element
		let remainingTime = 60;
		$("#timer").text(`Please wait for ${remainingTime} seconds before trying again.`);
		timerInterval = setInterval(function() {
		  remainingTime--;
		  $("#timer").text(`Please wait for ${remainingTime} seconds before trying again.`);
		  if (remainingTime === 0) {
			clearInterval(timerInterval);
			$("#forgot-password").css("pointer-events", "all");
			$("#timer").css("display", "none"); // hide the timer element
			clicks = 0; // reset the clicks variable to 0
		  }
		}, 1000);
	  }
	}


		$("#send").show();
	    $("#processing").hide();
		$("#agencyCode").val('');
        $("#emailId").val('');
        $("#resetPassErrorDiv").html("");
      	$("#resetPassErrorDiv").hide();
	
	var contextPath=getContextPath();
    function checkCredentials() 
    {     
          var result="";
	      // $("#reset-password-modal").show();
	      var agencyCode=$("#agencyCode").val();
          var email=$("#emailId").val();
          agencyCode=agencyCode.trim();
          email=email.trim();
          
          if(agencyCode=='')
          {
          	// $("#modal_reset").find("p").html("Please Enter Agency Code.");
          	$("#resetPassErrorDiv").html("Please Enter Agency Code.");
          	$("#resetPassErrorDiv").show();
          	// $("#reset-password-modal").modal('show');
		  	return false;
          }
          else if(email==''){
	         // $("#modal_reset").find("p").html("Please Enter Email Id.");
			 // $("#reset-password-modal").modal('show');
			 $("#resetPassErrorDiv").html("Please Enter Email Id.");
          	 $("#resetPassErrorDiv").show();
			 return false;
          }else{
        	  $("#resetPassErrorDiv").html("");
        	  $("#send").hide();
        	  $("#processing").show();
        	}
          $.ajax({
			type : "GET",
			url : contextPath + '/login/checkCredentials',
		    data : {
		    	agencyCode : agencyCode,
		    	emailId : email
			},
			success : function(result){
			result=result.trim();
			if(result.indexOf("administrator")>0){
					$("#forgot-password-modal").modal('show');
				    $("#send").show();
		        	$("#processing").hide();
				    $("#resetPassErrorDiv").html("Sorry, Your account is not authorized. Please contact to your administrator.");
		          	$("#resetPassErrorDiv").show();
                    }
			  else if(result!=''){
				    // $("#modal_reset").find("p").html('Wrong Details, please
					// re-enter to continue');
				    $("#forgot-password-modal").modal('show');
				    $("#send").show();
		        	$("#processing").hide();
				    $("#resetPassErrorDiv").html("Wrong Details, please re-enter to continue.");
		          	$("#resetPassErrorDiv").show();
				}
                else{
					$("#forgot-password-modal").modal('hide');
					$("#modal_reset").find("p").html("A reset password link has been sent to you via email. If you don't see this email in your inbox within 5 minutes, look for it in your junk mail folder.");
				    $("#reset-password-modal").modal('show');
                }
            }
            
          });
         
          
          $("#emailId").val('');
          $("#agencyCode").val('');
    }
   /**
    * this function is use to setCookie input value
    * @returns
    */
   /* $(function() {
        $('#customCheck').click(function() {
            if ($('#customCheck').is(':checked')) {
                // save agencyCodeMain and userAlias
            	setCookie("rememberCheck", "true");
            	setCookie("agencyCodeMain", $('#agencyCodeMain').val());
            	setCookie("userAlias", $('#userAlias').val());
            } else {
            	//alert("rememberCheck value is false")
            	setCookie("rememberCheck", "false");
            	setCookie("agencyCodeMain", "");
            	setCookie("userAlias", "");
            }
        });
    });
    */
   /**********************/     
 	   $.fn.dPassword = function(options) {

 	      var defaults = {
 	         interval:      0,
 	         duration:      0,
 	         replacement:   '%u25CF',
 	         prefix:        'password_',
 	         debug:  			false
 	      }

 	      var opts    = $.extend(defaults, options);
 	      var checker = new Array();
 	      var timer   = new Array();
 	     getId = function(id) {
 	         var pattern = opts.prefix+'(.*)';
 	         var regex = new RegExp(pattern);
 	         regex.exec(id);
 	         id = RegExp.$1;
 	         
 	         return id;
 	      } 
 	   
 	      setPassword = function(id, str) {
 	    
 	         var tmp = '';
 	         for (i=0; i < str.length; i++) {
 	            if (str.charAt(i) == unescape(opts.replacement)) {
 	               tmp = tmp + $('#' + id).val().charAt(i);
 	            }
 	            else {
 	               tmp = tmp + str.charAt(i);
 	            }
 	         }
 	         $('#' + id).val(tmp);
 	      }
 	      
 	       
 	      
 	      convertLastChar = function(id) {
 	         if ($('#' + opts.prefix + id).val() != '') {
 	            var tmp = '';
 	            for (i=0; i < $('#' + opts.prefix + id).val().length; i++) {
 	               tmp = tmp + unescape(opts.replacement);
 	            }
 	   
 	            $('#' + opts.prefix + id).val(tmp);
 	         }
 	      } 
 	     check = function(id, oldValue, initialCall) {
	         if (opts.debug) console.log('check: [' + id + ']');
	         
	         var bullets = $('#' + opts.prefix + id).val();

	         // if (oldValue != bullets) {
	            setPassword(id, bullets);
	            if (bullets.length > 1) {
	               var tmp = '';
	               for (i=0; i < bullets.length-1; i++) {
	                  tmp = tmp + unescape(opts.replacement);
	               }
	               tmp = tmp + bullets.charAt(bullets.length-1);
	   
	               $('#' + opts.prefix + id).val(tmp);
	            }
	            else {
	            }
	            clearTimeout(timer[id]);
	           timer[id] = convertLastChar( id)
	            // timer[id] =setTimeout("convertLastChar('" + id + "')",
				// opts.duration);
	        // }
	         if (opts.debug) {
	         	$('#debug_' + opts.prefix + id).text($('#' + id).val());
	         }
	         if (!initialCall) {
	        	 checker[id] =setTimeout(function(){
	        		 check( id , $('#' + opts.prefix + id).val(), false)
	        	 }, opts.interval);
				}
	      }
 	     var funSetTime=function(id,status1,status2,int){
	    	  check(id,status1,status2);
	      }
 	      $(this).each(function() {
 	         if (opts.debug) console.log('init [' + $(this).attr('id') + ']');

 	         // get original password tag values
 	         var name        = $(this).attr('name');
 	         var id          = $(this).attr('id');
 	         var cssclass    = $(this).attr('class');
 	         var value       = $(this).attr('value');

 	         // set timers
 	         checker.push(id);
 	         timer.push(id);

 	         // hide field
 	         // $(this).hide();
 	         // add new text field
 	         /*
				 * $(this).after(' <input name="" ' + 'id="' + (opts.prefix +
				 * id) + '" ' + 'type="text" ' + 'value="' + value + '"
				 * autocomplete="off" placeholder="Password" ' + (cssclass != '' ?
				 * 'class="' + cssclass + '"' : '') + '/>');
				 */
 	         
 	         // bind event
 	         $('#' + opts.prefix + id).bind('focus', function(event) {
 	            if (opts.debug) console.log('event: focus [' + getId($(this).attr('id')) + ']');
 	            clearTimeout(checker[getId($(this).attr('id'))]);
 	            // checker[getId($(this).attr('id'))] = setTimeout("check('" +
				// getId($(this).attr('id')) + "', '')", opts.interval);
 	           checker[getId($(this).attr('id'))] =funSetTime(getId($(this).attr('id')),'','',opts.interval);
 	         });
 	         $('#' + opts.prefix + id).bind('blur', function(event) {
 	            if (opts.debug) console.log('event: blur [' + getId($(this).attr('id')) + ']');
 	            clearTimeout(checker[getId($(this).attr('id'))]);
 	         }); 
 	         funSetTime(id,'',true,opts.interval);
 				// setTimeout("check('" + id + "', '', true);", opts.interval);
 	      });

 	      
 	   };
 	$(document).ready(function(){
 		 $('#password').dPassword();
 		 // $('#password').hide();
 	 	})
 	 	
// window.onload = function () {
// sessionStorage.removeItem("isSamePage");
//
// if (typeof history.pushState === "function") {
// history.pushState("jibberish", null, null);
// window.onpopstate = function () {
// history.pushState('newjibberish', null, null);
//               
// };
// }
// else {
// window.location.hash="no-back-button";
// window.location.hash="Again-No-back-button";
//        
// }
// window.onhashchange=function(){window.location.hash="no-back-button";}
// }