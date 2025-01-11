# MongoDB $in Operator Error with Single Value

This repository demonstrates a common error when using the `$in` operator in MongoDB queries.  The `$in` operator is designed to check if a field's value exists within an array.  However, if a single value is used instead of an array, the query will behave unexpectedly.

## Problem Description
The provided code attempts to find a document with the `name` field equal to `'John Doe'`. It incorrectly uses the `$in` operator with a single string value, instead of an array containing the value.

## Solution
The solution involves using the `$in` operator correctly, providing an array containing the value to be matched. This ensures that the query behaves as intended.