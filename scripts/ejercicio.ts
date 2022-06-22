const ejecutarCodigo = () => alert("Hola, mundo");
//ejecutarCodigo();

const tit1 = document.getElementById("titulo1");
tit1 && (tit1.textContent = "Album de fotos");

const arr_text_muted = document.getElementsByClassName("text-muted");
const el1 = arr_text_muted[1];
el1.innerHTML = `
<span>
    En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.
</span>
`
const arr_tag_p = document.getElementsByTagName("p");
const el2 = arr_tag_p[2];
el2.setAttribute("class", "d-none");

const imgs = [
    {
        url: "https://i.picsum.photos/id/265/500/500.jpg?hmac=S14ePJWSP0umupBxMyQsc_Xm4p9fgztmW5ehU8qKA0o",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/112/500/500.jpg?hmac=zBT1fBF1_n9cZGK0O8J92c_7ASr90wv5oBNebNqr6mM",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/143/500/500.jpg?hmac=sWhWWRd9qo3XhBBfkw9wvxUtfkueraiDok-vlwveN7c",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/634/500/500.jpg?hmac=kGNo0Zf7xbVmQ8QK-fHxTf_3fCyAhTMac3tyWPQ83mw",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/861/500/500.jpg?hmac=r0X8208-EpZTr3l4mQLjt0EHu3BzUqLpbGeaaK7gdlE",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/265/500/500.jpg?hmac=S14ePJWSP0umupBxMyQsc_Xm4p9fgztmW5ehU8qKA0o",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/984/500/500.jpg?hmac=pyY7pQAMjNdqpFpf7EGBwLWshfW7o1ql2QIDKdwBNAU",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/544/500/500.jpg?hmac=yblgPo4bMbR6uXpKoXqqyhpR_wn5pq3Zp1CxfD5AxjQ",
        alt: "-",
    },
    {
        url: "https://i.picsum.photos/id/372/500/500.jpg?hmac=cU6UmiTTVlpWR-XZ3uzz1kPMWMPi97-CQLbfkKT54kE",
        alt: "-",
    },
];

const arr_svg =
    document.getElementsByClassName("bd-placeholder-img card-img-top");

// se recorre 'arr_svg' y por cada elemento se lo reemplaza con un elemento
// 'img' a partir de 'imgs' (esto es posible por ser arreglos paralelos)
Array.from(arr_svg).forEach((e, i) => {
    const img = document.createElement("img");
    img.src = imgs[i].url;
    img.alt = imgs[i].alt;
    e.replaceWith(img);
});
