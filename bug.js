```javascript
const query = { name: 'John Doe' };

// Incorrect use of $in operator with a single value
db.collection('users').find( { name: { $in: 'John Doe' } } ).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```