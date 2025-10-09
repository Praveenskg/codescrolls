---
id: multimedia
title: HTML Multimedia - Audio, Video, and Embedded Content
description: Master HTML multimedia elements including audio, video, tracks, and embedded content. Learn responsive media, accessibility, and cross-browser compatibility.
keywords:
  [
    html multimedia,
    html5 video,
    html5 audio,
    video player,
    audio player,
    embedded content,
    responsive video,
    media accessibility,
  ]
tags: [HTML, Multimedia, Video, Audio, Media, Accessibility]
sidebar_position: 9
---

# 🎵 HTML Multimedia

HTML5 provides powerful elements for embedding audio, video, and other multimedia content. These elements offer native browser support with customizable controls and accessibility features.

## 📖 Multimedia Basics

### Why Use HTML5 Multimedia?

Before HTML5, multimedia required plugins like Flash. HTML5 provides native support with:

- Better performance
- Mobile compatibility
- Accessibility features
- No plugin dependencies
- Consistent API across browsers

---

## 🎬 Video Element

### Basic Video Player

```html
<!-- Basic video -->
<video width="640" height="360" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  <source src="movie.ogv" type="video/ogg" />
  Your browser doesn't support the video tag.
</video>

<!-- Video with poster image -->
<video width="640" height="360" controls poster="poster.jpg">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser doesn't support HTML5 video.
</video>
```

### Video Attributes

```html
<video
  width="640"
  height="360"
  controls                    <!-- Show player controls -->
  autoplay                    <!-- Auto-play video -->
  muted                       <!-- Start muted (required for autoplay) -->
  loop                        <!-- Loop video -->
  preload="metadata"          <!-- Load only metadata initially -->
  poster="thumbnail.jpg"      <!-- Poster image -->
>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
</video>
```

### Multiple Video Formats

```html
<video controls width="640" height="360">
  <!-- MP4 for Safari/Edge -->
  <source src="movie.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />

  <!-- WebM for Chrome/Firefox -->
  <source src="movie.webm" type="video/webm; codecs='vp8, vorbis'" />

  <!-- OGG for older Firefox -->
  <source src="movie.ogv" type="video/ogg; codecs='theora, vorbis'" />

  <!-- Fallback message -->
  <p>
    Your browser doesn't support HTML5 video. <a href="movie.mp4">Download the video</a> instead.
  </p>
</video>
```

---

## 🔊 Audio Element

### Basic Audio Player

```html
<!-- Basic audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  Your browser doesn't support the audio element.
</audio>

<!-- Background audio (no controls) -->
<audio autoplay loop>
  <source src="background-music.mp3" type="audio/mpeg" />
</audio>
```

### Audio Attributes

```html
<audio
  controls                    <!-- Show controls -->
  autoplay                    <!-- Auto-play -->
  loop                        <!-- Loop audio -->
  muted                       <!-- Start muted -->
  preload="none"             <!-- Don't preload -->
  volume="0.5"               <!-- Initial volume (0.0 to 1.0) -->
>
  <source src="music.mp3" type="audio/mpeg" />
  <source src="music.ogg" type="audio/ogg" />
</audio>
```

### Audio with Visual Feedback

```html
<div class="audio-player">
  <audio id="myAudio" preload="metadata">
    <source src="song.mp3" type="audio/mpeg" />
    <source src="song.ogg" type="audio/ogg" />
  </audio>

  <div class="controls">
    <button onclick="playAudio()">▶️ Play</button>
    <button onclick="pauseAudio()">⏸️ Pause</button>
    <button onclick="stopAudio()">⏹️ Stop</button>
    <input type="range" id="volume" min="0" max="1" step="0.1" value="1" onchange="setVolume()" />
  </div>

  <div class="progress">
    <span id="current-time">0:00</span>
    <input type="range" id="seek" min="0" max="100" value="0" onchange="seekAudio()" />
    <span id="duration">0:00</span>
  </div>
</div>

<script>
  const audio = document.getElementById('myAudio');
  const seekBar = document.getElementById('seek');
  const volumeBar = document.getElementById('volume');

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
  }

  function setVolume() {
    audio.volume = volumeBar.value;
  }

  function seekAudio() {
    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  }

  // Update progress bar
  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;

    document.getElementById('current-time').textContent = formatTime(audio.currentTime);
    document.getElementById('duration').textContent = formatTime(audio.duration);
  });

  // Set duration when metadata loads
  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('duration').textContent = formatTime(audio.duration);
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
</script>
```

