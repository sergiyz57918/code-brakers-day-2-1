let userInput = game.askForString("Type a word to encrypt")
let textList: string[] = []
for (let index = 0; index <= userInput.length; index++) {
    textList.push(userInput.charAt(0))
}
textList.reverse()
game.splash(textList)
