const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': "https://placeimg.com/64/64/1",
          'name': '오재욱',
          'birthday': '940605',
          'gender': '남자',
          'job': 'NASA'
        },
        {
          'id': 2,
          'image': "https://placeimg.com/64/64/2",
          'name': '송호연',
          'birthday': '940614',
          'gender': '여자',
          'job': 'Google'
        },
      
        {
          'id': 3,
          'image': "https://placeimg.com/64/64/3",
          'name': '가나다라',
          'birthday': '920324',
          'gender': '남자',
          'job': '회사원'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));