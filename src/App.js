import React from 'react'
import './App.css'
import kanji from './kanji.json'
import kanjidic from './kanjidic.json'

function App() {
  const readings = kanji.data.map(kanjiSet =>
    kanjiSet.map(kanji => kanjidic.find(entry => entry.kanji === kanji))
  )

  return (
    <div>
      {readings.map((readingMatch, index) => (
        <table
          className="table table-bordered"
          key={index}
          style={{ pageBreakAfter: 'always' }}>
          <tbody>
            {readingMatch.map(reading => (
              <tr key={reading.kanji}>
                <td>{reading.kanji}</td>
                <td>
                  <div>
                    {reading.onyomi &&
                      reading.onyomi.map(on => <div key={on}>{on}</div>)}
                  </div>
                </td>
                <td>
                  <div>
                    {reading.kunyomi &&
                      reading.kunyomi.map(kun => <div key={kun}>{kun}</div>)}
                  </div>
                </td>
                <td>
                  <div>{reading.meaning && reading.meaning.join(', ')}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
      {/* <pre>
        <code>{JSON.stringify(readings, null, 2)}</code>
      </pre> */}
    </div>
  )
}

export default App
