// start redis server
redis-server

// to access redis command line interface
redis-cli

// default port
127.0.0.1:6379

// show connected database
redis-cli INFO | grep connected

// show connected database
redis-cli INFO | grep ^db

// delete key and values
redis-cli flushall (remove data from ALL database)
redis-cli flushall (remove data from ALL database)
