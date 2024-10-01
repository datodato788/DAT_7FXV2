fetch("https://discord.com/api/guilds/1273294291518619749/widget.json").then((d) => { return d.json() }).then((user) => {
    // 
    // console.log(user.presence_count    )



    if (user.presence_count == 2) {

        const imgAvatar = document.getElementById("imgAvatar")
        const Avatar1 = document.createElement("img")
        Avatar1.setAttribute("src", user.members[1].avatar_url)
        const Avatar2 = document.createElement("img")
        Avatar2.setAttribute("src", user.members[1].avatar_url)
        const userName = document.getElementById("userName")
        const Name = document.createElement("h2")
        // -
        const Main_avatar = document.getElementById("Main_avatar")
        Main_avatar.appendChild(Avatar2)



        // -----------------------------------
        const nameCheck = (name) => {
            if (name.slice(-1) == "-" || name.slice(-1) == "." || name.slice(-1) == ",") {
                if (name.slice(-2) == "-." || name.slice(-2) == ".," || name.slice(-2) == "-,") {
                    if (name.slice(-3) == "-.,") {
                        return name.slice(0, -3)

                    }
                    return name.slice(0, -2)


                }

                return name.slice(0, -1)

            }
        }
        Name.innerHTML = nameCheck(user.members[1].username)
        imgAvatar.appendChild(Avatar1)

        userName.appendChild(Name)

    } else if (user.presence_count == 1) {
        const imgAvatar = document.getElementById("imgAvatar")
        const Avatar = document.createElement("img")
        Avatar.setAttribute("src", "img/ryan.png")
        const userName = document.getElementById("userName")
        const Name = document.createElement("h2")
        const nameCheck = (name) => {
            if (name.slice(-1) == "-" || name.slice(-1) == "." || name.slice(-1) == ",") {
                if (name.slice(-2) == "-." || name.slice(-2) == ".," || name.slice(-2) == "-,") {
                    if (name.slice(-3) == "-.,") {
                        return name.slice(0, -3)

                    }
                    return name.slice(0, -2)


                }

                return name.slice(0, -1)

            }
        }
        Name.innerHTML = nameCheck(user.members[0].username)
        imgAvatar.appendChild(Avatar)
        userName.appendChild(Name)

    }

})
function play(){
  const play = document.getElementById("play")
  const myVideo = document.getElementById("myVideo")
  play.style.display = "none"
  myVideo.play()
  myVideo.onload()
}