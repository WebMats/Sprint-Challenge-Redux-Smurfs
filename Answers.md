1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    ANS: 1: Object.assign() <----- method we use to create a new object while extending the properties of another object.
         2: .map()
         3: .filter()


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    ANS: 'actions': these are methods that either run asyn or sync, and pass on to redux's dispatch objects that
                    are allowed to change the store via a reducer.
        'reducers': a piece of code that differentiates between the objects passed to it by actions and updates the state of our store                                       accordingly.
        'store': This is the accumulation of our reducer(s), state, and any middleware. Also, indirectly encompasses
                  our actions that are passed to dispatch. 
        The store is known as a 'single source of truth', because, given that there are no internal logical errors within the store, it will
        hold only one non-contradictory state. This means that our application can rely on this data/state to display especific views
        to the user without worrying about dissonance between different parts of our app.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    ANS: Application state or "global state" and Component state or "local state" refer to different and seperate data within our app,
        and should never hold the same data as each other. Component state is used when the relevancy of a piece of data only matters within
        the scope of a single component and it's children. On the other hand, Application state is used when a piece of data is needed across a
        wide area of our app.


4.  What is middleware?
    ANS: Middleware is any piece of code that intercepts a dispatched action, interrogates it or/and mutates it, and then calls on next() to
         continue the normal flow.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    ANS: Redux thunk is a piece of middleware for redux, which allows us to create action-creators that run async logic.



6.  Which `react-redux` method links up our `components` with our `redux store`?
    ANS: connect()(<component>)