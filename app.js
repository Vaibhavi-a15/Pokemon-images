const MyDiv = document.querySelector("div")

for(let i = 1; i < 1000; i++)
{
    const MyImg = document.createElement("img")
    MyImg.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)

    MyDiv.append(MyImg)
}