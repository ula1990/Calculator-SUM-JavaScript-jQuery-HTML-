jQuery('document').ready(function(){
	
/// jQuery('button').on('click',function(){ result with button <button>Calculate (SUM )</button> in HTML
	
	jQuery('input').on('keyup',function(){
 var value1, value2, value3

 value1 = jQuery('#val1').val();
 value2 = jQuery('#val2').val();

 value1 = parseInt(value1);
 value2 = parseInt(value2);

 
 value3 = value1 + value2;
 //alert('Result is' + ' ' + value3); for button
 jQuery('#1').html('Result' +' '+ value3);

 });

});
