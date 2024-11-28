
let usernames = ["Ashu", "Rishu", "Shiv", "Spa"]
function signup(userName){
for(let i=0;i<=usernames;i++){
    if(usernames[i]==userName){
        return "User Already Regsistered, Please Login"
    }
}
usernames.push(userName)
    return "Signup Sucessfull, Please Login"
}

console.log(signup("Ashu"))
console.log(signup("mistu"))
