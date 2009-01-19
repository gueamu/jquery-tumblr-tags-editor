/**
 * jquery.tumblertags 0.1. tumbler inspired tag editor
 *
 * Copyright (c) 2009 Christof Haemmerle (reco@nex9.com)
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * >> Basically you can do anything you want but leave this header as is <<
 *
 */

(function ($) {

  $.fn.tumblertags = function () {
    return this.each(function () {
      var $tabwrapper = $(this);
      var $inputField = $tabwrapper.find('input')
  
      // conlick focus input field
      $tabwrapper.click(function(){
        $inputField.focus();
      });
  
      // when pressing the returnkey, wraping the text of input field in a span and prepend it to the input field.
      $inputField.keypress(function(e, keyCode){
        keyCode = keyCode || e.keyCode;
        if (keyCode == 13) {
          $newTag = $('<span class="tag">' + $inputField.val() + '<a href="#" title="remove tag">x</a></span>');
          $inputField.val('');
          $newTag.insertBefore($inputField).find('a').click(function() {
            $(this).parent().remove();
          }); 
        };
      });
      
    });
  };

})(jQuery);