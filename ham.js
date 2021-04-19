function alertMessage() {
    alert("xin chào");
}
function so_doi(x) {
    x++;
    return x;
}
function tham_so(){
    let a=+prompt("nhập số thứ nhất:")
    let b=+prompt("nhập số thứ hai")
    let x=a+b;

    if(a>b){
        alert("số thứ nhất lớn hơn số thứ 2")
    }else {
        alert("tổng 2 số là: "+x)
    }



}


