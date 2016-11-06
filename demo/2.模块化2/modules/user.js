function user (id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this.name+'在说话!');
    }
}
module.exports= user;
