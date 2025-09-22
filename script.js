console.log('Salut')
const API_KEY='4774e3f272c6f85fa2a1126fe6665069'
const city='Galati'
let c_soare=document.querySelector('#c_soare')
async function getWheater(){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ro`)
    const data=await response.json()
    console.log(data)
    c_soare.innerHTML=`
         <svg xmlns="http://www.w3.org/2000/svg" height="130px" viewBox="0 -960 960 960" width="130px" fill="#FFFF55"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>
                <p id="grade">${data.main.temp}°C</p>
                <p id="loc_tar">${data.name}, ${data.sys.country}</p>
                <div id="date">
                    <div id="list">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#75FBFD"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"/></svg>
                        <div id="umiditate">
                            <p>Umiditate</p>
                            <p class='atribute'>${data.main.humidity}%</p>
                        </div>
                    </div>
                    <div id="list">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#CCCCCC"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg>
                        <div id="umiditate">
                            <p>Vant</p>
                            <p class='atribute'>speed ${data.wind.speed}m/s</p>
                        </div>
                    </div>
                </div>
    `
}
getWheater()