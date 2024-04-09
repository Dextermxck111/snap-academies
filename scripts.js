/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const LUKA_URL = "https://i.pinimg.com/originals/30/70/55/307055bf423830c50a201090866b1a93.jpg";
const STEPH_URL = "https://tse2.mm.bing.net/th?id=OIP.9xMzY_AEh40cVVFpCf6rfAHaJQ&pid=Api&P=0&h=220";
const SHAI_URL = "https://canadiansportscene.com/wp-content/uploads/2020/08/Shai-Gilgeous-Alexander-821x1024.jpg";
const JA_URL = "https://i.pinimg.com/originals/e4/08/49/e4084920d702645c3f24b018fd8e53f3.jpg";
const KAI_URL = "https://nypost.com/wp-content/uploads/sites/2/2023/07/kyrie-irving-simmons-1.jpg";
const DAME_URL =  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1l5Hy6.img?w=768&h=1151&m=6&x=519&y=129&s=120&d=120";


const LUKA_STATS = "https://www.espn.com/nba/player/_/id/3945274/luka-doncic";
const STEPH_STATS = "https://www.espn.com/nba/player/_/id/3975/stephen-curry";
const SHAI_STATS = "https://www.espn.com/nba/player/_/id/4278073/shai-gilgeous-alexander";
const JA_STATS = "https://www.espn.com/nba/player/_/id/4279888/ja-morant";
const KAI_STATS = "https://www.espn.com/nba/player/_/id/6442/kyrie-irving";
const DAME_STATS = "https://www.espn.com/nba/player/_/id/6606/damian-lillard";

const LUKA_HIGHLIGHTS = "https://youtu.be/HSzVX0EW0qo?si=ybp1K4rHD49aX7Fw";
const STEPH_HIGHLIGHTS = "https://youtu.be/hUOfC2ilXak?si=o5sO21poZ7vZi77-"
const SHAI_HIGHLIGHTS = "https://youtu.be/pF_QpKadVfM?si=SMnwCjMaBzgiZrKM";
const JA_HIGHLIGHTS = "https://youtu.be/pNuNtOJwioM?si=kFYe6uPewZ1hAyLj";
const KAI_HIGHLIGHTS = "https://youtu.be/E1hDNMmb5lg?si=2swM9BfGvwO-Twxs";
const DAME_HIGHLIGHTS = "https://youtu.be/OoseMiOTs1U?si=SFsQ9vQfFO9knOiB";

// This is an object where keys--(the players) are the players and values are the corresponding image URLs
let playersWithImages = {
    "Luka Doncic": LUKA_URL,
    "Stephen Curry": STEPH_URL,
    "Shai Gilgeous-Alexander ": SHAI_URL,
    "Ja Morant": JA_URL,
    "Kyrie Irving": KAI_URL,
    "Damian Lillard": DAME_URL
};

let playersWithStats = {
    "Luka Doncic": LUKA_STATS,
    "Stephen Curry": STEPH_STATS,
    "Shai Gilgeous-Alexander ": SHAI_STATS,
    "Ja Morant": JA_STATS,
    "Kyrie Irving": KAI_STATS,
    "Damian Lillard": DAME_STATS
}

let playersWithHighlights = {
    "Luka Doncic": LUKA_HIGHLIGHTS,
    "Stephen Curry": STEPH_HIGHLIGHTS,
    "Shai Gilgeous-Alexander ": SHAI_HIGHLIGHTS,
    "Ja Morant": JA_HIGHLIGHTS,
    "Kyrie Irving": KAI_HIGHLIGHTS,
    "Damian Lillard": DAME_HIGHLIGHTS
}
// Your final submission should have much more data than this, and 
// you should use more than just an object to store it all.


// This function adds cards to the page to display the data in the object
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let player in playersWithImages) {
        let imageURL = playersWithImages[player];
        let statsURL = playersWithStats[player];
        let highlightsURL = playersWithHighlights[player];

        const nextPlayer = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextPlayer, player, imageURL, statsURL, highlightsURL); // Edit title and image
        cardContainer.appendChild(nextPlayer); // Adds new card to the container
    }
}



function editCardContent(card, newPlayer, newImageURL, statsURL, highlightsURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newPlayer;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newPlayer + " Poster";

    const cardContent = card.querySelector(".card-content");

    const statsLink = document.createElement("a");
    statsLink.href = statsURL;
    statsLink.textContent = "Stats";
    cardContent.appendChild(statsLink);


    const highlightsLink = document.createElement("a");
    highlightsLink.href = highlightsURL;
    highlightsLink.textContent = "Highlights";
    cardContent.appendChild(highlightsLink);

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newPlayer, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("In reality I didn't even include the best one on the list (Trae Young, AKA 'ICE TRAE' ");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}