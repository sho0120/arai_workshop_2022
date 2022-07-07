# arai_workshop_2022

## Preparation

- Install node.js and npm
  - https://nodejs.org/en/
  - LTS version (16.15.1) would be fine

## Steps

### 1. Fork this repository

### 2. Clone to local

### 3. Move to the cloned directory and install dependent packages

```
npm install
```

### 4. Install firebase-tools

```
npm install -g firebase-tools
```

### 5. Create Firebase project

- Access https://firebase.google.com

  - Sign in with your google account

- Create new project

![1](https://user-images.githubusercontent.com/52741042/177836517-c5d3a35c-57f4-4ee4-a481-d8bff36f6bdb.PNG)

- GA is not needed

![2](https://user-images.githubusercontent.com/52741042/177836529-9e999881-fc6c-4a34-814b-ba253c0b6081.PNG)

- Click 'Web' button

![3](https://user-images.githubusercontent.com/52741042/177836531-743af8f0-2d97-4d56-8326-642451314008.PNG)

- Set app nickname and Check Firebase Hosting and click 'Register App'

![4](https://user-images.githubusercontent.com/52741042/177836534-91221fc4-36a7-4b42-8b06-0283da82150e.PNG)

- <b>You don't have to follow the step 2 ~ 4.</b> But Just copy the app config

![5](https://user-images.githubusercontent.com/52741042/177836539-e8e691b1-bc28-44bc-9533-444081f12781.PNG)

(You can also see this config information in the 'project setting' menu)
![6](https://user-images.githubusercontent.com/52741042/177838715-b2fa21f9-81e7-4823-84b9-00fb94e20648.PNG)

- In the console, choose 'Cloud Firestore' and create new database

![7](https://user-images.githubusercontent.com/52741042/177839474-743cba4c-c9a8-4799-aa2c-ddb3e7ba389c.PNG)

![8](https://user-images.githubusercontent.com/52741042/177839465-ec430138-c8d4-41e3-9d78-f7c849625b69.PNG)

- TestMode would be fine

![9](https://user-images.githubusercontent.com/52741042/177839472-c88ac22a-5e67-4dd6-92c0-463d2263aab7.PNG)

- Choose your favorite region and create database.

![10](https://user-images.githubusercontent.com/52741042/177839473-edc83710-4419-4e0e-91f8-58a1c96c44ae.PNG)

### 6. Setup Project (Client Side)

- Open 'firebase.js' file and rewrite the firebaseConfig

![11](https://user-images.githubusercontent.com/52741042/177872712-29fe99c9-f5a1-45b4-b475-3bd71914e33a.PNG)

- You can see the app in http://localhost:3000 by run this command

```
npm run start
```

![12](https://user-images.githubusercontent.com/52741042/177872716-594dde22-79ce-4a20-a05a-e607b2678dcb.PNG)

- You have to see that the app is correctly connected to the database by looking the Firestore console.

![11_2](https://user-images.githubusercontent.com/52741042/177877559-41f0e26f-252e-49df-be55-a089775703a1.PNG)

### 7. Setup Deployment

- Open '.firebaserc' file and rewrite "arai-workshop-2022" to your firebase project ID (not project name).

![13_1](https://user-images.githubusercontent.com/52741042/177873285-09de58b1-a433-472a-9a3e-ff1ae939bed5.PNG)

- Login via firebase-tools and authenticate your account
  - This command will open your default browser

```
firebase login
```

![13_2](https://user-images.githubusercontent.com/52741042/177873284-a5095fb4-3aff-4e80-a699-391bd2d09f91.PNG)

- You can deploy your project by running
  - If succeeded, you can see your app in the 'Hosting URL'

```
npm run build
firebase deploy
```

![14](https://user-images.githubusercontent.com/52741042/177872718-b56cebb5-5a0b-4585-94af-c7141ebde61d.PNG)

### 8. Deploy Automation (using Github Actions)

- Get Tokens for CI by running this command and copy

```
firebase login:ci
```

![15](https://user-images.githubusercontent.com/52741042/177872720-19f2e9b1-d1ac-4ced-a62d-7dc461b210d1.PNG)

- Open Action Secrets settings in the github and add the secret called 'FIREBASE_TOKEN'

![16](https://user-images.githubusercontent.com/52741042/177872724-239bb2a0-87c1-416d-964e-da07cb34571d.PNG)

- Go to Actions setting and enable github actions

![15_2](https://user-images.githubusercontent.com/52741042/177879050-e324b559-36a1-4f7f-9925-949cea4723a0.PNG)

- Then the project will automatically deployed when there is a push to 'main' branch
  - You can see the yml file in '.github/workflows/main.yml'

```
git add .
git commit -m "test commit"
git push origin main
```

### 9. Just enjoy customizing the project!

- The main source code is 'src/index.js' so you can customize your app by editing this file
