let btn=document.getElementById('btn');
let source = document.getElementById('source')
let quoite =[
	 "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
	 "Don't sweat the petty things and don't pet the sweaty things.",
	 "Do what you feel in your heart to be right, for you'll be criticized anyway.",
	  "Do not set yourself on fire in order to keep others warm.",
	 "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
	 "It's supposed to be hard. If it were easy, everyone would do it.",
	  "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
	  "Life may not be the party we hoped for, but while we're here, we should dance.",
	  "Never cowardly or cruel. Never give up, never give in.",
	  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	  "In 20 years, you probably won't even remember this.",
];
btn.addEventListener('click',function(){
	var randomQuoite =quoite[Math.floor(Math.random()* quoite.length)]
	source.innerHTML = randomQuoite;
})
