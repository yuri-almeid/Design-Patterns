class Resource {
    constructor() {
        console.log("Connecting Resource..." )
        
    }
  
    static getInstance() {
      if (!this.instance) {
        this.instance = new Resource();
      }
  
      return this.instance;
    }
}
  
let res1 = Resource.getInstance();
let res2 = Resource.getInstance();
  
console.log(res1 === res2);
  