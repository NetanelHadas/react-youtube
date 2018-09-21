import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;








/* video detail
will include the video player
and the title and description below it.
*/

/* youtube videos

we are going to use the youtube api to fetch data
and show real youtube videos to our users.

using the youtube API is a two step process.

1) we need to sign up for a youtube API key
getting access to the API is free
but we do need a key for it.
this is so youtube can know who is searching and showing their videos.

2) we will install a small package
that will make the searching process very simple.

*/

/* Do we need this component to maintain any type of state?

the video player that we are going to use here is a
youtube embed.

so actually the video_detail component only cares about the video
title
description
and url
all of these properties which he can recieve as a props.
(like in the video_list component).

these will be passed down from the App component.

so the conclusion is that we DO NOT
need any state here.
so we will make a functional component.

*/

/* markup

like in the video_list_item
this component will have a decent amount of markup in it
to give it a pretty good amount of structure.


<div className="video-detail col-md-8">
col-md-8
gives the column a width of 8.

iframe

<div className="embed-responsive embed-responsive-16by9">
this will wrap the iframe
that we are going to use to display the video.

*/

/* iframe

whenever I want to navigate to a video or embed a video in my app
the only thing that changes in the url is the ID of the video,
we have the ID inside our video object.

so we can craft our own embed url.

this is done as follows:
const videoId = video.id.videoId;
const url = 'https://www.youtube.com/embed/' + videoId;

as long as we have a videoId
creating an iframe as we did
which points to the url we created
will show a youtube video player inside our application for us.


lets use a small trick now called string interpolation,
we will inject a javascript variable into the string as well.
so instead of:
const url = 'https://www.youtube.com/embed/' + videoId;
we will do
const url = `https://www.youtube.com/embed/${videoId}`;
remember to use back ticks, ``


now just provide the iframe a src
and the browser will reach out to the url and
play whatever is inside the iframe.

lets now put it inside of our index.js component.

*/

/* adding a check

we are adding a check to deal with an error
explained in index.js

we will add a check into our video_detail
to make sure a video has been provided in the props
before it attempts to render.

if(!video) {
  return <div>Loading...</div>
}

so if we do not get a video
we will return a simple div
and because we have a return statment
nothing else from this component will be ran.

if a video is provided
it will build the markup structure
and we will see the video player on the page.

in the future we will use a different spinner for loading,
usually we will put spinner at a very high level component,
parent component.

*/

/* selected video

we want to give the user the ability to click on another video
and see it pop up on the screen.

lets now add the concept of a selected video.
to the App component state.

go back to index.js

*/
