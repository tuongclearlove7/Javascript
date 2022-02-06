/**
break & continue in loop
 */
// break
for(var i =0; i < 10; i++)
{
    console.log(i);
    if(i>=5){//điều kiện
        break;
    }
}

//continue

for(var i =0; i < 10; i++){
    if (i%2 !==0){//điều kiện bỏ các số lẻ từ 0 đến 10
        continue;
    }
    console.log(i);
}

