---

## 📝 Subtitles and Captions

### WebVTT Format

WebVTT (Web Video Text Tracks) is the standard format for video subtitles and captions.

```html
<!-- Basic subtitles -->
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4" />
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English" default />
  <track src="subtitles-es.vtt" kind="subtitles" srclang="es" label="Español" />
</video>
```

### WebVTT File Format

```
WEBVTT

1
00:00:05.000 --> 00:00:10.000
[Opening scene music plays]

2
00:00:12.000 --> 00:00:18.000
Narrator: Welcome to our tutorial.

3
00:00:20.000 --> 00:00:25.000
<v John>Hi everyone!</v>

4
00:00:27.000 --> 00:00:32.000
<v Jane>This is a great video.</v>
```

### Track Types

```html
<video controls>
  <source src="presentation.mp4" type="video/mp4" />

  <!-- Subtitles for translation -->
  <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English" />

  <!-- Captions for accessibility -->
  <track src="captions.vtt" kind="captions" srclang="en" label="English Captions" default />

  <!-- Chapters for navigation -->
  <track src="chapters.vtt" kind="chapters" srclang="en" label="Chapters" />

  <!-- Descriptions for screen readers -->
  <track src="descriptions.vtt" kind="descriptions" srclang="en" label="Audio Description" />

  <!-- Metadata (not visible to users) -->
  <track src="metadata.vtt" kind="metadata" />
</video>
```

### Custom Caption Styling

```html
<style>
  video::cue {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 18px;
    font-family: Arial, sans-serif;
  }

  video::cue(b) {
    color: yellow;
    font-weight: bold;
  }

  video::cue(v[voice='John']) {
    color: lightblue;
  }

  video::cue(v[voice='Jane']) {
    color: lightgreen;
  }
</style>

<video controls>
  <source src="interview.mp4" type="video/mp4" />
  <track src="interview.vtt" kind="captions" srclang="en" default />
</video>
```

---

## 📱 Responsive Media

### Responsive Video with CSS

```html
<style>
  .responsive-video {
    width: 100%;
    height: auto;
    max-width: 640px;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<!-- Method 1: Simple responsive -->
<video class="responsive-video" controls>
  <source src="movie.mp4" type="video/mp4" />
</video>

<!-- Method 2: Aspect ratio container -->
<div class="video-container">
  <video controls>
    <source src="movie.mp4" type="video/mp4" />
  </video>
</div>
```

### Responsive Audio Player

```html
<style>
  .audio-player {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .audio-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .progress-bar {
    flex: 1;
    height: 6px;
    background: #ddd;
    border-radius: 3px;
    cursor: pointer;
  }

  .progress-filled {
    height: 100%;
    background: #007bff;
    border-radius: 3px;
    transition: width 0.1s;
  }

  .time-display {
    font-size: 14px;
    color: #666;
  }
</style>

<div class="audio-player">
  <audio id="responsive-audio">
    <source src="music.mp3" type="audio/mpeg" />
  </audio>

  <div class="audio-controls">
    <button id="play-pause">▶️</button>
    <div class="progress-bar" id="progress-bar">
      <div class="progress-filled" id="progress-filled"></div>
    </div>
    <div class="time-display">
      <span id="current-time">0:00</span> / <span id="total-time">0:00</span>
    </div>
    <input type="range" id="volume" min="0" max="1" step="0.1" value="1" />
  </div>
</div>

<script>
  const audio = document.getElementById('responsive-audio');
  const playPauseBtn = document.getElementById('play-pause');
  const progressBar = document.getElementById('progress-bar');
  const progressFilled = document.getElementById('progress-filled');
  const currentTimeSpan = document.getElementById('current-time');
  const totalTimeSpan = document.getElementById('total-time');
  const volumeControl = document.getElementById('volume');

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = '⏸️';
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶️';
    }
  });

  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.width = progress + '%';
    currentTimeSpan.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    totalTimeSpan.textContent = formatTime(audio.duration);
  });

  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * audio.duration;
  });

  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
</script>
```

