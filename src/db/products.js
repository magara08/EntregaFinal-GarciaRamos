import { addDoc, collection, getFirestore } from 'firebase/firestore';

const albums = [
	{
		categoryId: "70s",
		genre: ["Pop"],
		title: "Yumi Matsutoya – Hikōki-gumo (1973)",
		images: {
			cover: "/images/70s/hikokigumo_cover.jpg",
			art: "/images/70s/hikokigumo_art.jpg",
			vynil: "/images/70s/hikokigumo_vynil.jpg"
		},
		tracklist: ["Hikōki-gumo", "Yasashisa ni Tsutsumareta Nara", "Kitto Ieru"],
		stock: 5,
		price: 30.00,
		release: "1973-11-20",
		thumbnail: "/images/70s/hikokigumo_thumbnail.jpg"
	},
	{
		categoryId: "70s",
		genre: ["Pop"],
		title: "Takako Mamiya – Love Trip (1978)",
		images: {
			cover: "/images/70s/lovetrip_cover.jpg",
			art: "/images/70s/lovetrip_art.jpg",
			vynil: "/images/70s/lovetrip_vynil.jpg"
		},
		tracklist: ["Love Trip", "Midnight Joke", "Chinese Restaurant"],
		stock: 3,
		price: 40.00,
		release: "1978-06-21",
		thumbnail: "/images/70s/lovetrip_thumbnail.jpg"
	},
	{
		categoryId: "70s",
		genre: ["Pop"],
		title: "Momoko Kikuchi – Adventure (1979)",
		images: {
			cover: "/images/70s/adventure_cover.jpg",
			art: "/images/70s/adventure_art.jpg",
			vynil: "/images/70s/adventure_vynil.jpg"
		},
		tracklist: ["Adventure", "Ocean Side", "Mystic Woman"],
		stock: 4,
		price: 35.00,
		release: "1979-07-10",
		thumbnail: "/images/70s/adventure_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop"],
		title: "Mariya Takeuchi – Variety (1984)",
		images: {
			cover: "/images/80s/variety_cover.jpg",
			art: "/images/80s/variety_art.jpg",
			vynil: "/images/80s/variety_vynil.jpg"
		},
		tracklist: ["Plastic Love", "Single Again", "Heart to Heart"],
		stock: 3,
		price: 38.96,
		release: "1984-04-25",
		thumbnail: "/images/80s/variety_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop"],
		title: "Anri – Timely!! (1983)",
		images: {
			cover: "/images/80s/timely_cover.jpg",
			art: "/images/80s/timely_art.jpg",
			vynil: "/images/80s/timely_vynil.jpg"
		},
		tracklist: ["Cat's Eye", "Windy Summer", "Timely!!"],
		stock: 4,
		price: 42.00,
		release: "1983-12-05",
		thumbnail: "/images/80s/timely_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop"],
		title: "Tatsuro Yamashita – For You (1982)",
		images: {
			cover: "/images/80s/foryou_cover.jpg",
			art: "/images/80s/foryou_art.jpg",
			vynil: "/images/80s/foryou_vynil.jpg"
		},
		tracklist: ["Sparkle", "Merry-Go-Round", "Love Talkin'"],
		stock: 5,
		price: 45.00,
		release: "1982-01-21",
		thumbnail: "/images/80s/foryou_thumbnail.jpg"
	},
	{
		categoryId: "90s",
		genre: ["Pop"],
		title: "Zard – Oh My Love (1994)",
		images: {
			cover: "/images/90s/ohmylove_cover.jpg",
			art: "/images/90s/ohmylove_art.jpg",
			vynil: "/images/90s/ohmylove_vynil.jpg"
		},
		tracklist: ["Oh My Love", "You And Me (and...) ", "Say Goodbye"],
		stock: 2,
		price: 50.00,
		release: "1994-06-04",
		thumbnail: "/images/90s/ohmylove_thumbnail.jpg"
	},
	{
		categoryId: "90s",
		genre: ["Pop"],
		title: "Namie Amuro – Sweet 19 Blues (1996)",
		images: {
			cover: "/images/90s/sweet19blues_cover.jpg",
			art: "/images/90s/sweet19blues_art.jpg",
			vynil: "/images/90s/sweet19blues_vynil.jpg"
		},
		tracklist: ["Sweet 19 Blues", "Body Feels Exit", "Chase the Chance"],
		stock: 3,
		price: 55.00,
		release: "1996-07-22",
		thumbnail: "/images/90s/sweet19blues_thumbnail.jpg"
	},
	{
		categoryId: "90s",
		genre: ["Pop"],
		title: "Every Little Thing – Time to Destination (1998)",
		images: {
			cover: "/images/90s/timetodestination_cover.jpg",
			art: "/images/90s/timetodestination_art.jpg",
			vynil: "/images/90s/timetodestination_vynil.jpg"
		},
		tracklist: ["Time to Destination", "Feel My Heart", "For the Moment"],
		stock: 4,
		price: 52.00,
		release: "1998-03-29",
		thumbnail: "/images/90s/timetodestination_thumbnail.jpg"
	}
];

const seedFirestore = async () => {
	const db = getFirestore();
	const itemsCollection = collection(db, 'items');

	try {
		for (const album of albums) {
			await addDoc(itemsCollection, album);
		}
		console.log("Documentos añadidos con éxito");
	} catch (error) {
		console.error("Error añadiendo documentos: ", error);
	}
};

export default seedFirestore;