# Heroku

## Demo

- Ensure `heroku --version`
  - Can install from [here](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
  - `arch -x86_64` (if anyone faces issue on MAC)
- Copy [25-Ins_Heroku](../../01-Activities/25-Ins_Heroku) into a fresh GH repo

  - Demonstrate the application locally
  - Create heroku accounts
  - `heroku auth:login`
  - Notice that the application uses the `PORT` environment variable for the port that it listens to
  - `heroku create` at the root of the repository
  - Show the `heroku` remote in the repository
  - `git push heroku main`
  - `heroku open`
  - `heroku logs --tail`
  - Also show the new website from the heroku webpage

  - If you face any issue while deploying, delete the heroku app which was created and follow the below steps
  - `git remote -v`
  - `git remote rm heroku`
  - `heroku git:remote -a pure-crag-11805`(name of your app)

## Try

- Try [26-Stu_Heroku/README.md](../activities/26-Stu_Heroku/README.md)
