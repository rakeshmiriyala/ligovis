<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: auto; padding: 20px;">

  <h1>Ligovis Upgrade</h1>

  <p>Ligovis Upgrade is a modern web solution for Ligovis, a digital marketing agency. This project includes an upgraded frontend and backend architecture aimed at providing a seamless user experience, faster performance, and enhanced scalability for Ligovis's services.</p>

  <h2>🚀 Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React.js, Tailwind CSS, React Router, AOS, Framer Motion</li>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB</li>
    <li><strong>Hosting:</strong> Render, AWS (Elastic Beanstalk), Netlify</li>
    <li><strong>Others:</strong> SheetDB API, React Icons, EmailJS, Axios</li>
  </ul>

  <h2>🌟 Features</h2>
  <ul>
    <li>Fully responsive UI/UX</li>
    <li>Interactive animations with AOS and Framer Motion</li>
    <li>Dynamic content handling using SheetDB API</li>
    <li>Contact form integration with EmailJS</li>
    <li>SEO optimized pages</li>
    <li>Service showcase for Ligovis offerings</li>
    <li>Scalable backend with RESTful APIs</li>
    <li>Deployment ready with CI/CD support</li>
  </ul>

  <h2>📂 Folder Structure</h2>
  <pre>
ligovis_upgrade/
│
├── client/            # Frontend (React.js)
│   ├── public/
│   ├── src/
│   │   ├── assets/    # Images, videos
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── tailwind.config.js
│
├── server/            # Backend (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── README.md
└── ...
  </pre>

  <h2>🔧 Installation</h2>

  <h3>1. Clone the repository</h3>
  <pre><code>
git clone https://github.com/rakeshmiriyala/ligovis_upgrade.git
cd ligovis_upgrade
  </code></pre>

  <h3>2. Setup Frontend</h3>
  <pre><code>
cd client
npm install
npm start
  </code></pre>

  <h3>3. Setup Backend</h3>
  <pre><code>
cd server
npm install
node server.js
  </code></pre>

  <h2>⚙️ Environment Variables</h2>

  <h3>Backend (server/.env)</h3>
  <pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
SHEETDB_URL=your_sheetdb_api_endpoint
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
  </pre>

  <h3>Frontend (client/.env)</h3>
  <pre>
REACT_APP_SHEETDB_URL=your_sheetdb_api_endpoint
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
  </pre>

  <h2>🚀 Deployment</h2>
  <ul>
    <li><strong>Frontend:</strong> Deployed on Netlify or Render</li>
    <li><strong>Backend:</strong> Hosted on AWS Elastic Beanstalk or Render</li>
  </ul>

  <h2>🤝 Contribution</h2>
  <p>Contributions are welcome! Feel free to fork the repo, raise issues, or submit pull requests.</p>

  <h2>📜 License</h2>
  <p>This project is licensed under the MIT License.</p>

  <h2>📞 Contact</h2>
  <p>
    <strong>Rakesh Miriyala</strong><br>
    📧 rakeshmiriyala@example.com<br>
    🌐 
    <a href="https://linkedin.com/in/rakeshmiriyala" target="_blank">LinkedIn</a> | 
    <a href="https://github.com/rakeshmiriyala" target="_blank">GitHub</a>
  </p>

</body>
