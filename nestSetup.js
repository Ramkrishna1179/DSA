//1. if we got nest not found issue then run the below commands 

//0. npm i -g @nestjs/cli
//1.export PATH="$PATH:$(npm config get prefix)/bin"
//2.source ~/.bashrc  # or source ~/.zshrc if you're using zsh
//3.nest new priject-name

// 2. for creating the tables in the databse by using the migrations first we need to create the migrations folder inside the src directory like src/migrations 

// then we need to create the datasource.ts file in src with database cofigurations.

//after creating this datasource.ts file we will create the entities folder and define the columns of our tables then we will run the below command for creating the migration file inside the migrations folder 


//command  npx typeorm-ts-node-commonjs migration:create src/migrations/TaxDeedTable where TaxDeedTable is our table name 

// After creating the migration file we have to write the up.sql and down.sql queries for creating the databse tables in database and after that we will import the created entity in the datasource.ts file by using the ../ path and then we will run the below command which will create the table in our databse 

//command npx typeorm-ts-node-commonjs migration:run -d src/config/datasource.ts



