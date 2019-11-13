function ready()
    console.log("Good")
    go.onclick = function () {
        let huz = document.createElement('p');
        huz.innerHTML = "Huzzah!"

        while (spam.onclick) {
            spam.append(huz);
        }
    }
document.addEventListener("DOMContentLoaded", ready);
