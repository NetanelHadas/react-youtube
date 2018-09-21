import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBVQvY91GPUj7WngS4UOWumslz82S18Yy4';

// Create new component
// This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}




// Take this component's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));







/* react
react is a javascript library
that is used to produce html
that is shown to the user in the web browser.

when we write react code we write individual components / views
components are bits of code that produce html.

using these components makes building complex application
relatively simple.

when we are making a component we are writing
javascript
that will produce html.

*/

/* const
const is an ES6 concept.

const is like doing a var
its declaring a variable
but to a final value.
so instead of calling it a variable we should call it a constant
so thats why its called const.

*/

/* JSX

JSX is a subset of javascript
it allows us to write what looks like HTML
inside of our javascript.
but behind the scenes its just javascript.

JSX gets translated for us to javascript.

for:

const App = function() {
  return <div>Hi!</div>
}

the vanilla javascript is:

const App = function () {
  return React.createElement(
    "div",
    null,
    "Hi!"
  );
};

thats really ugly and we don't want to type this by hand
when we write a component.

we want to write something that is very clean and concise,
thats why we write JSX.

and as our app gets more complex
we want our code to be as clean as much as possible.

you can check this in the website
http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAggBwTAvDAZgVzMKBLcACgEoYBvAKBhgCcBTKTGsGAHgBM8A3APgAk8AQlYB6TrwoBfIA&debug=false&circleciRepo=&evaluate=true&lineWrap=false&presets=react%2Cstage-2&targets=&version=6.26.0

*/

/* lets now do the second part
Take this component's generated HTML
and put it on the page (in the DOM)

first we will have an error,
it is important to understand these errors.

first we did:
React.render(App);
error was:
Uncaught ReferenceError: React is not defined

when we write ES6 code
we can't reference a variable from other file,
we need to explicilty say so to get access to a specific file.
this means that
altho react is installed as a dependency in our folder
when we ran npm install.
we have to explicilty ask for access to it.
so we need to import it.

import React from 'react';

you can also see the react folder
in our node_modules dependencies folder.

we assign this react library to the variable React

second error:
the react library knows how to work with components,
how to render them, how to nest them togther, etc...
but not to deal with rendering a component to the screen,
insert it to the DOM.

to insert it to a DOM we need to use a seperate library called
react-dom
this library lets us render a component to the screen.

import ReactDOM from 'react-dom';


third error:
ReactDOM.render(): Invalid component element.
Instead of passing a component class,
make sure to instantiate it by passing it to React.createElement.

we passed the class to ReactDOM.render
but we need to pass an instance of the component.

so lets instantiate our component before we pass it to ReactDOM.render

using the babeljs website we used before
we see that when we do
<div></div>
it actually calls createElement for us.

using a component class inside of JSX
turn it into a component instance.

<App></App>
note: if we have tags with nothing in them,
we can make instead a self closing tags.
<App />


so now instead of just passing App, which is a class
we will pass an instance <App />, which is an object.
to our ReactDOM.render method.

< /> are JSX tags.


fourth error:

Uncaught Error: _registerComponent(...):
Target container is not a DOM element.

the ReactDOM.render is trying to render it
but it has no idea where to render it to.

ReactDOM.render takes a second argument,
this second argument is a reference to an existing DOM node on the page,
it is a target container or a target DOM node.
when you render <App /> it produce some HTML
and insert that HTML into a container.

if we take a closer look in the file index.html
we see a top level div with class container.

this is the container we will render our component to.

in most react apps this is exactly what we are going to have.
we will have body tags
and then a div with something like
class=container or class=app or class=something
and that div is the ROOT NODE of the entire react application.

so when we have many components
they will be nested as children
inside the ROOT container element.

we now need to pass a reference to that container.
document.querySelector('.container')
this says,
find the div with class container
then try to render the <App /> component into that div.

rememeber:
react is used to manage our components.
react-dom is used to render the component to the screen.

*/

/* ES6 syntax

in:

const App = function() {
  return <div>Hi!</div>
}

delete the function keyword

const App = () => {
  return <div>Hi!</div>
}

this code is identical to what we had above.
it is a different way to declaring a function
using new ES6 syntax.

there is also a small difference
with using the keyword this inside this kind of function declaration.
we will talk about that later.

*/

