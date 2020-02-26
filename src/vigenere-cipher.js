class VigenereCipheringMachine {
    constructor(flag = true) {
        this.direct = flag;
    }

    encrypt(message, key) {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw new Error();
            }

            if (typeof message == 'undefined' || typeof key == 'undefined') { throw new Error(); }

            var encryptedChar = '';
            
            message = message.toUpperCase();
            key = key.toUpperCase();
            
            for ( let i = 0, j = 0; i < message.length; i++, j++) {
                if ( j == key.length) { j = 0; }
                if ( message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 && key.charCodeAt(j) >= 65 && key.charCodeAt(j) <= 90 ) {
                    encryptedChar += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j) - 130) % 26 + 65);
                } else { 
                  encryptedChar += message[i];
                  j--;
                }  
            }

            let encryptedCharRev = encryptedChar.split('').reverse().join('');
            return this.direct ? encryptedChar : encryptedCharRev;
    }

    decrypt(encryptedMessage, key) {
        if(typeof encryptedMessage == 'undefined' || typeof key == 'undefined') {
            throw new Error();
        }

        var decryptedStr = '';
            
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        
        for ( let i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
            if ( j == key.length) { j = 0; }
            if ( encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90 && key.charCodeAt(j) >= 65 && key.charCodeAt(j) <= 90 ) {
                decryptedStr += String.fromCharCode((encryptedMessage.charCodeAt(i) - key.charCodeAt(j) + 26) % 26 + 65);
            } else { 
                decryptedStr += encryptedMessage[i];
              j--;
            }  
        }

        let decryptedStrRev = decryptedStr.split('').reverse().join('');
        return this.direct ? decryptedStr : decryptedStrRev;
    }
}

module.exports = VigenereCipheringMachine;