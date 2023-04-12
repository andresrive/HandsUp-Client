# HandsUp-Client

Developed as the final project of the web development bootcamp at Ironhack Barcelona. It is a MERN Stack application, check the backend repository [here](https://github.com/admartinbarcelo/HandsUp-Server.git)

## About
Hello! We are Andres, Raul and Adrian. We are full-stack developers. This project is aimed at all those curious people who want to meet new people and be able to carry out those plans in the company of totally new people.

![Project_Image](https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

## Deployment
You can check the app fully deployed [here](https://handsup-project.netlify.app/)

If you wish to view the API deployment instead, check [here](https://handsup.fly.dev/api)

## Work Structure

## Installation guide
- Fork this repo
- Clone this repo


```shell
$ cd HandsUp-Client
$ npm install
$ npm start
```

## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | HomePage                 |
| /profile             | Private (user)  | Profile Page             |
| /login               | public          | LoginPage                |
| /signup              | public          | SignupPage               |
| /plans/create        | private (user)  | PlanCreatePage           |
| /plans/:planId       | public          | PlanDetailPage           |
| /plans/:planId/edit  | private (user)  | PlanEditPage             |
| /packs/create        | private (user)  | PacksCreatePage          |
| /packs/:packId       | public          | PacksDetailsPage         |
| /packs/:packId/edit  | private (user)  | EditOrderPage            |

## Components
- IsAnon (route)
- Is Private (route)
- Navbar
- Loading

##Pages
- HomePage
- LoginPage
- SignUpPage
- NotFoundPage
- Packs
- Plans
- ProfilePage


---