---

## 🎮 Media Events and API

### Media Events

```javascript
const video = document.querySelector('video');

// Loading events
video.addEventListener('loadstart', () => console.log('Loading started'));
video.addEventListener('loadedmetadata', () => console.log('Metadata loaded'));
video.addEventListener('canplay', () => console.log('Can start playing'));
video.addEventListener('canplaythrough', () => console.log('Can play without buffering'));

// Playback events
video.addEventListener('play', () => console.log('Video started playing'));
video.addEventListener('pause', () => console.log('Video paused'));
video.addEventListener('ended', () => console.log('Video ended'));

// Progress events
video.addEventListener('timeupdate', () => {
  console.log(`Current time: ${video.currentTime}`);
});

video.addEventListener('progress', () => {
  const buffered = video.buffered;
  if (buffered.length > 0) {
    const bufferedEnd = buffered.end(buffered.length - 1);
    const duration = video.duration;
    console.log(`Buffered: ${((bufferedEnd / duration) * 100).toFixed(1)}%`);
  }
});

// Error handling
video.addEventListener('error', () => {
  console.error('Video error:', video.error);
  switch (video.error.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      console.error('Playback aborted');
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      console.error('Network error');
      break;
    case MediaError.MEDIA_ERR_DECODE:
      console.error('Decoding error');
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      console.error('Format not supported');
      break;
  }
});
```

### Media Properties and Methods

```javascript
const media = document.querySelector('video');

// Properties
console.log('Duration:', media.duration);
console.log('Current time:', media.currentTime);
console.log('Volume:', media.volume);
console.log('Muted:', media.muted);
console.log('Paused:', media.paused);
console.log('Ended:', media.ended);
console.log('Ready state:', media.readyState);
console.log('Network state:', media.networkState);

// Methods
media.play(); // Start playback
media.pause(); // Pause playback
media.load(); // Reload media

// Seeking
media.currentTime = 30; // Seek to 30 seconds

// Volume control
media.volume = 0.5; // Set volume to 50%
media.muted = true; // Mute audio

// Playback rate
media.playbackRate = 1.5; // 1.5x speed
media.playbackRate = 0.5; // Half speed
```

---

## 🎨 Custom Media Players

### Video Player with Custom Controls

```html
<div class="custom-video-player">
  <video id="custom-video" poster="poster.jpg">
    <source src="movie.mp4" type="video/mp4" />
    <source src="movie.webm" type="video/webm" />
  </video>

  <div class="controls">
    <button id="play-btn">▶️</button>
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-filled"></div>
      </div>
    </div>
    <div class="time">0:00 / 0:00</div>
    <button id="fullscreen-btn">⛶</button>
  </div>
</div>

<style>
  .custom-video-player {
    position: relative;
    max-width: 640px;
    margin: 0 auto;
  }

  .custom-video-player video {
    width: 100%;
    display: block;
  }

  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .progress-container {
    flex: 1;
    cursor: pointer;
  }

  .progress-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  .progress-filled {
    height: 100%;
    background: #ff6b6b;
    border-radius: 4px;
    width: 0%;
    transition: width 0.1s;
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
</style>

<script>
  const video = document.getElementById('custom-video');
  const playBtn = document.getElementById('play-btn');
  const progressContainer = document.querySelector('.progress-container');
  const progressFilled = document.querySelector('.progress-filled');
  const timeDisplay = document.querySelector('.time');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = '⏸️';
    } else {
      video.pause();
      playBtn.textContent = '▶️';
    }
  });

  video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = progress + '%';
    updateTimeDisplay();
  });

  video.addEventListener('loadedmetadata', updateTimeDisplay);

  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    video.currentTime = percentage * video.duration;
  });

  fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  });

  function updateTimeDisplay() {
    const current = formatTime(video.currentTime);
    const total = formatTime(video.duration || 0);
    timeDisplay.textContent = `${current} / ${total}`;
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
</script>
```

---

## 🌐 Embedded Content

### iframe Element

