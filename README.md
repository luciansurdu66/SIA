# Student Internship Application - Server

This application serves as the backend application for the SIA platform.



## Tech Stack
**ASP.NET Core 8**  
**PostgreSQL 16**


## Pre-requisites

Install PostgreSQL with default settings and the password set to **admin**

Create a database from pgAdmin4 with the name **SIA_RO_DEV**, on port **5432**

Install Visual Studio 2022 Community (I think Rider works too, I should test this. Also, EntityFramework Tools should be installed when the VS is configuring the project)
    
## Run Locally

Clone the project

```bash
git clone https://github.com/cristiifrim/SIA.git
```

Open the solution in Visual Studio (Rider compatibility not documented yet)

Update the database(You can use LCTRL + ` to open a terminal in VS)

```bash
dotnet ef database update --project SIA.Infrastructure --startup-project SIA.Web
```

Start the server from VS 
OR
Run from the root directory in the command terminal

```bash
dotnet run --project .\SIA.Web\SIA.Web.csproj
```

## Adding migrations (only for BE devs)

Migrations have a special command as we need to specify both the project containing the DbContext and the project containing the connection strings.

When you want to add a migration you should use

```bash
dotnet ef migrations add Migration_Name --project SIA.Infrastructure --startup-project SIA.Web
```

