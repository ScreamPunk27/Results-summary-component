const skills=document.querySelector('.skills');
const data='./data.json';


const getData =()=>{
    fetch(data)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
        for(let i=0; i<data.length; i++){
            skills.insertAdjacentHTML('beforeend',`
                <div class="skill">
                    <div class="skill-left">
                        <div class="skill-img">
                            <img src="${data[i].icon}" alt="skill icon"/>
                        </div>
                        <p>${data[i].category}</p>
                    </div>
                    <div class="skill-right">
                        <p class="skill-score"><strong>${data[i].score}</strong> / 100</p>
                    </div>
                </div>
            `);
        }
    });
}

getData();