import { addDoc, collection, getFirestore } from 'firebase/firestore';

const albums = [
	{
		categoryId: "70s",
		genre: ["Rock", "Funk / Soul", "Pop"],
		title: "Yumi Matsutoya – Cobalt Hour (1975)",
		images: {
			cover: "/images/70s/cobalthour_cover.jpg"
		},
		tracklist: ["COBALT HOUR", "Sotsugyō Shashin (卒業写真)", "Hana Kikō (花紀行)", "Nani mo Kikanaide", "Rūju no Dengon (ルージュの伝言)", "Kōkai Nisshi (航海日誌)", "CHINESE SOUP", "Sukoshi Dake Kataomoi (少しだけ片想い)", "Ame no Suteishon (雨のステイション)", "Afurika e Ikitai (アフリカへ行きたい)"],
		stock: 36,
		price: 19.00,
		release: "1975-06-20",
		thumbnail: "/images/70s/cobalthour_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop", "Jazz", "Funk / Soul"],
		title: "Takako Mamiya – Love Trip (1982)",
		images: {
			cover: "/images/80s/lovetrip_cover.jpg",
		},
		tracklist: ["Love Trip", "チャイニーズ・レストラン", "真夜中のジョーク", "哀しみは夜の向こう", "All Or Nothing", "渚でダンス", "One More Night", "モーニング・フライト", "たそがれは銀箔の…", "What A Broken Heart Can Do"],
		stock: 72,
		price: 13.20,
		release: "1982-09-25",
		thumbnail: "/images/80s/lovetrip_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop", "Electronic", "Funk / Soul"],
		title: "Momoko Kikuchi – Adventure (1986)",
		images: {
			cover: "/images/80s/adventure_cover.jpg",
		},
		tracklist: ["Overture", "Adventure", "もう逢えないかもしれない", "波になりたい", "Night Cruising", "雨のRealize", "赤い稲妻", "Good Friend", "Mystical Composer", "Tomorrow"],
		stock: 175,
		price: 19.67,
		release: "1986-06-25",
		thumbnail: "/images/80s/adventure_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop", "Funk / Soul", "Pop"],
		title: "Mariya Takeuchi – Variety (1984)",
		images: {
			cover: "/images/80s/variety_cover.jpg",
		},
		tracklist: ["もう一度", "プラスティック・ラブ", "本気でオンリーユー (Let's Get Married)", "One Night Stand", "Broken Heart", "アンフィシアターの夜", "とどかぬ想い", "マージービートで唄わせて", "水とあなたと太陽と", "ふたりはステディ", "シェットランドに頬をうずめて"],
		stock: 555,
		price: 9.55,
		release: "1984-04-25",
		thumbnail: "/images/80s/variety_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Pop", "Electronic", "Funk / Soul"],
		title: "Anri – Timely!! (1983)",
		images: {
			cover: "/images/80s/timely_cover.jpg",
		},
		tracklist: ["Cat's Eye (New Take)", "Windy Summer", "Stay By Me", "A Hope From Sad Street", "You Are Not Alone", "悲しみがとまらない", "Shyness Boy", "Lost Love In The Rain", "Driving My Love", "Good-Night For You"],
		stock: 403,
		price: 20.35,
		release: "1983-12-05",
		thumbnail: "/images/80s/timely_thumbnail.jpg"
	},
	{
		categoryId: "80s",
		genre: ["Jazz", "Rock", "Funk / Soul"],
		title: "Tatsuro Yamashita – For You (1982)",
		images: {
			cover: "/images/80s/foryou_cover.jpg",
		},
		tracklist: ["Sparkle", "Music Book", "Interlude A Part I", "Morning Glory", "Interlude A Part II", "Futari", "Loveland, Island", "Interlude B Part I", "Love Talkin' (Honey It's You)", "Hey Reporter!", "Interlude B Part II", "Your Eyes"],
		stock: 813,
		price: 12.46,
		release: "1982-01-21",
		thumbnail: "/images/80s/foryou_thumbnail.jpg"
	},
	{
		categoryId: "90s",
		genre: ["Pop"],
		title: "Zard – Oh My Love (1994)",
		images: {
			cover: "/images/90s/ohmylove_cover.jpg",
		},
		tracklist: ["Oh My Love", "	Top Secret", "きっと忘れない", "もう少し あと少し…", "雨に濡れて", "この愛に泳ぎ疲れても", "	I Still Remember", "If You Gimme Smile", "来年の夏も", "あなたに帰りたい"],
		stock: 208,
		price: 2.49,
		release: "1994-06-04",
		thumbnail: "/images/90s/ohmylove_thumbnail.jpg"
	},
	{
		categoryId: "90s",
		genre: ["Pop", "Electronic"],
		title: "Namie Amuro – Sweet 19 Blues (1996)",
		images: {
			cover: "/images/90s/sweet19blues_cover.jpg",
		},
		tracklist: ["Watch Your Step!!", "Motion", "Let's Do The Motion", "Private", "Interlude ~ Ocean Way", "Don't Wanna Cry (Eighteen's Summer Mix)", "Rainy Dance", "Chase The Chance (CC Mix)", "Interlude ~ Joy", "I'll Jump", "Interlude ~ Scratch Voices", "I Was A Fool", "Present", "Interlude ~ Don't Wanna Cry Symphonic Style", "You're My Sunshine (Hollywood Mix)", "Body Feels Exit (Latin House Mix)", "'77~", "Sweet 19 Blues", "... Soon Nineteen"],
		stock: 183,
		price: 0.27,
		release: "1996-07-22",
		thumbnail: "/images/90s/sweet19blues_thumbnail.jpg"
	},
	{
		categoryId: "90s",
		genre: ["Pop"],
		title: "Every Little Thing – Time to Destination (1998)",
		images: {
			cover: "/images/90s/timetodestination_cover.jpg",
		},
		tracklist: ["For The Moment", "今でも...あなたが好きだから", "Face The Change (Album Mix)", "Old Dreams (Instrumental)", "モノクローム", "All Along", "Hometown", "出逢った頃のように", "Shapes Of Love", "True Colors", "Time Goes By (Orchestra Version)"],
		stock: 158,
		price: 2.00,
		release: "1998-04-15",
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