/* component rule

we always make one component per file.

*/

/* youtube api
we need a variable to hold the api key
we got from
https://console.developers.google.com/apis/credentials?project=video-player-web-app

we need to key to be able to use the youtube api.

as we said we use const for a variable that do not change,
our api key will not change so we can use const.

with the api key we can make requests to youtube.

lets now do part 2
also explained in the video_detail component.
lets now install a package called youtube api search.

this package has one purpose, given an
api key
and a search term
it will make an api request and return some data.
list of videos that match the search term.

npm install --save youtube-api-search

--save means, please save this to our
package.json file
inside of the project.

package.json file

the package.json file (can find in our projects folder)
is a list of all the dependencies that our project has


lets now work on the search bar.

*/

/*
in react-native we use <View> tags
in react we use <div> tags
*/

/* down words data flow

only the most parent component in the application
should be responsible for for fetching data.

in this app the most parent component is our index component.
all of the other components we have
are the children of the index component.

so App inside of our index.js file
should be fetching our data.

lets now import the youtube-api-search package we installed
at the top.

*/

/* youtube-api-search

now after we imported youtube-api-search at the top,
this is how this package works
YTSearch is a function
that is passed
first argument is an object that holds an API_KEY and a search term
and a second argument which is a function
that gets called with some response data.

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

if you get status: 403
then you forgot to enable youtube in our google account at
https://console.developers.google.com

now we can see in the console 5 objects
each object represent a single youtube video.

now we will refactor this functionl component
to a class based component

*/

/* making index.js an class based component

we will refactor the index.js file
from functional component
to class based component.

we are going to do this to make sure that the app
can keep track of the list of videos.
it will keep track of this list by recording them
on its state.

note!
whenever we start using state
we need to have a class based component
cause now our component has the ability to remember data.

the data we give this app will change over time
and we want it to presist through out the application life cycle.


as we did before when we initialized a state
we need to set up our constructor function.

constructor(props) {
  super(props);

  this.state = { videos: [] };
}

the name we will give the prop inside our state object
should make sense.
so in this case it would make sense to call it videos.
this videos prop will be an array
because it should contain a list of videos/objects.


when our app pops up
we don't want the user to see an empty list of videos,
it would be better if the user could see some data right away.
so to do that we will move our search function
into the constructor.

now whenever the app first boots up, we get an instance of App on the screen.
the constructor will run right away, because we make a new instance of App.
and that will immidiately kick off a search, with YTSearch
with the term surfboards.
then the callback function data will be called, this data is our list of videos.
so inside the callback function is our opportunity
to update this.state
with the new list of videos.

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  this.setState({ videos: data });
});

in our code we deleted the word function
and used the fat arrow function arrow key word instead.
(both ways will work).

we can also choose to pick another name other than data
if we like.
so instead of data lets change it in our code to videos.

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  this.setState({ videos: videos });
});

now notice that
the key
and the value
are identical
so we can use ES6 syntax
to make this line even shorter
as follows:

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  this.setState({ videos });
});

and it will addressed as
this.setState({ videos: videos });

again this is syntactic suger
to clean up our code a little bit.
again this only works when the key and property
has the same name.

*/

/* syntax error

of you ever make an syntax error
check the npm start process
and it will notify you where you made the mistake.

*/

/*
lets now work on video_list and video_list_item.
*/

/* video_list

after we made video_list
video_list needs reference to the list of videos
that are in our index.js

so we will pass some data from the parent component, App
to the child component, video_list.

we pass data from the parent to the child
by defining a property on the jsx tags
as follows:

<VideoList videos={this.state.videos} />

when we reference a javascript variable
we need to use currely bracers.

passing data like this
is reference as passing props in react.
we are passing prop.videos to video_list

everytime our App gets rerender, when we setState on the component
video_list will get the new list of videos as well.

*/

