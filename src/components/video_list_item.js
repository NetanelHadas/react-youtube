import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};


export default VideoListItem;



/*
this component can accept props
and then do
const video = props.video;

or we can simply deconstruct
{video}
from the props object as we did in our code above.
you have video prop in the props object
take it and put it into the variable video.
this is the ES6 way for doing this.

both ways are exactly identical.
*/

/*
after doing
console.log(video);

we can see that each object has the following fields:
thumbnail
description
title
we will use these fields as we keep building this component.
*/

/* bootstrap classes

we get bootstrap for free in this project.

we will use bootstrap
to add some styling to this component.

*/

/* img tag

to see a thumbnail
we will need to declare an image src
like in a regular html.

rememeber, we are using the curely bracers {}
because we are referencing a javascript variable
inside of our jsx.

*/

/*
now we will start working on the video_detail component
so move there.
*/

/* onVideoSelect

now that we have the call back function onVideoSelect
lets use it inside this component
and enable our users to click a video to watch.

when ever a user clicks on a list item,
this entire li
we will treat that as a video selection.

whenever a user clicks an li,
we need an event handler
onClick


important!!!
to run a function
you always have to declare a fat arrow function before calling that function.
() => onVideoSelect(video)

*/
