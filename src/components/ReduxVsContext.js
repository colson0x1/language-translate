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

/* @ REDUX vs CONTEXT in NUTSHELL!!! */

/* @ WHY WOULD WE USE REDUX? */
/* With Redux, we get some excellet documentation. It is pretty top notch.
 * There are great examples. We get some excellent documentation.
 * In addition with Redux, there are extremely well-known design patterns.
 * Online there are dozens, hundreds, thousands of different tutorials that
 * tell us exactly how to work with Redux and how to handle a variety of
 * different scenarios.
 * In addition, there are a tremendous number of open source libraries specifically
 * made to help us work with Redux.
 * So these are all very good reasons to contrinue to use REDUX inside of any
 * serious project you plan to work on.
 */

/* @ WHY WOULD WE USE CONTEXT? */
/* With Context, we don't have to use an extra library, and that's kind of like
 * pretty much it to be honest.
 * That's the only big benefit to using Context in place of Redux.
 * We do not have to use a separate library.
 * Now, some of the challenges of Context are that it's really hard to build
 * one of these store components like the lanaguage store that we just saw that
 * has cross-cutting concerns.
 * In other words, we would probably want to build a separate store component
 * for each type of resource that we have inside of our application.
 * So for example, if we have languages, we would have LanguageStore.
 * If we plan to have authentication, we might want to create a UserStore or
 * something like that.
 * And these would probably all be separate React components.
 * Sharing data between these different stores would be really challenging.
 * But when using Redux, inside of a single action creator, we are able to
 * reach into our entire state object with getState, and get access to all the
 * data inside of Redux i.e data of our entire application and use it.
 * `export const createStream = formValues => async (dispatch, getState) => {}`
 * Doing that same thing inside of one of these store components would be far
 * far more challenging.
 * We would have to make sure that we called any callback with all the appropriate
 * arguments. So essentially inside of some component, if we wanted to associate
 * a language with, say, like a user ID for some crazy reason, we would have to
 * call this callback function with the language and the user id.
 * `onLanguageChange = language => this.setState({ language })`
 * It would be really hard to write some code inside of here that reach into
 * another store of data and pull some data out of it.
 * So that's definately a really big challenge with this approach.
 *
 * So there are good reasons to use Context. There's a little bit less code
 * that we would have to write. We don't have to use that extray library i.e Redux.
 */

/* @ At the end of the day, personally it makes a lot of sense to continue to
 * use Redux for any serious application that you plan to work on. */
