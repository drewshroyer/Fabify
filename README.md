# FABIFY 
[<div style="text-align: center"><img src="app/assets/images/fabifygiphy.gif"></div>](https://fabify.herokuapp.com/#/)

<h3 style="text-align: center">Listening is Everything</h3>

# Table of Contents

1. HighLighted Featureas 
2. Key Functions
3. Technologies 

## Highlights 

Fabify is a clone of Spotify that exclusively features currated content created by artists that identify as LBGTQIA+. This website was built with JavaScript, React, Redux, Ruby, Rails, AWS, and Postgres.

## Login / Sign Up

[<div style="text-align: center"><img src="app/assets/images/log-in-read-me.gif"></div>](https://fabify.herokuapp.com/#/)

Fabify features user auth that only allows members that have signed up for Fabify to step within the walls for this exlcuive content. As well as the ability to sign in and out of the app. If you try to log in with incorrect credentials or sign up with a duplicate email address, you will receive an error message. 

## Create Playlists

[<div style="text-align: center"><img src="app/assets/images/create_playlist-gif.gif"></div>](https://fabify.herokuapp.com/#/)

Once logged in, users have the ability to create, view, update and delete their own personal selection of playlists. Users may add and remove songs, title their playlists, as well as provide a description of their playlist for other users who may wish to follow their playlist of currated music. 

## Toggle Play Pause
My custom toggle play pause method allows users to pause and play their music at the click of a button. It seemless updates the state to render the proper button (play or pause), the correct artist, song, image and finally play the corresponding audio. Additionally, two custom functions, HandleNext and HandleBack, allow users to step through songs within the webplayer, skip songs, as well as revist songs they enjoyed.  


```javascript
  togglePlayPause(id, name, photo, artist) {
    const audioEle = document.getElementById(`audio-element--${id}`);
    if (this.state.selectedSong === id) {
      this.setState({ playingSong: !this.state.playingSong });
    } else {
      this.setState({
        selectedSong: id,
        playingSong: false,
        name: name,
        photo: photo,
        artist: artist,
      });
    }

    if (this.state.playingSong) {
      audioEle.pause();
    } else {
      audioEle.play();
    }
    
    if (this.state.playingSong) {
      let playButton = document.getElementsByClassName("main-play-button")
      for(let i = 0; i < playButton.length; i++){
        playButton[i].style.display = 'block'
      }
      let pauseButton = document.getElementsByClassName("main-pause-button")
      for(let i = 0; i < pauseButton.length; i++){
        pauseButton[i].style.display = 'none'
      }
      } else {
       let playButton = document.getElementsByClassName("main-play-button")
      for(let i = 0; i < playButton.length; i++){
        playButton[i].style.display = 'none'
      }
      let pauseButton = document.getElementsByClassName("main-pause-button")
      for(let i = 0; i < pauseButton.length; i++){
        pauseButton[i].style.display = 'block'
      }
    }

  }
```

To build Fabify, I used the following stack:

  * Ruby on Rails - web-application framework
  * Postgresql - database management
  * React - front-end rendering
  * Redux - state-management

# List of All Technologies Used
* React.js
* Redux
* Javascript
* Ruby on Rails
* SCSS / CSS
* PostgreSQL
* Heroku
* AWS S3
