# 🦠 COVID-19 India Stats Table Viewer

  <p>A responsive web application that displays the latest COVID-19 statistics across Indian states using data from the <a href="https://api.rootnet.in/" target="_blank">Rootnet COVID-19 API</a>. Built with <strong>HTML</strong>, <strong>Bootstrap</strong>, and <strong>JavaScript</strong>.</p>

  <h3>📊 Features</h3>
  <ul>
    <li>📡 Fetches real-time COVID-19 data from the Rootnet public API</li>
    <li>📍 Displays per-state statistics: Indian & Foreign Cases, Discharged, Deaths, and Total Cases</li>
    <li>🖥️ Responsive Bootstrap table with hover and striped row styling</li>
    <li>🔄 Automatically loads data on page load</li>
  </ul>

  <h3>🛠️ Technologies Used</h3>
  <ul>
    <li><strong>HTML5</strong> – Structure</li>
    <li><strong>Bootstrap 5</strong> – UI styling and responsive layout</li>
    <li><strong>JavaScript (Vanilla)</strong> – Fetching and rendering data</li>
    <li><strong>Rootnet API</strong> – COVID-19 India dataset source</li>
  </ul>

  <h3>📂 Project Structure</h3>
  <pre><code>📦 covid19-india-dashboard
 ┣ 📄 index.html       # Main HTML file
 ┣ 📄 script.js        # JavaScript logic to fetch and display data
 ┗ 📄 (Bootstrap via CDN) # No separate CSS needed
  </code></pre>

  <h3>🔧 How It Works</h3>
  <ol>
    <li>Fetches data from <code>https://api.rootnet.in/covid19-in/stats/latest</code></li>
    <li>Maps over the <code>data.regional</code> array</li>
    <li>Dynamically creates table rows with data such as state name, cases, and deaths</li>
    <li>Appends each row to the Bootstrap table's body</li>
  </ol>

  <h3>📡 Sample API Response</h3>
  <pre><code>{
  "data": {
    "regional": [
      {
        "loc": "Maharashtra",
        "confirmedCasesIndian": 120000,
        "confirmedCasesForeign": 50,
        "discharged": 100000,
        "deaths": 3000,
        "totalConfirmed": 123050
      },
      ...
    ]
  }
}</code></pre>

  <h3>💡 Possible Improvements</h3>
  <ul>
    <li>🕒 Add last updated timestamp</li>
    <li>🔍 Add search/filter by state</li>
    <li>📊 Add charts using Chart.js or ApexCharts</li>
    <li>🌙 Add light/dark mode toggle</li>
  </ul>

  <h3>🙌 Acknowledgements</h3>
  <ul>
    <li><a href="https://api.rootnet.in/" target="_blank">Rootnet API</a> – For providing the free COVID-19 India dataset</li>
    <li>Built with 💻, ☕, and ❤️</li>
  </ul>

  <h3>🎥 video</h3>

https://github.com/user-attachments/assets/6d6c87bc-9218-47a3-b147-3513f0ba2069

