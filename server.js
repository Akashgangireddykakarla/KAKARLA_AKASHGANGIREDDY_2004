
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const { data } = req.body;
  const userId = 'your_user_id'; // Replace with actual logic
  const collegeEmail = 'your_college_email'; // Replace with actual logic
  const collegeRollNumber = 'your_roll_number'; // Replace with actual logic
  const numbersArray = data.filter(item => typeof item === 'number');
  const alphabetsArray = data.filter(item => typeof item === 'string');
  const highestLowercase = Math.max(...alphabetsArray.map(str => str.toLowerCase().charCodeAt(0)));

  const response = {
    status: 'success',
    userId,
    collegeEmail,
    collegeRollNumber,
    numbersArray,
    alphabetsArray,
    highestLowercase: String.fromCharCode(highestLowercase),
  };

  res.json(response);
});


app.get('/api/operation-code', (req, res) => {
  const operationCode = 'your_operation_code'; // Replace with actual logic
  res.json({ operationCode });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
