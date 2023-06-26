import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CapsulesInterface } from "../interfaces/Capsules.Interface";

export default function Capsules() {
  const [Launches, setLaunches] = useState<CapsulesInterface[]>([])

  useEffect(() => {
    getLaunches();
  }, [])



  function getLaunches(): void {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => {
        return response.json() as Promise<CapsulesInterface[]>
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
              <th scope="row"> {l.capsule_serial} </th>
              <td> {l.status} </td>
              <td> {l.details} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
