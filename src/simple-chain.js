const chainMaker = {

    chain: [],
    
    getLength() {
        this.chain.length;
        return this;
      },
    
    addLink(value) {
      if (arguments.length == 0) {
        this.chain.push('( )');
        return this;
      } else {
        this.chain.push(`( ${value} )`);
        return this;
      }
      },

    removeLink(position) {
      if (position < 1 || position > this.chain.length || Number.isInteger(position) == false) {
        this.chain = [];
        throw new Error('not passed'); 
      } else {
        this.chain.splice(position - 1, 1);
        return this;
      }
    },
  
    reverseChain() {
      this.chain.reverse();
      return this;
    },
  
    finishChain() {
      var string = this.chain.join('~~');
      this.chain = [];
      return string;
    }
};

module.exports = chainMaker;