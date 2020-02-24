module.exports = function repeater(str, options) {
    let addition = String(options.addition);
    let repeatTimes = parseInt(options.repeatTimes);
    let separator = options.separator;
    let additionRepeatTimes = parseInt(options.additionRepeatTimes);
    let additionSeparator = options.additionSeparator;
    let result = '';
    
    str = String(str);
    
    if (typeof options.separator == 'undefined') { separator = '+'; }
    if (typeof options.additionSeparator == 'undefined') { additionSeparator = '|'; }
    
    if (typeof options.addition == 'undefined') {
       result = (str + separator).repeat(repeatTimes);
       result = result.substring(0, result.length - separator.length);
       return result;
    }
    
    if (typeof options.repeatTimes == 'undefined' || typeof options.additionRepeatTimes == 'undefined') {
      addition = (options.addition + additionSeparator).repeat(1);
      addition = addition.substring(0, addition.length - additionSeparator.length);
      
      result = (str + addition + separator).repeat(1);
      result = result.substring(0, result.length - separator.length);
      return result;
    } else {
      addition = (options.addition + additionSeparator).repeat(additionRepeatTimes);
      addition = addition.substring(0, addition.length - additionSeparator.length);
  
      result = (str + addition + separator).repeat(repeatTimes);
      result = result.substring(0, result.length - separator.length);
      return result;
    }
  };  