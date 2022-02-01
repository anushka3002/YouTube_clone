 // const APIS="AIzaSyC8GxKciFs2WL2B4dSDxvx3Qtzx3pc8wNI";
 const APIR="AIzaSyDWSt2KeKOG_TXP2vl6Xcm56YCgO9dzEBE";
 const APIA="AIzaSyAtVxkVXw6RN6LURTIlKJU5EexlkCEfVsQ";
 const result_div=document.getElementById("search_results");

 document.querySelector("#useryt").innerHTML=""

 async function searchVideo(){
     document.querySelector("#results_div").innerHTML=""
     try{
         let video_query=document.querySelector("#video").value;
         
     let response=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_query}&type=video&key=${APIR}&maxResults=20`)
     let data=await response.json();
     let videos=data.items;
     appendVideos(videos);
     console.log("data:",data)
 }
 catch(e){
     console.log("e:",e);
 }
}       

showthem();
async function showthem(){
 document.querySelector("#results_div").innerHTML=""
     try{
     let response=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=programming&type=video&key=${APIR}&maxResults=20`)
     let data=await response.json();
     let videos=data.items;
     appendVideos(videos);
     console.log("data:",data)
 }
 catch(e){
     console.log("e:",e);
 }
}


const appendVideos=(items)=>{
 items.forEach(({snippet,id:{videoId}})=>{
     console.log("snippet:",snippet)
     var channelId=document.createElement("h3");
     channelId.style.fontSize="13px";
     var thumbnail=document.createElement("img");
     thumbnail.src=snippet.thumbnails.high.url;
     thumbnail.style.height="200px";
     thumbnail.style.width="100%";
     channelId.textContent=snippet.channelTitle;
     var title=document.createElement("p");
     title.style.fontSize="12px";
     title.style.color="rgb(71, 66, 66)";
     title.textContent=snippet.title;
     var bigbox=document.createElement("div");
     let data_to_send={
     snippet,
     title,
     videoId
     }
     bigbox.onclick=()=>{
     showVideo(data_to_send)
     }

     bigbox.append(thumbnail,channelId,title)
     document.querySelector("#results_div").append(bigbox);
 });
 };

function showVideo(data){
 localStorage.setItem('clicked_video',JSON.stringify(data))
 window.location.href="video.html";
}


let useryt=JSON.parse(localStorage.getItem('usernameyt'))
var naming=document.querySelector("#useryt")
var login="login";

if(useryt==null){
 naming.append(login)
 console.log("naming")
}
else{
 naming.append(useryt)
}