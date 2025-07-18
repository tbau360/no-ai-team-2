import React, { useEffect, useState } from "react";
import './App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// require('dotenv').config()
import { getCommitAuthors } from "../../endpoints/getCommitAuthors";
import { getCommitOutliers } from "../../endpoints/getCommitOutliers";

export function App() {
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 30)));
  const [endDate, setEndDate] = useState(new Date());
  const [metricType, setMetricType] = useState('commits')
  const [author, setAuthor] = useState('')
  const [authorList, setAuthorList] = useState([])
  const [commitOutliers, setCommitOutliers] = useState([])

  const words = [
    { text: "hello", value: 12 },
    { text: "world", value: 2 },
  ];

  useEffect(() => {
    async function fetchData() {
      let data = await getCommitAuthors({
        "start_date": startDate.toISOString().split('T')[0],
        "end_date": endDate.toISOString().split('T')[0]
      })

    setAuthorList(data)
    }
   fetchData()
  }, [setAuthorList])


  async function fetchCommitOutliers() {
    let data = await getCommitOutliers({
      "start_date": startDate.toISOString().split('T')[0],
      "end_date": endDate.toISOString().split('T')[0]
    })

  setCommitOutliers(data)
  }

 useEffect(() => {
    fetchCommitOutliers()
  }, [setCommitOutliers])


  return (
    <div>
      <h2 id="title">
        No AI Team 2 Git Commit Tracker
      </h2>
      <div id="container">
        <div>
          <div className="container-element">
            <span>Start Date: </span>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="container-element">
            <span>End Date: </span>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </div>
          <div className="container-element">
            <button onClick={()=>fetchCommitOutliers()}>Search</button>
          </div>
        </div>
      </div>
      <div className="container-element" id="table-container">
        <table>
          <tbody>
            <tr>
              <th>
                Author
              </th>
              <th>
                Message
              </th>
              <th>
                Sha
              </th>
              <th>
                Additions
              </th>
              <th>
                Deletions
              </th>
              <th>
                Size
              </th>
              <th>
                Deviation
              </th>
            </tr>
            {
              commitOutliers != [] ? commitOutliers.map((co)=>(
                <tr>
                  <td>{co.author.name}</td>
                  <td>{co.message}</td>
                  <td>{co.sha}</td>
                  <td>{co.additions}</td>
                  <td>{co.deletions}</td>
                  <td>{co.additions+co.deletions}</td>
                  <td>{co.deviation_score}</td>
                </tr>
              )) : null
            }
          </tbody>
        </table>
      </div>
      <div className="container-element">
        <span>Metric Type: </span>
        <select onChange={(metricType) => setMetricType(metricType)}>
          {
            ['commits', 'additions', 'deletions', 'total_changes'].map((e) =>
              <option key={e}>{e}</option>
            )
          }
        </select>
      </div>
      <div className="container-element">
        <span>Author: </span>
        <select onChange={(author) => setAuthor(author)}>
          {

            authorList != [] ? authorList.map((e) =>
              <option key={e}>{e.email}</option>
            ) : null
          }
        </select>
      </div>
    </div>
  );
}
