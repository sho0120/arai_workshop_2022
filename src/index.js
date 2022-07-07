import { db } from "./firebase.js";
import { addDoc, collection } from "firebase/firestore";

const favoriteWords = collection(db, "favorite_words");

const addFavoriteWord = (word) => {
	if (word.length === 0) return;
	console.log(`send ${word}`);
	addDoc(favoriteWords, { word });
};

document.addEventListener("DOMContentLoaded", () => {
	const confirmButton = document.getElementById("confirm__button");
	confirmButton.addEventListener("click", () => {
		const text_area = document.getElementById("word__area");
		addFavoriteWord(text_area.value);
		text_area.value = "";
	});
});
