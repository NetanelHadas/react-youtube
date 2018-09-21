import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;


/* the search bar

In setting up the search bar we will cover 3 important topics
1) exporting modules
2) classes
3) state


using the search bar should update the video items in the left hand side
in the video list.

*/

/* importing react

even tho we are not referencing a variable called react in here
we still need to import it.

we need to do it because whenever we translate the jsx
to normal javascript
it turns into a call like
React.createElement
and if react is not in the scope of the file
it will throw an error

so we need to make sure we import react
to all of the components that we write
that have JSX

*/

/* functional component and class component

at this moment this component is a functional component.
its called a functional component because it is literally a function.

const SearchBar = () => {
  return <input />
};

it just show something on the screen.

we will make it into a class based component
since we want it to have some kind of internal record keeping,
a way to communicate with other components, etc
this will make the component be aware of it self
since it has been rendered.
for example the user typed something into the input
and here is what they typed.

in general,
when we want more functionalities in the component
we will make it a class based component.

*/

/* extends React.Component

class SearchBar extends React.Component {
  render() {
    return <input />;
  }
};

gives our class component more functionalities from the React.Component class.

every class component must have a render method.
and the render method must return something, else it will show an error.

we will change the reference we did after the extends word
to make the code cleaner.

*/

/* event

the event object we passed to our event handler
(we can change the name, its just a convention)
describes the information of the event that just accord.

it have specific properties inside of it.

in this case we can use the event object
to get access to the value of the input,
the text that was changed.

we can see it by putting in our helper method
console.log(event.target.value);

the onChange event handler is a unique name.
(in react-native its onChangeText)

lets now console.log the whole event object
and see what it gives us.
console.log(event);

*/

/* state

a state object records and reacts to user events.

every class based component that we have
has its own state object.

whenever a component state is changed
the component immidiately rerenders.
and also forces all of its children components to rerender as well.

before we use a state inside a component
we first need to initialize the state object.
to initialize a state we need to
set the property state to a plain javascript object
inside of the class component's constructor method.

this is how we initialize a state in a class based component:
(rememeber: functional components do not have state)

constructor(props) {
  super(props);

  this.state = { term: '' };
}

the constructor method is being called everytime we make
a new instance of the component.
the constructor function does a setup inside of our class,
like initialzing variables, state, etc...

so what does the word super do?
our SearchBar component extends component,
component it self has its own constructor function
so when we define a method that is already defined on the parent class, component,
we can call this method from the parent class by using the word super.
without using super here we will get an error.

the second expression is what we really care about,
this.state = { term: '' }

we initialize the state by
creating a new object, {}
and assigning it to this.state
the object we pass will also contain properties that we want to record on the state.
here we pass the property term, which stands for search term (we can use another name if we like),
on term we will recrod what the user enters.

so lets now delete the console.log()
and instead update our state.
lets first delete the console.log() in the render method.

render() {
  return <input onChange={(event) => console.log(event.target.value)} />;
}

only in the constructor function we will use
this.state = {}
to manipulate our state.

everywhere else inside our component that we want to change our state in we will use
a method call
this.setState({ term: event.target.value })
we pass this method an object that contains the new state
that we want to give our component.
setState also informs react that the state was changed
while this.state does not inform react.

manipulating state is an important topic.

*/

/* javascript variable

whenever we reference a javascript variable
we wrap it with curely bracers.

we can use this.state.term
to reference it, here is what the value is
but never use this way to modify, this.state.term = '';


since this.setState rerenders the component
after the state is changed
we can see the new term property after the change
each time we change this property.
Value of the input: {this.state.term}


lets now remove the
Value of the input: {this.state.term}
from
<div>
  <input onChange={(event) => this.setState({ term: event.target.value })} />
  Value of the input: {this.state.term}
</div>
since we just used it to see that everything is working

will keep the div
since we will use it for styling later on.

*/

/* getting the input tags to get its value from the state

and not the other way around.

<div>
  <input
    value={this.state.term}
    onChange={(event) => this.setState({ term: event.target.value })} />
</div>


if we delete the onChange line
we will not be able to write in the input bar in the browser.

adding value to the input component
turn it into a
controlled component / controlled form element.

controlled component has its value set by state,
its value only changes when the state changes.

this.setState
causes the component to rerender
after it rerenders the value of the input is set to the new value.

the value only changes
after the this.setState is called and the component is rerendered.

this is how we treat data in react.

this would also help us in the case
we want to show a deffault input
(this is not a placeholder which is greyed out text in the backround)
in the input bar we have in our app.

we can also read the value of the input
in a much simpler way.

*/

/* videoSearch and onInputChange

using the videoSearch function
we recieved as props
from the index.js

our onChange handler is already dealing with recieving the
input from the user.
so putting more code into it, our call back function
will make things a lot less clean.

to keep our code organize
we will just use a helper method,
onInputChange

now instead of
onChange={(event) => this.setState({ term: event.target.value })} />
we have in our input tags
we will do
onChange={(event) => this.onInputChange(event.target.value)} />


inside onInputChange we will do two things
setState of this component with the term.
use the call back function we got from index.js.

onInputChange(term) {
  this.setState({ term: term });
  this.props.onSearchTermChange(term);
}

we can use some jsx syntax and
instead of
this.setState({ term: term });
we will do
this.setState({term});
like we did in our code above.



there is one problem tho,
when we write something in the search bar
our app slows down
and feels kind of laggy.

lets use a throttle
for a search,
so we will fire off a search instead of
everytime we type
every half a second.
move to index.js

*/
