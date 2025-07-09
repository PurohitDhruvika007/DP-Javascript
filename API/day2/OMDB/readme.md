<section>
  <h1>🎬 Movie Info Finder</h1>
  <p>
    This is a simple web application built using HTML, CSS (Bootstrap 5), and JavaScript. It allows users to enter the name of any movie and fetch detailed information about it using the <strong>OMDb API</strong> (Open Movie Database API).
  </p>
</section>

<section>
  <h2>🚀 Features</h2>
  <ul>
    <li>Enter a movie name and instantly fetch movie data.</li>
    <li>Displays poster image, plot, director, cast, genre, and awards.</li>
    <li>Utilizes <code>localStorage</code> to persist the last searched movie across browser refreshes.</li>
    <li>Responsive layout powered by Bootstrap 5.</li>
  </ul>
</section>

<section>
  <h2>🛠 Technologies Used</h2>
  <ul>
    <li><strong>HTML5</strong> – Page structure and semantic layout.</li>
    <li><strong>Bootstrap 5</strong> – Styling and responsiveness.</li>
    <li><strong>JavaScript</strong> – DOM manipulation, fetch API, and local storage handling.</li>
    <li><strong>OMDb API</strong> – External API used to fetch movie data. (<a href="https://www.omdbapi.com/">https://www.omdbapi.com/</a>)</li>
  </ul>
</section>

<section>
  <h2>📦 How It Works</h2>
  <ol>
    <li>User enters a movie title into the input field and clicks <strong>Submit</strong>.</li>
    <li>The app constructs an API request using that title and sends a `fetch` request to OMDb API.</li>
    <li>The movie details are retrieved in JSON format and displayed on the page.</li>
    <li>The title is stored in <code>localStorage</code> so that on next page load, the last searched movie is automatically shown.</li>
  </ol>
</section>

<section>
  <h2>📂 File Structure</h2>
  <ul>
    <li><code>index.html</code> – Main HTML file with structure and bootstrap layout.</li>
    <li><code>script.js</code> – JavaScript file containing logic to fetch and display movie data.</li>
  </ul>
</section>

<section>
  <h2>📌 Notes</h2>
  <ul>
    <li>Make sure to replace the API key with your own if needed. This demo uses <code>apikey=c77200a9</code>.</li>
    <li>Only fetches movie data using the title (`&t=Title`) query parameter.</li>
    <li>If a movie is not found, it may return blank or throw a console warning. You can add error handling for better UX.</li>
  </ul>
</section>

<section>
  <h2>✨ Sample Usage</h2>
  <p>Search for movies like <strong>Interstellar</strong>, <strong>Inception</strong>, <strong>Iron Man</strong> etc., and see instant results including poster, plot, cast, and more.</p>
</section>
<h2>🎥 video</h2>

https://github.com/user-attachments/assets/b370234a-bdf6-4f53-89c8-3f6c9987e409

