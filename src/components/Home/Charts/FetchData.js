async function getPieData() {
    const url = "/PieData";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export default getPieData;