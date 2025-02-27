fetch("https://discord.com/api/guilds/1273294291518619749/widget.json")
  .then((d) => {
    return d.json();
  })
  .then((user) => {
    const status = document.getElementById("status");
    const sw = document.getElementById("sw");
    const style = document.getElementById("style");
    if (user.presence_count == 2) {
      const imgAvatar = document.getElementById("imgAvatar");
      const Avatar2 = document.createElement("img");
      Avatar2.setAttribute("src", user.members[1].avatar_url);
      const userName = document.getElementById("userName");
      const Name = document.createElement("h2");
      // -
      const Main_avatar = document.getElementById("Main_avatar");
      Main_avatar.appendChild(Avatar2);
      // -
 
      if (user.members[1].status == "online") {
        Avatar2.classList.add("onlineC");
        sw.style.backgroundColor = " rgb(7, 255, 28)";
        style.innerHTML = ` @keyframes rainbow {
        0% {
          box-shadow: 0 0 20px  rgb(7, 255, 28);
        }
        25% {
          box-shadow: 0 0 20px  rgba(73, 240, 87, 0.3);
        }
        50% {
          box-shadow: 0 0 20px  rgb(7, 255, 28);
        }
        75% {
          box-shadow: 0 0 20px  rgba(70, 245, 85, 0.41);
        }
        100% {
          box-shadow: 0 0 20px  rgb(7, 255, 28);
        }
      }`;
      } else if (user.members[1].status == "idle") {
        sw.style.backgroundColor = "yellow";
        style.innerHTML = ` @keyframes rainbow {
        0% {
          box-shadow: 0 0 20px rgb(238, 255, 0);
        }
        25% {
          box-shadow: 0 0 20px rgba(238, 255, 4, 0.13);
        }
        50% {
          box-shadow: 0 0 20px rgb(238, 255, 0);
        }
        75% {
          box-shadow: 0 0 20px rgba(238, 255, 0, 0.24);
        }
        100% {
          box-shadow: 0 0 20px rgb(238, 255, 0);
        }
      }`;
        Avatar2.classList.add("idleC");
      } else if (user.members[1].status == "dnd") {
        sw.style.backgroundColor = "red";
        style.innerHTML = ` @keyframes rainbow {
        0% {
          box-shadow: 0 0 20px rgb(255, 0, 0);
        }
        25% {
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.37);
        }
        50% {
          box-shadow: 0 0 20px rgb(255, 0, 0);
        }
        75% {
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.37);
        }
        100% {
          box-shadow: 0 0 20px rgb(255, 0, 0);
        }
      }`;
        Avatar2.classList.add("dndC");
      }

      // -----------------------------------
      const nameCheck = (name) => {
        if (
          name.slice(-1) == "-" ||
          name.slice(-1) == "." ||
          name.slice(-1) == ","
        ) {
          if (
            name.slice(-2) == "-." ||
            name.slice(-2) == ".," ||
            name.slice(-2) == "-,"
          ) {
            if (name.slice(-3) == "-.,") {
              return name.slice(0, -3);
            }
            return name.slice(0, -2);
          }

          return name.slice(0, -1);
        }
      };
      Name.innerHTML = nameCheck(user.members[1].username);

      userName.appendChild(Name);
    } else if (user.presence_count == 1) {
      const Avatar2 = document.createElement("img");
      Avatar2.setAttribute("src", "img/ryan.png");
      const userName = document.getElementById("userName");
      const Name = document.createElement("h2");
      // -

      const nameCheck = (name) => {
        if (
          name.slice(-1) == "-" ||
          name.slice(-1) == "." ||
          name.slice(-1) == ","
        ) {
          if (
            name.slice(-2) == "-." ||
            name.slice(-2) == ".," ||
            name.slice(-2) == "-,"
          ) {
            if (name.slice(-3) == "-.,") {
              return name.slice(0, -3);
            }
            return name.slice(0, -2);
          }

          return name.slice(0, -1);
        }
      };
      sw.style.backgroundColor="white"
      style.innerHTML = `@keyframes rainbow {
        0% {
          box-shadow: 0 0 20px  rgb(255, 255, 255);
        }
        25% {
          box-shadow: 0 0 20px  rgba(255, 255, 255, 0.36);
        }
        50% {
          box-shadow: 0 0 20px  rgb(255, 255, 255);
        }
        75% {
          box-shadow: 0 0 20px  rgba(255, 255, 255, 0.37);
        }
        100% {
          box-shadow: 0 0 20px  rgb(255, 255, 255);
        }`
        Avatar2.classList.add("offlineC");

      const Main_avatar = document.getElementById("Main_avatar");
      Main_avatar.appendChild(Avatar2);
      Name.innerHTML = nameCheck(user.members[0].username);
      userName.appendChild(Name);
    }
  });

function loading() {
  const load = document.getElementById("load");
  load.style.display = "none";
}
