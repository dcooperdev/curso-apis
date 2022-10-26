## Routes


### ``LOGIN``

*   /api/
    *   /login-user
    *   /create-user

### ``PRIVATE-DATA``

*   /api/
    *   /private-data


### ``USER-API``

*   /v1/
    *   /create-user

### Steps

1) cd curso-apis

2) CLI:
````
mongod --dbpath ./db
````

3) Open 3 more CLI

    1)  cd login => ``npm run nodemon``
    2)  cd private-data => ``npm run nodemon``
    3)  cd user-api => ``npm run nodemon``
<br>
<br>

4) ### ``LOGIN``

 ``"POST"``: localhost:<'PORT'>/api/create-user

````
{
  "email":"",
  "password":"",
  "name":"",
  "lastName":"",
  "age":""
}
````
* RETURN _doc
* SAVES in "longindb" => email, hashed password

* Trigger request to ``USER-API`` => :


  ### ``USER-API``:

  * Trigger => ``"POST"``: localhost:<'PORT'>/v1/create-user

  * SAVE "users" =>  name, lastName, age

<br>


5) ### ``LOGIN``:

``"POST"``: localhost:<'PORT'>/api/login-user


````
{
  "email":"",
  "password":""
}
````

RETURN {"token": "<'CONTENT'>}


``IF`` { "messaghe": "Cannot read properties of null (reading 'password')"} = "email in DB not found"

* Copy token in headers:

  * header: token - value: <'CONTENT'>

<br>


6)   ### ``LOGIN``

 ``"GET"``: localhost:<'PORT'>/api/login-user

  * {"token_status": "valid"}
  * {"message": "invalid token"}
  * No header = {"message": "jwt must be provided"}

<br>

7)  ### ``PRIVATE-DATA``
    * In developement