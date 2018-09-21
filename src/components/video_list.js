import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
       <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;



/*
this component has no need for state,
it does not record any user interaction.
does not rerender it self.

so we will make it a functional component.
*/

/* styling

to add styling we need to use class
this is done using
className
(this is like adding a class in html but just using a different word).
if we used class there would be naming conflicts
with the key word class that we use when we define a class based component.

className="col-md-4"
sets this as a boot strap column.

className="col-md-4 list-group"
also added list-group

*/

/* using props

add props to
const VideoList = (props) =>

putting inside our <ul> tags
{props.videos.length}
as follows:

<ul className="col-md-4 list-group">
  {props.videos.length}
</ul>

shows that we have 5 videos inside our
props.videos


we notice that if we refresh the page
instead of 5 we see 0 for half a second in there.
this is because this.state.videos at the start is an empty array
and then we kick of our search.

the search takes some time because it is a network request.
between the time it takes to give us a response
the first render shows we have 0 videos in our state.videos array.

*/

/* important note about props

in a functional component the props object is an argument.
in a class based component props are available anywhere
in anymethod we define as this.props.

so in our index.js file
we can say anywhere, for example inside our render method
this.props
if our App component has been passed some properties
by an imaginary parent component.

so when we refactor a component from
functional component
to class based component
we will need to update all of our references from
(props) at the top and using {props.} in our component
to deleting (props) from the top and using  {this.props}

*/

/* video_list_item

lets first import video_list_item
so we can use it in this component
and build it later.

after we understood how to interate over items we made this component.

*/

/* looping over the items in props.videos

try staying away for loops as much as we can in react.
instead use built in iterators instead.

like the built in map iterator.

a map is a property of an array,
array.map()


if I use in our console the following:
var array = [1, 2, 3];
array.map(function(number) { return number*2 })

the function will get called with each element of the array,
in our example the function will be called 3 times.
first with 1
then with 2
then with 3.

array.map will return an new array
where each index is the return value of the function.

another example is
array.map(function(number) { return '<div>' + number + '</div>' })

it will return an array with 3 div tags,
first tag will have 1 second will have 2 and third will have 3.

if the tags are jsx tags we will end up with an array of jsx,
something I can render with react that is.

*/

/* making video_list_item

we made video_list_item.

and now we will implement it in video_list


instead of
props.videos.map(function(video) {return video })

we will use a fat arrow function () =>

props.videos.map((video) => {return video })

and now we will pass this video to the video_list_item component

props.videos.map((video) => {
  return <VideoListItem video={video} />
});


last thing we need to do is save a reference to this array of VideoListItem s
that gets returned.

const videoItems = props.videos.map((video) => {
  return <VideoListItem video={video} />
});


we do this because we want to show a VideoList
that shows more than just the video one under the other.
we want to show a video and a small discription below it,
this way lets us do so.

videoItems will be an array that holds
all of the videos and each video with its description.
so we can iterate over this videoItems array
and show each item inside of it one after the other.

here is where react kicks in
react is very intelligent about rendering arrays of items,
our videoItems array is an array of components
but its still an array.

so {videoItems}
is an array that we are passing to react.
and react is totally fine with it and knows how to render it.
it will try to render all of the li inside of the ul.

and as we expected,
when we refresh the browser
we see our search bar at the top
and under it the 5 videos li we have so far from the video_list_item.

*/

/* in the console we see the error

Warning: Each child in an array or iterator should have a unique "key" prop.
Check the render method of `VideoList`.

this error is thrown by react when we are trying to render the
{videoItems}

this error comes to tell us that in the case one of the items should be updated
we don't have a way to find that item.
so we throw all of them and make all of them from scratch
which is not efficient.

so by adding a key to each item it will be easier to find the item
we want to update.
this will also make it a lot faster.

thankfully each piece of data has an id
when we get it from youtube.
in the browser
go to Network (same tab as console is)
go to XHR
press on items
you can see that each item has an etag
etag is a unique identifier, it is a long string of characters.
so if we use this etag for each video as our key
this will be a sufficiently unique key for each element
in our videoItems array.

adding this etag is done as follows:

<VideoListItem key={video.etag} video={video} />


after adding this
we can see that the error went away from the console
since we are providing a key for each element in our list.

*/

/* props.onVideoSelect

from our video_list component
we will pass this call back function
to video_list_item
as props once again.

now video_list_item
has access to a property called
onVideoSelect.

note:
if we want to add more than one line to our return statment
we need to add bracers ()
to it.

go to video_list_item.

*/