```html
<!-- Basic iframe -->
<iframe src="https://example.com" width="600" height="400" title="Example Website">
  Your browser doesn't support iframes.
</iframe>

<!-- Embedded YouTube video -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>

<!-- Secure iframe -->
<iframe
  src="https://example.com"
  width="600"
  height="400"
  title="Secure content"
  sandbox="allow-scripts allow-same-origin"
  referrerpolicy="strict-origin-when-cross-origin"
>
</iframe>
```

### embed and object Elements

```html
<!-- Flash content (legacy) -->
<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
  <param name="movie" value="movie.swf" />
  <param name="quality" value="high" />
</object>

<!-- PDF document -->
<object data="document.pdf" type="application/pdf" width="600" height="400">
  <p>Unable to display PDF. <a href="document.pdf">Download instead</a></p>
</object>

<!-- Generic embed -->
<embed src="animation.swf" type="application/x-shockwave-flash" width="400" height="300" />
```

---

## ♿ Accessibility Features

### Media Accessibility

```html
<!-- Video with comprehensive accessibility -->
<video
  controls
  width="640"
  height="360"
  aria-label="Product demonstration video"
  aria-describedby="video-description"
>
  <source src="demo.mp4" type="video/mp4" />
  <source src="demo.webm" type="video/webm" />

  <!-- Multiple caption tracks -->
  <track src="captions-en.vtt" kind="captions" srclang="en" label="English" default />
  <track src="captions-es.vtt" kind="captions" srclang="es" label="Español" />
  <track src="descriptions.vtt" kind="descriptions" srclang="en" label="Audio Description" />

  <!-- Transcript for screen readers -->
  <div id="video-description" class="sr-only">
    This video demonstrates how to use our product. It shows the main features and user interface.
  </div>
</video>

<!-- Accessible audio player -->
<audio controls aria-label="Background music">
  <source src="music.mp3" type="audio/mpeg" />
  <source src="music.ogg" type="audio/ogg" />
</audio>
```

### Keyboard Navigation

```javascript
// Add keyboard controls to media
document.addEventListener('keydown', (e) => {
  const video = document.querySelector('video');

  switch (e.code) {
    case 'Space':
      e.preventDefault();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      break;

    case 'ArrowLeft':
      e.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 10);
      break;

    case 'ArrowRight':
      e.preventDefault();
      video.currentTime = Math.min(video.duration, video.currentTime + 10);
      break;

    case 'KeyM':
      e.preventDefault();
      video.muted = !video.muted;
      break;
  }
});
```

---

## 📊 Best Practices

### ✅ DO:

```html
<!-- Provide multiple formats -->
<video controls>
  <source src="video.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
  <source src="video.webm" type="video/webm; codecs='vp8, vorbis'" />
  <source src="video.ogv" type="video/ogg; codecs='theora, vorbis'" />
</video>

<!-- Always include controls -->
<video controls>
  <!-- Never hide controls without custom ones -->
  <source src="video.mp4" type="video/mp4" />
</video>

<!-- Add captions/subtitles -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track src="captions.vtt" kind="captions" srclang="en" default />
</video>

<!-- Use preload appropriately -->
<video preload="metadata">
  <!-- Load metadata only -->
  <video preload="none">
    <!-- Don't preload -->
    <video preload="auto"><!-- Browser decides --></video>
  </video>
</video>
```

### ❌ DON'T:

```html
<!-- Don't autoplay without user consent -->
<video autoplay>
  <!-- Avoid autoplay -->
  <source src="video.mp4" type="video/mp4" />
</video>

<!-- Don't forget accessibility -->
<video>
  <!-- Missing controls and captions -->
  <source src="video.mp4" type="video/mp4" />
</video>

<!-- Don't use deprecated attributes -->
<video controls autoplay loop>
  <!-- Use JavaScript instead -->

  <!-- Don't embed without fallback -->
  <iframe src="external.com"> <!-- No fallback content --> </iframe>
</video>
```

---

## 🚀 What's Next?

Now that you understand multimedia, learn about **Meta Tags & SEO**:

👉 [Next: Meta Tags & SEO →](./meta-seo.md)

Or return to the [HTML Overview →](../index.md)

Master HTML multimedia for rich, accessible content! 🎵