/* after creating video_detail

we now need to use it inside of our index.js

but we see that we also need to pass it a video.

right now we only got an array of videos
without the ability to select just one out of the list.

lets pass the first video to see
that the component is working as it should.

we get the error:
Cannot read property 'id' of undefined
second error we see is a result from the first one we have at this moment.

remember that when the component first renders to the screen
the video array is empty
and it takes a short while for the YTSearch
to return the list of videos.
in this short time the component still trys to render it self
so at that point in time in
<VideoDetail video={this.state.videos[0]} />

the this.state.videos
is still an empty array.

and when we try to access index 0 at it
this.state.videos[0]
we get undefined.
so we pass video=undefined
into video_detail.

when we get into video_detail
{video} at the top will be undefined
and video.id we will get
Cannot read property 'id' of undefined

this is the exact error we got in the console.

so to handle this we need to add a check inside our
video_detail component.
(go to video detail).

*/

/* selected video

we want to give the user the ability to click on another video
and see it pop up on the screen.

lets now add the concept of a selected video.
to the App component state.

selected video is a video object
and will be passed into video_detail
so instead of passing
this.state.videos[0]
we will pass
this.state.selectedVideo

to update the selected video
we will pass a call back
from App into video_list
and then
from video_list into video_list_item

whenever the video_list_item is clicked
it will run the call back with the video that belongs to it.

ok so lets now add the
selectedVideo


note:
we changed back from
setState({ videos })
to
setState({
  videos: videos
})
because we are adding another property
we want to change to it.



lets now implement the call back explained above.

call back is going to be a function that we are going to pass from
App to video_list
and from video_list to video_list_item.

this function will be called
onVideoSelect

onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
this function takes a video
and it updates it on the App state.

important!!!
we are passing a function to a component
that can be used to manipulate the component that passes it.

video_list now has a property on props
that is called props.onVideoSelect


note:
passing a call back function from a parent component
to a child component
is really rare to go more than two levels deep.

passing call back functions is a great way to do
small communication between
a parent component
and a child component.

more than two levels deep can get confusing
for other developers your working with.

*/

/* styling

lets now work on our styling

we want our video_list to be to the side of our video_detail.

for that we will do some css.

we already have a style folder in our project.
if we add some css to it,
it will be applied to the project.



we see that the search_bar has no styling to it
even after we added styling into our styling sheet.
this is because
we made use of className search-bar in our styling sheet
but we never applied the className search-bar
to our search_bar component.
to do so we need to apply the className search-bar
to the top level div inside the search_bar component.

one css file
per project
makes styling a lot easier.

the col-md-8
and col-md-4
is what causeing the video_detail
and video_list
to be side by side
since in bootstrap they have to add up to 12.


*/

/* searching for videos

we will implement the search logic like the
onVideoSelect call back function we did for selecting a video.

we will make a call back function
and pass it down to the search bar
so when the user enters a value
this value inserted into the state
in the index.js file
and used in the YTSearch function.

lets now implement the call back function
videoSearch.

we will move

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  this.setState({
    videos: videos,
    selectedVideo: videos[0]
  });
});

to the videoSearch function
as we don't want to have duplicate code
and we can simply call this function whenever
we need to search for a term.

we can now change the surfboards
to the term our function recieves.
and call that function from within
our constructor
with surfboards.

now lets pass the videoSearch function
as a props to the search_bar component.

note:
that unlike in the first case where we used a call back function
in the first case we implemented the function in the spot we passed it.
here we implemented it out side and only then passed it.

lets now use this function inside search_bar.

*/

/* throttling the search term input

we want the search to be done every half a second
and not everytime the user writes something
as it does not look so nice on the screen.

to do throttling
we will use a function library called lodash, _
lodash contains a lot of utility methods
one of which is called debounce.

debounce

debounce can be used to throttle
how often a function is called.

first lets install lodash, in the terminal do
npm install --save lodash
lets now import it
import _ from 'lodash';


now inside our function onSearchTermChange
we want the function inside it, videoSearch
to be called only once every few mili seconds,
thats where we want to throttle it.

we will pass a debounced verion
of videoSearch
down to our search_bar component.

first lets create the debounced version of the function we want to throttle
const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
we created a fat arrow function and passed it to debounce,
(term) => { this.videoSearch(term) }
debounce takes the inner function
and returns a new function, which is the same function
but can only be called once every 300 mili seconds.

now instead of
<SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />

we will pass it the debounced version of the function we created
as we did in our code at the top.

SearchBar can update as often as it wants
but the function videoSearch we passed it
will run only once every 300 mili seconds.


so this is how we throttle
and make sure the user don't search too often.

this is also how google search works
on mac.

*/
