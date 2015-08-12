(function() {
	var app = angular.module("magazineApp",['ngRoute']);

	app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'ProductController'
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'SubscribeController'
		})
		.when('/faq', {
			templateUrl: 'faq.html',
			controller: 'SubscribeController'
		})
		.when('/login', {
			templateUrl: 'contact.html',
			controller: 'SubscribeController'
		});
	});

	app.controller("SubscribeController", function() {
		this.background = headerBackground;
		this.icons = socialIcons;
		this.menu = menuSelection;
	});

	app.controller("ProductController", function() {
		this.products = subscriptions;
	});

	var menuSelection = [
		{
			item: "Login",
			link: "https://www.linkedin.com/in/calleung"
		}
		,
		{
			item: "|",
			link: ""
		}
		,
		{
			item: "FAQ",
			link: "#/faq"
		}
		,
		{
			item: "My Subscriptions",
			link: "#/subscriptions"
		}
		,
		{
			item: "Contact",
			link: "#/contact"
		}
		,
		{
			item: "Home",
			link: "#/"
		}
	];
	var socialIcons = [
	{
		image: "./images/twitter.png",
		link: "https://www.twitter.com"
	},
	{
		image: "./images/facebook.png",
		link: "https://www.facebook.com"
	},
	{
		image: "./images/instagram.png",
		link: "https://www.instagram.com"
	}
	,
	{
		image: "./images/google.png",
		link: "https://www.google.com"
	}
	];

	var headerBackground = "./images/MagazineBackground.jpg";

	var subscriptions = [
		{
		company: "GQ",
		price: "4.99",
		time: "1 Year",
		image: "./images/GQ.jpg"
		},
		{
		company: "Popular Science",
		price: "12.99",
		time: "2 Years",
		image: "./images/PopularScience.jpg"
		}
		,
		{
		company: "Mens Health",
		price: "13.99",
		time: "3 Years",
		image: "./images/MensHealth.jpg"
		}
		,
		{
		company: "Womens Health",
		price: "10.99",
		time: "2 Years",
		image: "./images/WomensHealth.jpg"
		}
		,
		{
		company: "Popular Photography",
		price: "9.99",
		time: "3 Years",
		image: "./images/PopularPhotography.jpg"
		}
		,
		{
		company: "Wired",
		price: "12.99",
		time: "3 Years",
		image: "./images/Wired.jpg"
		}
		,
		{
		company: "Glamour",
		price: "13.99",
		time: "3 Years",
		image: "./images/Glamour.jpg"
		}
		,
		{
		company: "Maxim",
		price: "13.99",
		time: "2 Years",
		image: "./images/Maxim.jpg"
		}
		,
		{
		company: "Vogue",
		price: "14.99",
		time: "3 Years",
		image: "./images/Vogue.jpg"
		}
		,
		{
		company: "US Weekly",
		price: "9.99",
		time: "2 Years",
		image: "./images/USWeekly.jpg"
		}
	]
})();
