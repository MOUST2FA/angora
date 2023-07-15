var user =`
<h1>Quote of the Day</h1>
<p class="lead mt-4 mb-2">Press the button below to recieve a random quote!</p>

`
document.getElementById('demo').innerHTML=user

// var products=["“You only live once, but if you do it right, once is enough.”","“In three words I can sum up everything I've learned about life: it goes on.”","“If you tell the truth, you don't have to remember anything.”","“Be yourself; everyone else is already taken.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“A room without books is like a body without a soul.”","“A friend is someone who knows all about you and still loves you.”"]

var products=[
    {
        text: "“You only live once, but if you do it right, once is enough.”",
        name: "― Mae West",
    },
    {
        text: "“Be the change that you wish to see in the world.”",
        
        name: "― Mahatma Gandhi",
    },
    {
        text: "“In three words I can sum up everything I've learned about life: it goes on.”",
        
        name: "― Robert Frost",
    },
    {
        text: "“If you tell the truth, you don't have to remember anything.”",
        
        name: "― Mark Twain",
    },
    {
        text: "“So many books, so little time.”",
        
        name: "― Frank Zappa",
    },
    {
        text: "“A friend is someone who knows all about you and still loves you.”",
        
        name: "― Elbert Hubbard",
    },
    {
        text: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        
        name: "― Oscar Wilde",
    },

]

function name1(){


var user_2= Math.floor(Math.random()* products.length);



document.getElementById('done').innerHTML=products[user_2].text
document.getElementById('chiled').innerHTML=products[user_2].name

};
