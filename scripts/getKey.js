export default function getKey() {
    return new Date().getTime() / (Math.floor(Math.random() * 10000) + 1);
}