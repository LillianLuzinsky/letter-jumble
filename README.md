# Sweets To Go
This is a simple dessert ordering app. 
I produced the front end design with React Styled Components.

## Deployment
You can view the demo in this link:
https://letter-jumble.herokuapp.com/

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## How it works
Since this is only a front end design, I will explain the workings of the app 
as if we have a database to fetch the menu items from.
<br><br>
First, you will see the homepage which has only one button to press.<br>
Click on it and it will send you to the login page.<br>
If you don't have an account, you can click on the sign-up link.<br>
Once signed in, you'll see the menu page.
<br><br>
When you choose a menu item by clicking 'Add to cart', you will see the purchase page.<br>
On this page, you can add or subtract quantities of your chosen dessert. 
When you're satisfied with your purchase, click the 'Confirm Purchase'
button, and a modal will appear with a short message.<br>
<br>
Additionally, this app includes an Account page, 
where you can see your purchase history.

---

## Used Technologies

1) ReactJS
2) react-sortable-hoc

---

### Screenshots

![Letter Jumble homepage](https://lillianluzinsky.github.io/website/images/Jumble/JumbleGame.png)

![Letter Jumble gif](https://lillianluzinsky.github.io/website/images/Jumble/Jumble.gif)

---

## Things I enjoyed

This is one of my first projects using React. I discovered styled-components and 
absolutely loved it. <br>
It makes styling a multipage website a lot more consistant 
and easier to keep track of, instead of adding all the stylings into the App.css file.

## Challenges

1) Initially, this was going to be a full stack app that uses 
Rails for back end and React for front end. As this was a group project,
I concentrated on giving our app presence through the front end design.
I didn't have the opportunity to work on the back end as much I would've liked to.
2) Used React Bootstrap to create a responsive navbar.
This caused issues for login and logout, as I was using "href" instead of "Link to".
This also created issues uploading react app in github pages.
3) Learned how to work with a team as a developer. We did have some minor
merge conflicts, but fortunately, they were very few.

### Overall, I'm very happy with the results we achieved in only 2 weeks.