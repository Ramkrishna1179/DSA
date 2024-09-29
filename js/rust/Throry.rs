
  // .1) For creating and generating the migration in rust with diesel orm and Actix_web framework

     // a.) diesel setup   ->  
    // This command will create the migrations folder in root dir and it will also create the migration table in database.
    
    // b.) diesel generate migration name of the migration => diesel generate migration mymigration 
   // This will create the the new migration with our specified name and inside this we wiil have up.sql and down.sql so inside this files we will write the code for creating and deleting the table from the database.
   
    //  c.) diesel migration run mymigration ->
   // This command will create the table in the database with our specified columns. 
   




   
   // .2) Rabbitmq instalaltion video on ubuntu = https://www.youtube.com/watch?v=eazz-Je4HAA