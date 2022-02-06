/**var a, b, web, myname_crush, white;
a = 100;
b = true
web = "https://tuong-tran.glitch.me/?fbclid=IwAR2pkuHM3dK9d3AkitjSo3vPEEF9n9HVXEIbY6tIAw9WWxAdDPi5jOrmEMA";
myname_crush = ["Tuong","Thao","clearlove7","rose9"];
white = "Clearlove7, rose9"
setInterval(function() {
    console.log(a) 
    console.log(b) 
    console.error(web)
    console.log(myname_crush) 
    console.log(white)
    console.warn({language : "javascript", language2: "python"})
},2000)*/
//setInterval(function() {
/**
var person = {
firstName: 'Tuong',
lastName: 'Thao',
website: 'https://tuong-tran.glitch.me'
}
 
function test() {
    console.table(person);
}

test() 
//},2000)
var language = "javascript";
language2 = "";
setInterval(function() {
    document.write(language+" "+language2)
}, 2000);
     */
/**
var LuaChon;
LuaChon = prompt("Bạn hãy nhập vào một số để mở trang web: ", 1);
switch (LuaChon)
{
case "1" : window.open("https://quantrimang.com"); break;
case "2" : window.open("https://download.com.vn"); break;
case "3" : window.open("https://vndoc.com"); break;
default : window.open("https://meta.vn");
}

/**document.write("button<BR>");
document.write("<BR>");
document.write("<input type=button name=welcome value = 'button' ");
document.write("onclick = 'alert ('Welcome to JavaScript');' > ");
document.write("<input type = text name = msg value = ''>");


//Sử dụng += để nối chuỗi xuất ra trong lệnh innerHTML
/**function Checkdangnhap(event, minKt, maxKt)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var username = document.getElementById('tendn').value;



    if (username == '')

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập ko được để trống ';

    } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập từ 3-10 kí tự ';

    } else mess.innerHTML = 'Tên đăng nhập của bạn là :' + username + '';

}




//Viết bằng jquery

function Checkdangnhap(event, minKt, maxKt) {

    event.preventDefault();

    var mess = $("#errorText");

    var username = $("#tendn").val();

    if (username == '')

    {

        $('tendn').css('background-color', 'yellow');

        mess.html(mess.html() + 'Tên đăng nhập ko được để trống ');

    } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

    {

        $('#tendn').css('background-color', 'yellow');

        mess.html(mess.html() + 'Tên đăng nhập từ 3-10 kí tự ');

    } else mess.html(mess.html() + 'Tên đăng nhập của bạn là :' + username + '');

}




function Checkpass(event)

{

    event.preventDefault();

    var pass = document.getElementById('mk').value;

    var mess = document.getElementById('errorText');

    if (pass == '')

    {

        document.getElementById('mk').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Mật khẩu ko được để trống ';

    } else mess.innerHTML += 'Mật khẩu của bạn là ' + Array(pass.length + 1).join("*") + '';

}

function Checkemail(event)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var letter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var email = document.getElementById('email').value;

    if (email == '')

    {

        document.getElementById('email').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Email ko được để trống ';

    } else if (!email.match(letter))

    {

        document.getElementById('email').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Email nhập sai định dạng';

    } else mess.innerHTML += 'Email của bạn là :' + email + '';



}

function Checknghenghiep(event)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var nghe = document.getElementById('nghenghiep');

    //if(nghe.options[0].selected)

    if (nghe.options['id1'].selected)

    {

        mess.innerHTML += 'Nghề nghiệp chưa được lựa chọn';

    } else mess.innerHTML += 'Nghề nghiệp của bạn là: ' + nghe.options[nghe.selectedIndex].innerText + '';

}

function Checktuoi(event)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var tuoi = document.getElementById('tuoi').value;

    parseInt(tuoi);

    if (tuoi == '')

    {

        document.getElementById('tuoi').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tuổi không được để trống';

    } else if (tuoi < 18 || tuoi > 50)

    {

        document.getElementById('tuoi').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tuổi từ 18-50, vui lòng nhập lại ';

    } else if (isNaN(tuoi))

    {

        document.getElementById('tuoi').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Chỉ cho phép nhập số ';

    } else mess.innerHTML += 'Tuổi của bạn là :' + tuoi;

}

var btndangnhap = document.getElementById('btnDangnhap');

btndangnhap.onclick = function Validate() {

    //Mặc định các lỗi này sẽ ẩn

    var mess = document.getElementById('errorText');

    mess.innerHTML = '';

    //Gọi các hàm đã viết

    Checkdangnhap(event, 3, 10);

    Checkpass(event);

    Checkemail(event);

    Checknghenghiep(event);

    Checktuoi(event);
}
//Viết bằng Jquery
function Checkdangnhap(event, minKt, maxKt) {

    event.preventDefault();

    var mess = $("#errorText");

    var username = $("#tendn").val();

    if (username == '')

    {

        $('#tendn').css('background-color', 'yellow');

        mess.html(mess.html() + 'Tên đăng nhập ko được để trống ');

    } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

    {

        $('#tendn').css('background-color', 'yellow');

        mess.html(mess.html() + 'Tên đăng nhập từ 3-10 kí tự ');

    } else mess.html(mess.html() + 'Tên đăng nhập của bạn là :' + username + '');

}

function Checkpass(event)

{

    event.preventDefault();

    var pass = $('#mk').val();

    var mess = $('#errorText');

    if (pass == '')

    {

        $('#mk').css('background-color', 'yellow');

        mess.html(mess.html() + 'Mật khẩu ko được để trống ');

    } else mess.html(mess.html() + 'Mật khẩu của bạn là ' + Array(pass.length + 1).join("*") + '');

}

function Checkemail(event)

{

    event.preventDefault();

    var mess = $('#errorText');

    var letter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var email = $('#email').val();

    if (email == '')

    {

        $('#email').css("background-color", "yellow");

        mess.html(mess.html() + 'Email ko được để trống ');

    } else if (!email.match(letter))

    {

        $('#email').css("background-color", "yellow");

        mess.html(mess.html() + 'Email nhập sai định dạng');

    } else mess.html(mess.html() + 'Email của bạn là :' + email + '');



}

function Checknghenghiep(event)

{

    event.preventDefault();

    var mess = $('#errorText');

    var nghe = $("#nghenghiep").val();

    if (nghe == '0') {

        mess.html(mess.html() + 'Nghề nghiệp chưa được lựa chọn' + '');

    } else

    {

        mess.html(mess.html() + 'Nghề nghiệp của bạn là: ' + $('option[value=' + nghe + ']').html() + '');

    }

}

function Checktuoi(event)

{

    event.preventDefault();

    var mess = $('#errorText');

    var tuoi = $('#tuoi').val();

    parseInt(tuoi);

    if (tuoi == '')

    {

        $('#tuoi').css("background-color", "yellow");

        mess.html(mess.html() + 'Tuổi không được để trống');

    } else if (tuoi < 18 || tuoi > 50)

    {

        $('#tuoi').css("background-color", "yellow");

        mess.html(mess.html() + 'Tuổi từ 18-50, vui lòng nhập lại' + '');

    } else if (isNaN(tuoi))

    {

        $('#tuoi').css("background-color", "yellow");

        mess.html(mess.html() + 'Chỉ cho phép nhập số' + '');

    } else mess.html(mess.html() + 'Tuổi của bạn là :' + tuoi);

}



btndangnhap.click(function Validate() {

    //Mặc định các lỗi này sẽ ẩn

    var mess = $('errorText');

    mess.html('');

    //Gọi các hàm đã viết

    Checkdangnhap(event, 3, 10);

    Checkpass(event);

    Checkemail(event);

    Checknghenghiep(event);

    Checktuoi(event);



});

var btnXoa = $("#btnXoa");

btnXoa.click(function XoaForm() {

    $("input[type=text], input[type=password], input[type=email").val("");

    $("select").prop('selectedIndex', 0);;

});
*/







