# M&M Test task

## Run and Build application

### 📦 Build docker

`docker build -t confi .`

### 🏃‍♂️ Run docker

`docker run --env-file=".env" confi`

## 🧪 Start test

`npm t`

---

-[x] Create monogo db on atlas, and mongo connector in db.ts

-[x] Logger (winston)

- bcrypt or jwt password login for admin
- delete conference
- Swagger
- Implement nodemailer and send email with (G-Mail)
- Create mock inviroment for unit test
- Dockerize
