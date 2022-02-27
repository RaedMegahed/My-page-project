//level3 lesson4 v#2
//random youtube videos from array

let i = 0;
randomvid.addEventListener("click", (eo) => {
  const vidArry = [
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/z5QFWGd5jQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/yjvlyl95BsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/l-oUo0m_HPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/2owgnmRSRSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/RSZx6XCFfso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/ATNpBclxW9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/5Os2-sRE3CY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/hMkYkh4-B3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/VSJq67ZoFT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  ];

  //container.innerHTML = vidArry[Math.floor(Math.random() * vidArry.length)];

  container.innerHTML = vidArry[i];
  i++;

  if (i > vidArry.length - 1) {
    i = 0;
  }
});

//level3 lesson4 v#3
//random quote from array

randomquobutt.addEventListener("click", (eo) => {
  qouteArray = [
    `<blockquote id="randomquo" class="sidekick">
  Roads? Where we're going, we don't need... roads. 
  <br>
  <cite> Dr. Emmett Brown</cite>
</blockquote>`,

    `<blockquote id="randomquo" class="sidekick">
Be yourself; everyone else is already taken. 
  <br>
  <cite> Oscar Wilde</cite>
</blockquote>`,

    `<blockquote id="randomquo" class="sidekick">
So many books, so little time. 
  <br>
  <cite> Frank Zappa</cite>
</blockquote>`,

    `<blockquote id="randomquo" class="sidekick">
A room without books is like a body without a soul. 
  <br>
  <cite> Marcus Tullius Cicero</cite>
</blockquote>`,

    `<blockquote id="randomquo" class="sidekick">
You only live once, but if you do it right, once is enough. 
  <br>
  <cite> Mae West</cite>
</blockquote>`,

    `<blockquote id="randomquo" class="sidekick">
              The only thing permanent in life is impermanence. 
              <br>
              <cite> Thor in Endgame</cite>
           </blockquote>`,
  ];
  parentquo.innerHTML = qouteArray[i];
  i++

  if (i> qouteArray.length-1) {
    i=0
  }
});
