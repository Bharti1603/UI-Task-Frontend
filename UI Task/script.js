
fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {

    return data.json()
}).then((actualdata) => {
    console.log(actualdata);

    let btns = document.querySelectorAll('button');
    for (i of btns) {
        i.addEventListener('click', function () {
            console.log(this.id);
document.getElementById("user-info-main-section").innerHTML = "";

            if (this.id == "0") { 

                for (let i = this.id; i < actualdata.length; i++) {

                    let content = document.getElementById("user-info-main-section");
                    let output = document.createElement("div");
                    output.classList.add("user-info-section");
                    output.innerHTML = `<div class="info-Id"> ${actualdata[i].id}</div>
                                        <div class="info-title">${actualdata[i].title}</div>
                                        <div class="info-text">${actualdata[i].body}</div>`;
                    // console.log(content);
                    // console.log(output);

                    content.appendChild(output);
 
                }

            }



            else {
                document.getElementById("user-info-main-section").innerHTML = "";

                for (let i = this.id; i < actualdata.length; i++) {
                    if (actualdata[i].userId == this.id) {

                        let content = document.getElementById("user-info-main-section");
                        let output = document.createElement("div");

                        output.classList.add("user-info-section");
                        output.innerHTML = `<div class="info-Id"> ${actualdata[i].id}</div>
                                            <div class="info-title">${actualdata[i].title}</div>
                                            <div class="info-text">${actualdata[i].body}</div>`;


                        // console.log(content);
                        // console.log(output);

                        content.appendChild(output);

                        
                    }
                }
            }

        });
    }
}

)