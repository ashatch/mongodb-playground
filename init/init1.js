db.test1.insert({ myfield: 'test1', anotherfield: 'TEST1' });
db.test1.insert({ myfield: 'test2', anotherfield: 'TEST2' });
db.test1.createIndex({myfield: 1});
