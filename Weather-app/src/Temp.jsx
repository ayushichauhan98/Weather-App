import React, { useEffect, useState } from "react";

export default function Temp() {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('mumbai')
  const api_key='7d92e3e183a61af44700f4c73a598539'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}`

  useEffect(() => {
  

    fetch(url).then((res)=>{
      return res.json()
    }).then((data)=>{
      setCity(data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

  function handleWeather() {
  

    fetch(url).then((res)=>{
      return res.json()
    }).then((data)=>{
      setCity(data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          {/* ============== */}

          <div className="col-sm-10 text-center py-2">
            <input type="search" placeholder="Enter Your city name.." className="inputFeild form-control" onChange={(e) => { setSearch(e.target.value) }} />
            <input type="submit" className="btn btn-primary mt-2" value="Search" onClick={handleWeather} />
            <br /><br />

            {!city ? (

              <p>No Data Found</p>

            ) : (

              <>
              <div className="row">
                <div className="card py-2">
                  <div className="card-title text-center text-success">
                    <h3>{city.name}</h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>temp</th>
                          <th>min temp</th>
                          <th>max temp</th>
                          <th>visibility</th>
                          <th>Pressure</th>
                          <th>icon</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{city.main.temp} °C </td>
                          <td>{city.main.temp_min} °C </td>
                          <td>{city.main.temp_max} °C </td>
                          <td> {city.visibility} </td>
                          <td>{city.main.pressure}</td>
                          <td>{city.weather[0].icon}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
              </>

            )

            }





            {/* ================== */}
            <div className="col-sm-1"></div>
          </div>
        </div>

      </div>
    </>
  )
}