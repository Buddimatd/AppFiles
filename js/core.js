// User object
function User(id){
    // Initial properties
    this.UID = id;
    this.userName = "";
    this.email = "";
    this.password = "";
}

// Product object
function Product(id){
    // Initial properties
    this.PID = id;
    this.name = "";
    this.description = "";
    this.category = "";
    this.rating = 0;
}

// Order object
function Order(id){
    // Initial properties
    this.OID = id;
    this.product = "";
    this.date = "";
    this.price = 0;
    this.isComplete = false;
}