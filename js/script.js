navigator.geolocation.getCurrentPosition (
    function(position){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=309cfbf55c84bcda344c5c45f47dbe0e`)
        .then(function (resp) {return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.info__name').textContent = data.name;
            document.querySelector('.info__temp').textContent = Math.round(data.main.temp - 273);
            document.querySelector('.info__feels').textContent = Math.round(data.main['feels_like'] - 273);
            document.querySelector('.info__clouds').textContent = data.weather[0]['description'];
            document.querySelector('.info__img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.info__speed').textContent = data.wind.speed;
        })
    
        .catch(function () {

        })
    }
    )
        
    
  