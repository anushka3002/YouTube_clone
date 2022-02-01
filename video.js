 // const APIS="AIzaSyC8GxKciFs2WL2B4dSDxvx3Qtzx3pc8wNI";
 const APIR="AIzaSyDWSt2KeKOG_TXP2vl6Xcm56YCgO9dzEBE";
 const APIA="AIzaSyAtVxkVXw6RN6LURTIlKJU5EexlkCEfVsQ";
 const result_div=document.getElementById("results_div");
//main content
 async function searchVideo(){
     document.querySelector("#results_div").innerHTML=""
     try{
         let video_query=document.querySelector("#video").value;
         
     let response=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_query}&type=video&key=${APIR}`)
     let data=await response.json();
     let videos=data.items;
     appendVideos(videos);
     console.log("data:",data)
 }
 catch(e){
     console.log("e:",e);
 }


 function myFunc(x){
     if(x.matches){
         // thumbnail.style.width="25%";
         document.querySelector("#smallvidbox").style.display="none"
         
     }
     else{
         document.querySelector("#smallvidbox").style.display="block"
     }
 }
 var x=window.matchMedia("(max-width:820px)")
 myFunc(x)
 x.addListener(myFunc)

}


const appendVideos=(items)=>{
 items.forEach(({snippet,id:{videoId}})=>{
     console.log("snippet:",snippet)
     var channelId=document.createElement("h3");
     channelId.style.fontSize="12px";
     var thumbnail=document.createElement("img");
     thumbnail.src=snippet.thumbnails.high.url;
     thumbnail.style.height="250px";
     thumbnail.style.width="100%";
     channelId.textContent=snippet.channelTitle;
     var title=document.createElement("p");
     title.style.fontSize="13px";
     title.style.color="rgb(71, 66, 66)";
     title.textContent=snippet.title;
     var bigbox=document.createElement("div");
     let data_to_send={
     snippet,
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
 window.location.href="video.html"
}
//main content




//favourite
showthem();
async function showthem(){
 document.querySelector("#favourite").innerHTML=""
     try{
     let response=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=latest_songs&type=video&key=${APIR}&maxResults=20`)
     let data=await response.json();
     let videos=data.items;
     appendfavourite(videos);
     console.log("data:",data)
 }
 catch(e){
     console.log("e:",e);
 }
}

const appendfavourite=(items)=>{
 items.forEach(({snippet,id:{videoId}})=>{
     console.log("snippet:",snippet)
     var channelId=document.createElement("p");
     channelId.style.fontSize="14px";
     channelId.style.color="rgb(71, 66, 66)";
     var about=document.createElement("div");
     var thumbnail=document.createElement("img");
     thumbnail.src=snippet.thumbnails.high.url;
     thumbnail.style.height="100%";
     thumbnail.style.width="60%";
     thumbnail.style.marginRight="8px";
     channelId.textContent=snippet.channelTitle;
     var title=document.createElement("h3");
     title.style.fontSize="12px";
     title.textContent=snippet.title;
     about.append(title,channelId)
     var bigbox=document.createElement("div");
     bigbox.style.display="flex";
     bigbox.style.marginBottom="8px";
     bigbox.style.width="100%";
     bigbox.style.height="100px";
     let data_to_send={
     snippet,
     videoId
     }
     bigbox.onclick=()=>{
     showVideo(data_to_send)
     }
     bigbox.append(thumbnail,about)
     document.querySelector("#favourite").append(bigbox);

//for ipad
     function myFunc(x){
     if(x.matches){
         thumbnail.style.width="25%";
         // document.querySelector("#smallvidbox").style.display="none"
         
     }
     else{
         thumbnail.style.width="60%";
     }
 }
 var x=window.matchMedia("(max-width:820px)")
 myFunc(x)
 x.addListener(myFunc)



 
 });
 };
 //favourite


 let {videoId}=JSON.parse(localStorage.getItem('clicked_video'))
 let video_div=document.getElementById('results_div');
 let iframe=document.createElement('iframe');
 iframe.src=`https://www.youtube.com/embed/${videoId}`
 iframe.width="100%"
 iframe.height="80%"
 iframe.setAttribute("allowfullscreen","true")
 let memory=JSON.parse(localStorage.getItem('clicked_video'))
 var title=document.createElement("p")
 title.style.fontSize="17px";
 var boxlike=document.createElement("div");
 boxlike.style.height="90%";
 boxlike.style.width="5%";
 boxlike.style.marginTop="13px";
 boxlike.style.marginRight="5px";
 boxlike.style.display="flex"
 var likecount=Math.ceil(Math.random()*300000)+"views";
 // likecount.style.marginRight="5px";
 // like.style.marginTop="10px"
 var bitcoin=document.createElement("div");
 bitcoin.style.width="100%";
 bitcoin.style.height="5%";
 bitcoin.style.display="flex";
 var like=document.createElement("img");
 like.src="https://www.freeiconspng.com/thumbs/like-icon-png/like-icon-0.png";
 like.style.width="25px";
 like.style.height="25px";
 like.style.marginLeft="15%";
 like.style.marginTop="10px"
 like.style.marginRight="4px"
 var l=document.createElement("h4");
 l.textContent="LIKE";
 l.style.marginRight="5%";
 l.style.fontSize="13px";
 var dislike=document.createElement("img");
 dislike.src="https://www.clipartmax.com/png/middle/202-2029895_dislike-clipart-icon-facebook-dislike-button-png.png";
 dislike.style.width="25px";
 dislike.style.height="25px";
 dislike.style.marginTop="10px"
 dislike.style.marginRight="4px"
 var d=document.createElement("h4");
 d.textContent="DISLIKE";
 d.style.marginRight="5%";
 d.style.fontSize="13px";
 var share=document.createElement("img");
 share.src="https://toppng.com/uploads/preview/share-png-file-share-icon-free-download-1156313309811bbndeiii.png";
 share.style.width="25px";
 share.style.height="25px";
 share.style.marginTop="10px"
 share.style.marginRight="4px"
 var s=document.createElement("h4");
 s.textContent="SHARE";
 s.style.marginRight="5%";
 s.style.fontSize="13px";
 var t=document.createElement("h4");
 t.textContent="THANKS";
 t.style.marginRight="5%";
 t.style.fontSize="13px";
 var save=document.createElement("img");
 save.src="https://uxwing.com/wp-content/themes/uxwing/download/32-video-photography-multimedia/watch-later.png";
 save.style.width="25px";
 save.style.height="25px";
 save.style.marginTop="10px"
 save.style.marginRight="4px"
 var sa=document.createElement("h4");
 sa.textContent="SAVE";
 sa.style.marginRight="5%";
 sa.style.fontSize="13px";
 var dot=document.createElement("img");
 dot.src="https://www.svgrepo.com/show/68522/more-with-three-dots-button.svg";
 dot.style.width="25px";
 dot.style.height="25px";
 dot.style.marginTop="10px"
 var dt=document.createElement("h4");
 title.textContent=memory.snippet.title;
 boxlike.append(likecount);
 bitcoin.append(boxlike,like,l,dislike,d,share,s,t,save,sa,dot)
 video_div.append(iframe,title,bitcoin)



 // for android
 // function myFunc2(x2){
 //     if(x2.matches){
 //         iframe.style.width="160%";
 //         // document.querySelector("#smallvidbox").style.display="none"
         
 //     }
 //     else{
 //         iframe.style.width="60%";
 //     }
 // }
 // var x2=window.matchMedia("(max-width:400px)")
 // myFunc(x2)
 // x2.addListener(myFunc2)




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
