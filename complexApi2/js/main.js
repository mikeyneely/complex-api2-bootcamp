let searchResult = ""
document.querySelector('form').addEventListener('submit',cerca)
// document.querySelector('form').addEventListener('submit')
// each element will have their own event


function cerca(e){
  e.preventDefault()
  // by default form reloads the page
  let artistName = document.querySelector("input").value
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=0a9eb4523d8b519bfda857a49973daeb&format=json`)
  .then(res => res.json())
  .then(response => {
    document.querySelector('#artistAlbum1').src = response.topalbums.album[1].image[3]['#text']
    document.querySelector('#artistAlbum2').src = response.topalbums.album[2].image[3]['#text']
    document.querySelector('#artistAlbum3').src = response.topalbums.album[3].image[3]['#text']
    document.querySelector('#artistAlbum4').src = response.topalbums.album[4].image[3]['#text']
    // document.querySelector('#artistAlbum5').src = response.topalbums.album[5].image[3]['#text']
      console.log('test', response.topalbums.album[2].image[3])

    return response;
  })
  // let mostPlayedSong = getMostPlayedSong(artistName)
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=0a9eb4523d8b519bfda857a49973daeb&format=json`)
    .then(res => res.json())
    .then(response => {
      document.querySelector('#artistBio').textContent = response.artist.bio.content
      // console.log(response.arist.image[0])

  })
}

document.querySelector('form').addEventListener('submit',function(e){

  e.preventDefault()
  artistName = document.querySelector("input").value
  fetch(`https://newsapi.org/v2/everything?q=${artistName}&apiKey=a40fea74983641fabb13322f75329c09`)
  .then(res=> res.json())
  .then(response=>{
    console.log("yoyo",response)
    articlesX = response.articles
    articlesX.forEach((el,i)=> {
      let h3 = document.querySelector("h3")
      let p1 = document.createElement("p")
      let p2 = document.createElement("p")

      p1.appendChild(document.createTextNode(el.title))
      h3.appendChild(p1)

      p2.appendChild(document.createTextNode(el.description))
      h3.appendChild(p2)



    })
})
})
// function imageCerca(e){
//   e.preventDefault()
//   cerca(artistName)
  function getImage(){
    fetch(`https://api.unsplash.com/search/photos?client_id=909b065e37e566a66b7125107fbbdab926db42ccd784eda6dae0078946bdfc91&query=Drake`)
    .then(res => res.json())
    .then(response=>{
      console.log(response)
      // document.querySelector('#artistImage').src = response.
  })
}

//Sample Code

// const client_id ="1424074b20f17701ec8c0601fd15ca686c70e2cb0e645f8137533d8063e664bc"
// const query = 'woods';
// function makeCall(){
//
//   fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}`,{method:'get'}).
// .then(res=>res.json())
// .then(res=>console.log("boommer",res))
// .catch(res=>console.log("error",res))
//
// }
// makeCall();
