function add () {
    const val=document.querySelector("#input").value
    //val=`'${val} '`
    dataset.push(val)
    console.log(dataset)
    //dataset.forEach(function (url){ console.log(url)})
}
document.querySelector("#input").addEventListener("change", add)

const dataset=[

]
const Handler=()=>{ 
   document.querySelector("#download-720-MP4").click()
}
const start=(url)=>{
    document.querySelector("#selectbox-value").innerText='.mp3'
    document.querySelector("#select_main > div > ul:nth-child(1) > li:nth-child(2) > a").className='audio-format active'
    document.getElementById('texturl').value=url
    //document.getElementById('texturl').textContent=url;
   // console.log(document.getElementById('#texturl').textContent)
    const music=document.querySelector("#convert1")
    music.click()
}
const combi=(url)=>{
    start(url) 
    setTimeout(Handler, 2000)
}
dataset.forEach(function (url){
 console.log(url);
  //  combi(url)
})



