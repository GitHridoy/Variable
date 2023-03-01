// এটা হোয়াইল লুপ ভেরিয়েবল যেমন  এর মান বার বার সেট করা সম্ভব
var Rost_Daw = 0;
while(Rost_Daw < 7){
    console.log('Taderke 7 Ta Rost Den')
    console.log(Rost_Daw)
    Rost_Daw++;
    
} 

// এটা হোয়াইল লুপ একই ভেরিয়েবলের মান বার বার সেট করা যায় এবং ব্রেক ও করা যায়
var mobile = 1;
while(mobile < 10){
    console.log('Amake 10 ta mobile den');
    mobile++
    if(mobile > 7){
        break;
    }
}