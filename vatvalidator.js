/***
* VatValidator
* Webismymind
*
*/

function VatValidator() {
  this.debug=false;
}

/**
 * Verifies that a VAT code is valid. 
 * param vat_code: number to check
 * callback : method called when response received.
 */ 
VatValidator.prototype.validate = function(vat_code,callback) {

  if ( vat_code.trim() == '' ) callback(false);


  var country = vat_code.trim().substr(0, 2);
  var number = vat_code.trim().substr(2).replace(/[^0-9a-zA-Z]/g, '').toUpperCase();

  if ( this.debug ) {
    console.log("country : "+country+ " - number "+number);
  }

  if ( this.debug )
    console.log('http://isvat.appspot.com/' + country + '/' + number + '/?callback=? ');

  $.getJSON('http://isvat.appspot.com/' + country + '/' + number + '/?callback=?', function(response) { callback(response); });


}
