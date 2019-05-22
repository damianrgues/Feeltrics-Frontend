# Feeltrics

## Description

an app that allows you to make metrics of how you feel.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- **Signup:** As an anon I can sign up in the platform so that I can start saving metrics

- **Login:** As a user I can login to the platform so that I can see my metrics

- **Logout:** As a user I can logout from the platform so no one else can use it

- **Set Metrics**: As a user I can set metrics of some aspect of my life.

- **List Metrics**  As a user I want to see my metrics, to be able to choose one and see how it works over time.

- **Create new metrics:** As a user I can create new metrics. 

  

## Backlog

User profile:

- see my profile

- upload my profile picture

- Create more features

- Change the metrics's order - sort

- Add more metrics - dyanamic

  

# Client

## Routes

| Path            | Component     | Permissions | Behavior                                                     |
| --------------- | ------------- | ----------- | ------------------------------------------------------------ |
| `/`             | Dashboard     | private     | Dashboard page, if user not logged in redirects to `/login`  |
| `/auth/signup`  | SignupPage    | anon only   | Signup form, button to signup, link to login. Redirects to `/` Dashboard after signup. |
| `/auth/login`   | LoginPage     | anon only   | Login form, button to login, link to signup. Redirects to `/` Dashboard after signup. |
| `/auth/logout`  | n/a           | anon only   | Redirect to `/login` path after logout.                      |
| `/metric/add`   | AddMetric     | private     | Add Metric form, button to submit new Metric to API. Redirects to `/` Dashboard on successful submit. |
| `/metric/:name` | MetricDetails | private     | Does `GET` request to API to get metric category by name and shows the result. Has ba |
| `/profile`      | Profile       | private     | Profile page. Does `GET` request to API for user profile and displays it. |
|                 |               |             |                                                              |





## Components

- Dashboard

- Navbar

- AddMetric

- MetricDetails

- Profile

  

## Services

- **Auth Service**

  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() 

  

- **Metrics Service**

  - metrics.list()
  - metric.create(data)
  - metric.detail(id)
  - metric.remove(id)   

  

# Server

## Models

User model

```js
User {
  _id: ObjectId
	username: String // required
	email: String // required & unique
	password: String // required
	metrics: [ ObjectId<Metric> ]
}             
```



Day model

```js
Day {
  user_id: ObjectID<User>
	metrics: [ObjectId<Metric>]
  updated: { type: Date, default: Date.now }
}
```



Metric model

```js
Metric {
  _id: ObjectId
	user_id: ObjectID<User> // required
	name: String // required	
	description: String
  value: Number // (0 - 10)
}
```



## API Endpoints (backend routes)

| **HTTP method** | URL                  | Request Body                          | Success Status | Error Status | Description                             |
| --------------- | -------------------- | ------------------------------------- | -------------- | ------------ | --------------------------------------- |
| `POST`          | `/auth/signup`       | { username, password }                | 201            | 400          | Create a new user                       |
| `POST`          | `/auth/login`        | { username, password }                | 200            | 401          | User login                              |
| `GET`           | `/auth/me`           | /                                     | 200            | 401          | Retrieve user data object               |
| `POST`          | `/auth/logout`       | /                                     | 200            | 400          | Logout the user                         |
| `PUT`           | `/profile`           | {_id, username, email, password}      | 201            | 400          | Update user information                 |
|                 |                      |                                       |                |              |                                         |
| `GET`           | `/metrics/:userId`   | /                                     | 200            | 400          | Get all metrics for the user            |
| `POST`          | `/metric/new`        | [{userId, dayId, description, value}] | 201            | 400          | Create a new metric                     |
| `PUT`           | `/metrics/:metricId` | {  description, value}                | 201            | 400          | Update single metric by id              |
|                 |                      |                                       |                |              |                                         |
| `GET`           | `/today`             | /                                     | 200            | 400          | Get all metrics for today (current day) |







## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)http://slides.com)