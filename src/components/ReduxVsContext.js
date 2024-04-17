/* @ Redux */
/*
 * Redux through the Redux Library and react-redux together provides a way
 * to distribute data to various components throughout our component hierarchy.
 * It gives us a wayto centralize all of our data inside of a common store.
 * And it also provides some means of changing data inside that store by
 * dispatching action creators, reducers and all kind of stuff).
 */

/* @ Context */
/*
 * With context system by itself, all we really have is a way to distribute data
 * to various components inside of our application i.e A way to communicate from
 * a parent component down to a child.
 */

/* Context system is far more limited than Redux is! */

/* NOTE: REDUX is best for medium and big enterprise applications always!*/

/* @ But still, If we want to use Context in place of Redux:
 * First off, if we want to use Context, we'll need to have some way to deliever
 * information to any arbitrary component inside of our component hierarchy.
 * This is what the Context system is all about.
 * The Context system is about sharing information with any arbitrary component.
 * So, this is not an issue when using Context.
 *
 * One of the bigger issues is how we're going to be able to separate our view
 * logic from business logic when using Context.
 * If we look at App.js in our current application, this is a component that
 * is very much mixing business logic with View Logic.
 * We've got a single component that maintains the currently selected language.
 * And we would kind of argue this is somewhat like business logic inside the
 * Context of our application.
 * That component also has some display logic or view logic in there as well.
 * It renders out a div, it has some given class nameand it renders out some
 * child components as well.
 * So at present, the App.js file is mixing view logic with business logic.
 * WE NEED TO be able to separate our view logic from business logic.
 * So ideally we would separate those two types of code into different files, ideally.
 *
 * In addition, once we split out that business logic to some different file,
 * we need some way to break that down into separate individual files.
 * This is really easy to do with Redux.
 * With Redux, we create a separate file for each reducer and we could easily
 * do the same thing for our action creators as well.
 *
 * i.e WE NEED TO be able to split up business logic (not have a single file
 * with 10000 lines of code)
 *
 * So with Redux, both these problems right there, not an issue whatsoever!
 * So we need to think some way to solve these issues using the Context System.
 *
 * */

/* One way of solving these problems!
 * This is not necessarily the best way of doing this or even the only way of
 * doing this. This is just one possible approach in which we might use the
 * Context system in place of Redux.
 *
 * So the idea would be to extract all of the business logic from the app
 * component and place it inside of a new component called the LanguageStore.
 * The LanguageStore would essentially contain all of our business logic related
 * to the currently selected language.
 * It would also implement a provider so that it could share that information with
 * different child components.
 * We would only create one LanguageStore component for our entire application.
 * So there would be essentially a single source of truth about what the currently
 * selected language is.
 * The LanguageStore would not only contain the currently selected language,
 * it would also implement a callback and make that callback available to any
 * of our given components so that any given component can change the currently
 * selected language.
 * So we'll see in this case we've got maybe a callback called like onLanguageChange
 * So we would put that function inside of our Context object as well so that
 * the language selector could access that callback function and change the
 * currently selected language.
 * Now the LanguageStore itself will be a component. It's going to have a render
 * method. So we could say, hey wait, this thing is still dealing with some
 * view logic? But the render method inside of here is going to be essentially
 * just the provider by itself and no other elements are going to be displayed
 * inside of it.
 * The LanguageStore is just about recording what the currently selected
 * language is and giving the ability to change it.
 * */
