let imageURLs = [
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://ibw.bwnet.com.tw/ct_column/2020/01/8101a088-4f44-8f75-fb51-d06d9b7982ba_620.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9_g0WrzZ5r-yGkYCZIWv1QCtJ4akP7GHmg&usqp=CAU"
]
let pre_ans = -1

$(function(){
    $("input").on("click",function(){
        //alert("hi")
        let numberofListItem = $("li").length
        let randomNumber = Math.floor(Math.random()*numberofListItem)
        console.log(randomNumber)
        $("h1").text($("li").eq(randomNumber).text())
       // $("img").attr("src",imageURLs[randomNumber])
        console.log("randomnumber",randomNumber)
        console.log("pre_ans",pre_ans)
        if(randomNumber == pre_ans){
            //debugger
            randomNumber = Math.floor(Math.random()*numberofListItem)
            $("h1").text($("li").eq(randomNumber).text())
            $("img").attr("src",imageURLs[randomNumber])
        }
        else{
            $("img").attr("src",imageURLs[randomNumber])
        }
        pre_ans = randomNumber
    })

    
});