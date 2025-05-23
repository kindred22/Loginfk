var contextPath = getContextPath();

function getContextPath() {
    var contextPath = document.location.pathname;
    return contextPath.substring(0, contextPath.indexOf('/', 1));
}

var path = contextPath+'/static/js/';
document.write('<script type="text/javascript" src="'+path+'core/jquery-2.1.4.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'core/jquery-ui.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/jquery.ui.autocomplete.scroll.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/bootstrap.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/jquery.dataTables.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/swiper.jquery.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/nouislider.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/wNumb.js"></script>');
document.write('<script type="text/javascript" src="'+path+'common.js"></script>');
document.write('<script type="text/javascript" src="'+path+'angular.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/ng-knob.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/Chart.min.js"></script>');
document.write('<script type="text/javascript" src="'+path+'vendor/d3.min.js"></script>');
document.writeln("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js'></script>");
document.writeln("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css' />");



