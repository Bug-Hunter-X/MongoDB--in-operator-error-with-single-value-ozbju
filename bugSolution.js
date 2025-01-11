```javascript
const query = { name: 'John Doe' };

// Correct use of $in operator with an array of values
db.collection('users').find( { name: { $in: ['John Doe'] } } ).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```