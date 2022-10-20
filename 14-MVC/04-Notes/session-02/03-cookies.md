# Cookies and middleware

## Demo

- Open [17-Ins_Cookies](../../01-Activities/17-Ins_Cookies) and run
  - Create a user
  - Open [17-Ins_Cookies/server.js](../../01-Activities/17-Ins_Cookies/server.js)
    - Note `connect-session-sequelize` to store cookies in the DB
    - Checks expiry
    - Automatically saves the cookie to the DB
    - Makes you a cup of coffee in the morning
    - Explain what everything means in the session setup in `server.js`
  - Open the application in Chrome
    - Chrome -> dev tools -> application -> storage
    - Demonstrate the sid in the FE and the DB
- Open [19-Ins_Middleware](../../01-Activities/19-Ins_Middleware)
  - Logged in only to view the gallery
  - There is a better solution to this. Hint: It's related to Middleware

## Try

- Try [18-Stu_Cookies/README.md](../../01-Activities/18-Stu_Cookies/README.md)
- Try [20-Stu_Middleware/README.md](../../01-Activities/20-Stu_Middleware/README.md)
