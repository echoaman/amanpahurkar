export default function updateScollbar(thumbColor, trackColor) {
	const html = document.getElementsByTagName("html")[0];
	html.style.setProperty("--track", trackColor);
	html.style.setProperty("--thumb", thumbColor);
}