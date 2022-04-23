export default function updateScrollbar(thumbColor) {
    const html = document.getElementsByTagName("html")[0];
    html.style.setProperty("--thumb", thumbColor);
}