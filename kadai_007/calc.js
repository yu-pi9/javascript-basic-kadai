//変数の宣言・値の代入
let num = Math.floor(Math.random() * 50)

if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}else if (num % 3 === 0) {
    console.log('3の倍数です');
}else if (num % 5 === 0) {
    console.log('5の倍数です');
}else{
    console.log(num)
}