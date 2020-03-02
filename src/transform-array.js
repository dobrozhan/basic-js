module.exports = function transform(arr) {

    if (Array.isArray(arr)) {
 
          arr.forEach( item => {
             item = '--double-next';
             if ( arr.indexOf(item) == arr.length - 1 ) { arr.splice(arr.indexOf(item), 1) };
             if ( arr.indexOf(item) != -1 && arr.indexOf(item) != arr.length - 1 ) { 
                 let nextItemIndex = arr.indexOf(item) + 1;
                 arr.splice(arr.indexOf(item), 0, arr[nextItemIndex]);
                 arr.splice(arr.indexOf(item), 1);
             };
         } );
 
         arr.forEach( item => {
             item = '--double-prev';
             if ( arr.indexOf(item) == 0 ) { arr.splice(arr.indexOf(item), 1) };
             if ( arr.indexOf(item) != -1 && arr.indexOf(item) != 0 ) { 
                 let prevItemIndex = arr.indexOf(item) - 1;
                 arr.splice(arr.indexOf(item)-1, 0, arr[prevItemIndex]);
                 arr.splice(arr.indexOf(item), 1);
             };
         } );
      
              arr.forEach( item => {
             item = '--discard-next';
             if ( arr.indexOf(item) == arr.length - 1 ) { arr.splice(arr.indexOf(item), 1) };
             if ( arr.indexOf(item) != -1 && arr.indexOf(item) != arr.length - 1 ) { arr.splice(arr.indexOf(item), 2) };
         } );
 
         arr.forEach( item => {
             item = '--discard-prev';
             if ( arr.indexOf(item) == 0 ) { arr.splice(arr.indexOf(item), 1) };
             if ( arr.indexOf(item) != -1 && arr.indexOf(item) != 0 ) { arr.splice(arr.indexOf(item)-1, 1); arr.splice(arr.indexOf(item), 1); };
          } );
     
         return arr;
 
     } else {
         throw new Error();
     }
 };