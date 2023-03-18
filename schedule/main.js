$(function(){
   $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

   let topicCount = topic.length;
   let millisecsPerDay = 24*60*60*1000; 
   function holiday(){
      for(let x = 0 ; x < topicCount ; x++){
            if(topic[x]=="停課")
            {
               '<td>${topic[x]}</td>'
            }
            else{
               '<td>${topic[x]}</td>'
            }
      }
      
   }
   
   
   for(let i=0 ; i<topicCount ; i++)
   {
    $("#courseTable").append(
        "<tr>"+
        `<td>${i+1}</td>`+
        `<td>${new Date(startoddDate.getTime()+7*i*millisecsPerDay).toLocaleDateString().substring(5,10)}</td>`+
        `<td>${new Date(startevenDate.getTime()+7*i*millisecsPerDay).toLocaleDateString().substring(5,10)}</td>`+
        "</tr>"


        
        );
   }
});