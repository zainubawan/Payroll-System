Start node server
  (prod) : npm start
  (dev) : npm run dev

Change configs in ./back-end/package.json for server

mongodb config file:
  D:/programs/MongoDB

Run mongodb server:
  $ cd D:
  $ mongod (has been aliased in .bashrc to read yml config file )

In another cmd:
  $ mongo


To seed data into database:

run mongodb server

then run seed command
$ node path_to_seed_file/collection_name.js


