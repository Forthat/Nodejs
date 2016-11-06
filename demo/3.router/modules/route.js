function login(res){
    res.write('登录页面')
}
function register(res){
    res.write('注册页面');
}
module.exports = {
    login:login,
    register:register
};
