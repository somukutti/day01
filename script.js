var request= new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
 request.onload=function(){
     var data=JSON.parse(request.response);
         // console.log(data) 
          let res=data.filter((ele)=>ele.population<100000)
          console.log(res)
        }










