
import React ,{useEffect , useState}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { Detail } from "../component/detail";

//I have 2 set os collection (create 2 array)
//i have to create component card from boostrap
//map method through my array and render for each character and planet

export const Home = () => {
	
     const [character , setCharacter] = useState([]);
	const [planet , setPlanet] = useState([]);
	

	useEffect (() => {
       getCharacters();
	   getPlanets();
	} , []);

	const getCharacters =() => {
		fetch("https://swapi.dev/api/people/") 
	     .then( function (response)  {
			 if (!response.ok) {
				 throw Error(response.statusText)
			 }
			 return response.json();
		 })
		 .then( function (responseAsJson)  {
			console.log("responseAsJson", responseAsJson);
			setCharacter(responseAsJson.results);
		})
		.catch(function (error) {
			console.log("error", error);
		});
};



const getPlanets =() => {
	fetch("https://swapi.dev/api/planets/") 
	 .then( function (response)  {
		 if (!response.ok) {
			 throw Error(response.statusText)
		 }
		 return response.json();
	 })
	 .then( function (responseAsJson) {
		console.log("responseAsJson", responseAsJson);
		setPlanet(responseAsJson.results);
	})
	.catch(function (error) {
		console.log("error", error);
	});
};

const updatePut = (updatedCharacters) => {
	fetch(uri, {
		method: "PUT",
		body: JSON.stringify(updatedCharacters),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((response) => {
			console.log("success", response);
			getFetch();
		})
		.catch((error) => console.error("error", error));
};

			// setCharacter(data.results);
		 //})
        //.catch((error) => {
	//		console.log("Looks like there is a problem: /n", error);
	//	});


		//function getPlanets() {
		//	fetch("https://swapi.dev/api/planets/" ,{method: GET})
		//	 .then((response) => {
		//		 return response.json();
		//	 })
		//	 .then((data) => {
		//		 setCharacter(data.results);
		//	 })
		//	.catch((error) => {
		//		console.log("Looks like there is a problem: /n", error);
		//	});

			//function updateAPI()



    return (
		<>
		<h1 className = "text-white">STAR WARS</h1>
		<h2>CHARACTERS:</h2>
		<div className="d-flex flex-row mx-auto" style={{ width: "90%", overflow: "auto" }}>
		{character.map((item,index) => {
			item["img"] = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
			return (
				<CharacterCard
				className="mx-2"
				key={index}
			    person ={item}
				//key={i}title = {item.name} height ={item.height} mass = {item.mass} eye_color = {item.eye_color}/>
				/>
			)
		})}
	</div>
	<h3>PLANETS:</h3>
	<div className="d-flex flex-row mx-auto" style={{ width: "90%", overflow: "auto" }}>
		{planet.map((item,index) => {
			item ["img"] = "https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
			return (
				<PlanetCard 
				className="mx-2"
				key={index}
				planet={item}
				//key={i}title = {item.name} rotation_period ={item.rotation_period} diameter = {item.diameter} climate = {item.climate}  gravity ={item.gravity} />
				/>
			)
		})}
	</div>
	</>
	);
	};	 
