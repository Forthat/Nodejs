var user = require('./user');
function student(id,name,age){
    user.apply(this,[id,name,age]);
    this.work = "student";
    this.study = function (res){
        res.write(this.name+'爱学习');
    }
}
module.exports = student;
