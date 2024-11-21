const cargarElementos = async () => {
    try {
    const usdData = await fetch("https://open.er-api.com/v6/latest/USD").then(res => res.json());
    document.getElementById("usd").textContent = usdData.rates.COP.toFixed(2);

    const eurData = await fetch("https://open.er-api.com/v6/latest/EUR").then(res => res.json());
    document.getElementById("eur").textContent = eurData.rates.USD.toFixed(2);

    const btcData = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(res => res.json());
    document.getElementById("bit").textContent = btcData.bpi.USD.rate_float.toFixed(2);
    } catch (error) {
    console.error("Error al cargar los datos:", error);
    alert("No se logró cargar las cotizaciones.");
    }
};
cargarElementos();