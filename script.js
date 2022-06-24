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

if (firstChoice === 'Vecna') {
  const partnerVecna = prompt(
    `You are very brave, ${name}, will you be going to the Upsidedown with Steve or Robin?`
  )

  if (partnerVecna === 'Steve') {
    const steveFriends = prompt(
      `You chose ${partnerVecna}. Strong Choice. How many friends are you bringing on the fight?`
    )
    if (parseInt(steveFriends) < 1) {
      alert(
        `OH NO, ${name}, You didn't bring any backup. Vecna killed you and Steve!`
      )
      location.reload()
    } else {
      alert(
        `Good job! You and Steve picked ${steveFriends} friends, and have defeated Vecna!`
      )
    }
  } else if (partnerVecna === 'Robin') {
    const robinFriends = prompt(
      `You chose smart! How many friends will you and ${partnerVecna} bring to fight Vecna?`
    )
    if (parseInt(robinFriends) < 1) {
      alert(
        `Bad nove, ${name}! You didn't bring any friends. Now you and Robin are stuck in the Upsidedown forever!`
      )
      location.reload()
    } else {
      alert(
        `WOOHOO! You and Robin picked ${robinFriends}, and it was enough to finally defeat Vecna!`
      )
    }
  } else {
    alert(
      `That was not an option. Vecna made you into a human pretzel! The game will now restart.`
    )
    location.reload()
  }
} else if (firstChoice === 'Russians') {
  const partnerRussia = prompt(
    `Interesting choice, ${name}... Will you be fighting the Russians with Hopper or Murray?`
  )
  if (partnerRussia === 'Murray') {
    alert(`Murray is pretty cool, but you just died in a plane crash...`)
    location.reload()
  } else if (partnerRussia === 'Hopper') {
    const hopperDoes = prompt(
      `You chose Hopper! Great choice! He has been in captivity and needs to eat. What should he eat?`
    )
  }
}
