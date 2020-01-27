// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resp => {
        console.log(resp);
        const jArticles = resp.data.articles.javascript;
            jArticles.forEach(art => {
            const newArtCard = createCard(art);
            document.querySelector('.cards-container').appendChild(newArtCard);
            })
        const bArticles = resp.data.articles.bootstrap;
            bArticles.forEach(art => {
            const newArtCard = createCard(art);
            document.querySelector('.cards-container').appendChild(newArtCard);
            })
        const tArticles = resp.data.articles.technology;
            tArticles.forEach(art => {
            const newArtCard = createCard(art);
            document.querySelector('.cards-container').appendChild(newArtCard);
            })
        const jqArticles = resp.data.articles.jquery;
            jqArticles.forEach(art => {
            const newArtCard = createCard(art);
            document.querySelector('.cards-container').appendChild(newArtCard);
            })
        const nArticles = resp.data.articles.node;
            nArticles.forEach(art => {            
            const newArtCard = createCard(art);
            document.querySelector('.cards-container').appendChild(newArtCard);
            })
        })




const createCard = (artObj) => {
    //create elements
    const artCard = document.createElement('div');
    const artHead = document.createElement('div');
    const artAuthor = document.createElement('div');
    const artAuthImg = document.createElement('div');
    const artAuthImgSrc = document.createElement('img');
    const artAuthName = document.createElement('span');

    //set classes
    artCard.classList.add('card');
    artHead.classList.add('headline');
    artAuthor.classList.add('author');
    artAuthImg.classList.add('img-container');

    //set tree
    artCard.appendChild(artHead);
    artCard.appendChild(artAuthor);
    artAuthor.appendChild(artAuthImg);
    artAuthImg.appendChild(artAuthImgSrc);
    artAuthor.appendChild(artAuthName);

    //add content
    artHead.textContent = artObj.headline;
    artAuthImgSrc.src = artObj.authorPhoto;
    artAuthName.textContent = `By ${artObj.authorName}`;

    return artCard;
}

