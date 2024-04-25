import http from 'http';

// Create a simple JSON object to be sent as response
const jsonData = {
  message: 'Hello, world!',
  date: new Date()
};

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' // This allows requests from any origin; adjust as needed
  });

  // Convert JSON object to string and send as response
  res.end(JSON.stringify(jsonData));
});

// Set the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
