// এটা ফর লুপ এবং এর ভিতরে ভেরিয়েবল সহ সবকিছু রাখা যায় 
for (var i = 0; i < 10; i++){
    console.log(i);
}

// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের এলিমেন্ট কে বের করা সম্বব
var numbers = [33, 44, 11, 13, 10, 18, 19, 22];
for(var myindex = 0; myindex < 8; myindex++){
    var findenumbers = numbers[myindex];
    console.log(findenumbers)
}


// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের সব এলিমেন্ট কে বের করা যায়
var numbers = [33, 44, 11, 13, 10, 18, 19, 22, 42, 100];
for(var myindex = 0; myindex < numbers.length; myindex++){
    var findenumbers = numbers[myindex];
    console.log(findenumbers)
}


// এটা ফর লুপ এবং একটি ভেরিয়েবল এর ভিতরের সব এলিমেন্ট কে বের করা যায় এবং চাইলে নিদ্রিস্ট ইন্ডেক্সে ব্রেক ও করা যায়
var model = ['w68', 'w45', 'v75', 'v85', 'v95', 'v45'];
for(var is = 0; is < model.length; is++){
    var finde = model[is];
    if(finde == 'v95'){
        break;
    }
    console.log(finde)
}