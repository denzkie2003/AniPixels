

  let animeseries = document.getElementById('myList');
  let resultS = document.getElementById('resultFound');
  
  let seriesList = [
    
    {
      title:"Zombieland Saga: Revenge",
      otherT:"ゾンビランドサガ リベンジ",
      type:"TV Series",
      link: "https://aniwoofy.ml/watching/zombieland-saga-revenge/episode/5/server/1/quality/1080",
      image: "https://gogocdn.net/cover/zombieland-saga-revenge.png",
      releaseDate: "2021",
      statusUpdate:"Ongoing",
      genre:"Action, Horror, Supernatural"
    },
    {
      title:"Zombieland Saga",
      otherT:"ゾンビランドサガ リベンジ",
      type: "TV Series",
      link: "https://aniwoofy.ml/details/zombieland-saga/",
      image: "https://gogocdn.net/cover/zombieland-saga.png",
      releaseDate: "2018",
      statusUpdate:"Completed",
      genre:"Action, ,Horror, Supernatural"
    },
    {
      title:"Shaman King (2021)",
      otherT:"Shaman King (2021)",
      type:"TV Series",
      link: "https://aniwoofy.ml/watching/shaman-king-2021/episode/6/server/1/quality/1080",
      image: "https://gogocdn.net/cover/shaman-king-2021.png",
      releaseDate: "2021",
      statusUpdate:"Ongoing",
      genre:"Action, Adventure, Comedy, Drama, Supernatural"
    },
    {
      title:"Shaman King (2001)",
      otherT:"Shaman King (2001)",
      type:"TV Series",
      link: "https://aniwoofy.ml/details/shaman-king/",
      image: "https://gogocdn.net/cover/shaman-king-dub.png",
      releaseDate: "2001",
      statusUpdate:"Completed",
      genre:"Comedy, Action, Adventure, Supernatural, Drama"
    },
    {
      title:"Isekai Maou to Shoukan Shoujo no Dorei Majutsu • Season 2",
      otherT:"How Not To Summon A Demon Lord • Season 2",
      type: "TV Series",
      link: "https://aniwoofy.ml/details/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu-w/",
      image: "https://gogocdn.net/cover/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu-w.png",
      releaseDate: "2021",
      statusUpdate:"Ongoing",
      genre:"Comedy, Magic, Fantasy"
    },
    {
      title:"Isekai Maou to Shoukan Shoujo no Dorei Majutsu",
      otherT:"How Not To Summon The Demon Lord",
      type: "TV Series",
      link: "https://aniwoofy.ml/details/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu/",
      image: "https://gogocdn.net/cover/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu.png",
      releaseDate: "2018",
      statusUpdate:"Completed",
      genre:"Comedy, Fantasy, Magic"
    },
     {
      title:"Over The Moon For You",
      otherT:"Tonikaku Kawaii",
      type: "TV Series",
      link: "https://aniwoofy.ml/details/tonikaku-kawaii/",
      image: "https://gogocdn.net/cover/tonikaku-kawaii.png",
      releaseDate: "2020",
      statusUpdate:"Completed",
      genre:"Comedy, Romance, Shounen"
    },
    {
      title:"Over The Moon For You • OVA",
      otherT:"Tonikaku Kawaii",
      type: "OVA",
      link:"https://aniwoofy.ml/details/tonikaku-kawaii-ova/",
      image: "https://gogocdn.net/cover/tonikaku-kawaii-ova.png",
      releaseDate: "2021",
      statusUpdate:"Upcoming",
      genre:"Comedy, Romance, Shounen"
    },
    {
      title:"I Shaved. Then I Brought a High School Girl Home",
      otherT:"Hige wo Soru. Soshite Joshikousei wo Hirou",
      link:"https://aniwoofy.ml/details/hige-wo-soru-soshite-joshikousei-wo-hirou/",
      type: "TV Series",
      image: "https://gogocdn.net/cover/hige-wo-soru-soshite-joshikousei-wo-hirou.png",
      releaseDate: "2021",
      statusUpdate:"Ongoing",
      genre:"Drama, Romance"
    },
    {
      title:"86",
      otherT:"Eighty Six",
      type: "TV Series",
      link: "https://aniwoofy.ml/details/86/",
      image: "https://gogocdn.net/cover/86.png",
      releaseDate: "2021",
      statusUpdate:"Ongoing",
      genre:"Drama, Sci-Fi"
    },
    {title:"Ore wo Suki nano wa Omae dake ka yo",otherT:"Oresuki: Are you the one who love's me?",type:"TV Series",link:"https://aniwoofy.ml/details/ore-wo-suki-nano-wa-omae-dake-ka-yo/",image:"https://gogocdn.net/cover/ore-wo-suki-nano-wa-omae-dake-ka-yo.png",releaseDate:"2019",statusUpdate:"Completed",genre:"Comedy, Romance, School"},
    
    {title:"Boku No Hero Academia",otherT:"My Hero Academia",type:"TV Series",link:"",image:"https://gogocdn.net/cover/boku-no-hero-academia.jpg",releaseDate:"2016",statusUpdate:"Completed",genre:"Comedy, Action, School, Shounen, Super Power"},
    
    {title:"Boku No Hero Academia 2nd Season",otherT:"My Hero Academia 2nd Season",type:"TV Series",link:"",image:"https://gogocdn.net/cover/boku-no-hero-academia-2nd-season.png",releaseDate:"2017",statusUpdate:"Completed",genre:"Comedy, Action, School, Shounen, Super Power"},
    
    {title:"Boku No Hero Academia 3rd Season",otherT:"My Hero Academia 3rd Season",type:"TV Series",link:"",image:"https://gogocdn.net/cover/boku-no-hero-academia-3rd-season.png",releaseDate:"2018",statusUpdate:"Completed",genre:"Comedy, Action, School, Shounen, Super Power"},
    
    {title:"Boku No Hero Academia 4th Season",otherT:"My Hero Academia 4th Season",type:"TV Series",link:"",image:"https://gogocdn.net/cover/boku-no-hero-academia-4th-season.png",releaseDate:"2019",statusUpdate:"Completed",genre:"Comedy, Action, School, Shounen, Super Power"},
    
    {title:"Boku No Hero Academia 5th Season",otherT:"My Hero Academia 5th Season",type:"TV Series",link:"",image:"https://gogocdn.net/cover/boku-no-hero-academia-5th-season.png",releaseDate:"2021",statusUpdate:"Ongoing",genre:"Comedy, Action, School, Shounen, Super Power"},
    
    {title:"Darling In The FranXX",otherT:"Darling In The FranXX",type:"TV Series",link:"",image:"https://gogocdn.net/cover/darling-in-the-franxx.png",releaseDate:"2018",statusUpdate:"Completed",genre:"Mecha, Sci-Fi"},
    
    {title:"Ore dake Haireru Kakushi Dungeon",otherT:"The Hidden Dungeon Only I Can Enter",type:"TV Series",link:"",image:"https://gogocdn.net/cover/ore-dake-haireru-kakushi-dungeon.png",releaseDate:"2021",statusUpdate:"Completed",genre:"Action, Adventure, Ecchi, Harem, Fantasy"},
    
    {title:"Kimetsu No Yaiba",otherT:"Demon Slayer",type:"TV Series",link:"",image:"https://gogocdn.net/cover/kimetsu-no-yaiba.png",releaseDate:"2019",statusUpdate:"Completed",genre:"Action, Demons, Historical, Shounen, Supernatural"},
    
    {title:"My Teen Romantic Comedy Is Wrong As I Expected",otherT:"Oregairu",type:"TV Series",link:"",image:"https://gogocdn.net/images/anime/O/Oregairu.jpg",releaseDate:"2013",statusUpdate:"Completed",genre:"Comedy, Romance, School"},
    
    {title:"My Teen Romantic Comedy Is Wrong As I Expected! Snafu",otherT:"Oregairu 2nd Season",type:"TV Series",link:"",image:"https://gogocdn.net/images/upload/170244.jpg",releaseDate:"2015",statusUpdate:"Completed",genre:"Comedy, Romance, School"},
    
    {title:"My Teen Romantic Comedy Is Wrong As I Expected! Snafu • Climax",otherT:"Oregairu 3rd Season",type:"TV Series",link:"",image:"https://gogocdn.net/cover/yahari-ore-no-seishun-love-comedy-wa-machigatteiru-kan-dub.png",releaseDate:"2020",statusUpdate:"Completed",genre:"Comedy, Romance, School"},
    
    {title:"Saenai Heroine No Sodatekata",otherT:"Saekano • How To Raise A Boring Girlfriend",type:"TV Series",link:"",image:"https://gogocdn.net/images/upload/164360.jpg",releaseDate:"2015",statusUpdate:"Completed",genre:"Drama, Romance, Comedy, School"},
    
    {title:"Saenai Heroine No Sodatekata 2nd Season",otherT:"Saekano • How To Raise A Boring Girlfriend 2nd Season",type:"TV Series",link:"",image:"https://gogocdn.net/cover/saenai-heroine-no-sodatekata-2.png",releaseDate:"2017",statusUpdate:"Completed",genre:"Drama, Romance, Comedy  School"},
    
    {title:"Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",otherT:"I've been killing slime for 300 years and max out my level",type:"TV Series",link:"",image:"https://gogocdn.net/cover/slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita.png",releaseDate:"2021",statusUpdate:"Ongoing",genre:"Comedy, Fantasy"
      
    },
    {
      title:"Boku no Hero Academia the Movie: Futari no Hero",
      otherT:"My Hero Academia Movie: The Two Heroes",
      type: "Movies",
      link: "",
      image: "https://gogocdn.net/cover/boku-no-hero-academia-the-movie-futari-no-hero.png",
      releaseDate: "2018",
      statusUpdate:"Completed",
      genre:"Comedy, Action, School, Shounen, Super Power"
    },
    {
      title:"Boku no Hero Academia the Movie 2: Heroes:Rising",
      otherT:"My Hero Academia • Movie • Heroes Rising",
      type: "Movie",
      image: "https://gogocdn.net/cover/boku-no-hero-academia-the-movie-2-heroesrising.png",
      releaseDate: "2019",
      statusUpdate:"Completed",
      genre:"Comedy, Action, School, Shounen, Super Power"
    },
    {
      title:"Saenai Heroine No Sodatekata Movie",
      otherT:"Hige wo Soru. Soshite Joshikousei wo Hirou",
      type: "Movies",
      image: "https://gogocdn.net/cover/saenai-heroine-no-sodatekata-fine.png",
      releaseDate: "2019",
      statusUpdate:"Completed",
      genre:"Comedy, Drama, Romance, School"
    },
    {
      title:"Kimetsu no Yaiba Movie: Mugen Ressha-hen",
      otherT:"Demon Slayer •Movie• Mugen Train",
      type: "Movie",
      link: "",
      image: "https://gogocdn.net/cover/kimetsu-no-yaiba-movie-mugen-ressha-hen-dub.png",
      releaseDate: "2020",
      statusUpdate:"Completed",
      genre:"Genre: Action, Demons, Historical, Shounen, Supernatural"
    },
    {
      title:"The Shape Of Voice",
      otherT:"A Silent Voice",
      type: "Movie",
      link: "",
      image: "https://gogocdn.net/cover/koe-no-katachi-movie.png",
      releaseDate: "2020",
      statusUpdate:"Completed",
      genre:"Genre: Drama, School, Shounen"
    }
 ];
    
  for(var i = 0; i < seriesList.length; i++){
      
    let li = document.createElement('li');
    let li2 = document.createElement('li');
    let a = document.createElement('a');
    let a2 = document.createElement('a');
    let image = document.createElement('img');
    let image2 = document.createElement('img');
    let title = document.createElement('p');
    let otherT = document.createElement('p');
    let type = document.createElement('p');
    let release = document.createElement('p');
    let statusQ = document.createElement('p');
    let genre = document.createElement('p');
    let div = document.createElement('div');
    let small = document.createElement('small');
    let div2 = document.createElement('div');
    
    a.setAttribute('href','#');
    div.setAttribute('class','titleImage');
    title.setAttribute('id','title');
    small.setAttribute('id','titleSearch');
    otherT.setAttribute('id','otherT');
    type.setAttribute('id','type');
    release.setAttribute('id','release');
    statusQ.setAttribute('id','statusQ');
    genre.setAttribute('id','genre');
    image.setAttribute('alt','Loading...');
    image2.setAttribute('alt','Loading...');
    div2.setAttribute('class','resultCon');

    title.innerHTML = seriesList[i].title;
    small.innerHTML = '<marquee direction="left">'+seriesList[i].title+'</marquee>';
    image.src = seriesList[i].image;
    image2.src = seriesList[i].image;
    otherT.innerHTML = "Other: "+seriesList[i].otherT;
    type.innerHTML = "Type:" +seriesList[i].type;
    release.innerHTML = "Released: "+ seriesList[i].releaseDate;
    statusQ.innerHTML = "Status: " + seriesList[i].statusUpdate;
    genre.innerHTML = "Genre: " +seriesList[i].genre;
    a.href = seriesList[i].link;
    
    
    li.appendChild(a);
    a.appendChild(image);
    a.appendChild(div);
    div.appendChild(title);
    div.appendChild(otherT);
    div.appendChild(type);
    div.appendChild(release);
    div.appendChild(statusQ);
    div.appendChild(genre);
    
    li2.appendChild(a2);
    a2.appendChild(div2);
    div2.appendChild(image2);
    div2.appendChild(small);
    
    animeseries.appendChild(li);
    resultFound.appendChild(li2);

  }


