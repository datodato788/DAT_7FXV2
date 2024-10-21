fetch("https://discord.com/api/guilds/1273294291518619749/widget.json").then((d) => { return d.json() }).then((user) => {


    const status = document.getElementById("status")

    if (user.presence_count == 2) {

        const imgAvatar = document.getElementById("imgAvatar")
        const Avatar1 = document.createElement("img")
        Avatar1.classList.add("cardImgs")
        Avatar1.setAttribute("src", user.members[1].avatar_url)
        const Avatar2 = document.createElement("img")
        Avatar2.setAttribute("src", user.members[1].avatar_url)
        const userName = document.getElementById("userName")
        const Name = document.createElement("h2")
        // -
        const Main_avatar = document.getElementById("Main_avatar")
        Main_avatar.appendChild(Avatar2)
        // -
        if (user.members[1].status == "online") {
            status.innerHTML = '<img class="online" src="img/online.png" alt="online">'
            Avatar2.classList.add("onlineC")



        } else if (user.members[1].status == "idle") {
            status.innerHTML = '<img class="idle" src="img/idle.png" alt="idle">'

            Avatar2.classList.add("idleC")

        } else if (user.members[1].status == "dnd") {
            status.innerHTML = ' <img class="dnd" src="img/dnd.png" alt="dnd">'
            Avatar2.classList.add("dndC")


        }


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
        const Main_avatar = document.getElementById("Main_avatar")

        const Avatar1 = document.createElement("img")
        Avatar1.classList.add("cardImgs")

        const Avatar2 = document.createElement("img")

        Avatar1.setAttribute("src", "img/ryan.png")
        Avatar2.setAttribute("src", "img/ryan.png")

        status.innerHTML = '<img class="offline" src="img/offline.png" alt="offline" />'
        Avatar2.classList.add("offlineC")


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
        imgAvatar.appendChild(Avatar1)
        Main_avatar.appendChild(Avatar2)

        userName.appendChild(Name)

    }

})
function play() {
    const audio = document.getElementById("audio")
    const play = document.getElementById("play")
    const myVideo = document.getElementById("myVideo")
    play.style.display = "none"
    myVideo.play()
    audio.play()
}
function loading() {
    const load = document.getElementById("load")
    load.style.display = "none"

}