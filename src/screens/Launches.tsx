import { useEffect, useState } from "react"
import { LaunchesInterface } from "../interfaces/Launches.interface"
import { Spinner } from "react-bootstrap";

export default function Launches() {

  const [Launches, setLaunches] = useState<LaunchesInterface[]>([])

  useEffect(() => {
    getLaunches();
  }, [])



  function getLaunches(): void {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        return response.json() as Promise<LaunchesInterface[]>
      })
      .then((data) => {
        setLaunches(data);
      })
      .catch((e) => {
        alert(e)
      })
  }

  if (!Launches) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <>
      <table className="table">
        <tbody>
          {Launches.map(l => (
            <tr>
              <th scope="row"> {l.flight_number} </th>
              <td> {l.mission_name} </td>
              <td> {l.launch_year} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
