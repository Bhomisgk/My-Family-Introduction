var member=["Me","My Sister","My Father" , "My Mother"];
var images=["bhoomi.jpg","sister.jpg", "father.jpg" , "mummy.jpg"];
var i=0;
function update(){
    var total= 44
    if (i>=total){
        i=0;
    }
        var uimage= images[i];
        var umemeber=member[i];
        document.getElementById("image1").src=uimage;
        document.getElementById("h4tag").innerHTML=umemeber;
        i++;
    


}