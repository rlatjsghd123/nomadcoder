const wiseSaying = [
    {
        quote : "누구나 그럴싸한 계획을 가지고 있다. 쳐 맞기 전까지",
        author : "마이크 타이슨",
    },
    {
        quote : "The way get started is to quit talking and begin doing",
        author : "Walt Disney",
    },
    {
        quote : "Anyone who has never made a mistake has never tried anything new",
        author : "Albert Einstein",
    },
    {
        quote : "Sometimes even to live is an act of courage.",
        author : "Seneca",
    },
    {
        quote : "life is not fair get used to it.",
        author : "Bill Gates",
    },
    {
        quote : "Friendship often ends in love but love in friendship never",
        author : "sunhongs",
    },
    {
        quote : "GREAT LOVES TOO MUST BE ENDURED",
        author : "PAUL TILLICH",
    },
    {
        quote : "Your love fills my heart with abundant bliss.",
        author : "sunhongs",
    },
    {
        quote : "사랑 받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.",
        author : "벤자민 프랭클린",
    },
    {
        quote : "사랑은 결정이 아니다. 사랑은 감정이다. 누구를 사랑할지 결정할 수 있다면 훨씬 더 간단하겠지만 마법처럼 느껴지지는 않을 것이다.",
        author : "트레이 파커",
    },
]

const quote = document.querySelector("#wiseSaying_box p")
const author = document.querySelector("#wiseSaying_box span")

    const random = wiseSaying[Math.floor(Math.random() * wiseSaying.length)]
    quote.innerText =  random.quote;
    author.innerText = random.author;

