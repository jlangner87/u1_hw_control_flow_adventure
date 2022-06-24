let name = prompt(`Tell me your name.`)
alert(`Hello, ${name}, welcome to Hawkins.`)
const introQuestion = prompt(`Are you a stranger things fan ${name}?`)
if (introQuestion === 'Yes') {
  alert(
    `Ah! A true fan! Our friends in Hawkins are in danger, and you are the perfect one to help!`
  )
} else if (introQuestion === 'No') {
  alert(`Really? Okay... Hawkins is in danger, and they need your help anyway.`)
} else {
  alert(`Okay... You are the one to help save Hawkins.`)
}

const firstChoice = prompt(`${name}, do you want to fight Vecna or Russians?`)

// firstChoice === Vecna
if (firstChoice === 'Vecna') {
  const partnerVecna = prompt(
    `You are very brave, ${name}, will you be going to the Usidedown with Steve or Robin?`
  )

  // partnerVecna === Steve
  if (partnerVecna === 'Steve') {
    const steveFriends = prompt(
      `You chose ${partnerVecna}. Strong Choice. How many friends are you bringing on the fight?`
    )}

    // partnerVecna === Robin
  } else if (partnerVecna === 'Robin') {
    const robinFriends = prompt(
      `You chose ${partnerVecna}. Smart Choice. How many friends are you bringing on the fight?`
    )

    // partnerVecna === INVALID RESPONSE
  } else {
    alert(`That was not an option. Vecna got you! The game will now restart.`)
    location.reload()
    //I found this location.reload() command on https://www.w3schools.com/jsref/met_loc_reload.asp
    //I didn't know if it would do what I wanted, but it did!

  //firstChoice === Russians
} else if (firstChoice === 'Russians') {
  const partnerRussia = prompt(
    `Interesting choice, ${name}. Who do you want to fight with? Murray or Hopper?`
  )
} else {
  alert(
    `That was not an option. The Russians got you! The game will now restart.`
  )
  location.reload()
}
