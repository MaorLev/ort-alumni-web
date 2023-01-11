<div align="center">
  <h1>Ort Alumni Web</h1>
  <img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/main-logo.png" alt="Logo">
  <p>A website for Ort college alumni</p>
  <p>
    <img alt="GitHub" src="https://img.shields.io/github/license/avivharuzi/readme-template?style=for-the-badge">
  </p>
  <p>
    <!-- <a href="https://github.com/MaorLev/ort-alumni-web">View Demo</a> -->
    <a href="https://youtu.be/kP-5U4KBrUs">Video Presentation</a>
    ·
    <!-- <a href="https://github.com/MaorLev/ort-alumni-web/issues">Report Bug</a>
    -->
    <a href="https://github.com/MaorLev/ort-alumni-web/issues">Request Feature</a> 
  </p>
</div>

---

## 📖 Table of Contents

- [🔔 The Idea Behind](#the-idea-behind)
- [📊 Diagrams And Website Story](#diagrams)
- [🧠 Implementation](#implementation)
- [✨ Features](#features)
- [👑 Technologies](#technologies)
- [🎥 ScreenShoots & Gifs](#screen-shoots)
- [📜 License](#license)

<div id="the-idea-behind"><div>

## 🔔 The Idea Behind
Today, every self-respecting college or university has a website that provides services for their graduates, and Ort colleges lack one.

<div id="diagrams"><div>

## 📊 Diagrams

### *High Level Permissions Diagram*
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/materials/premission-diagram.jpg" alt="High-Level-Permissions-Diagram">


**Diagram Explenation :** 

The site contains four main users :
</br>
Unregistered user (visitor), student, alumnus and employer.
</br>
</br>

1. An employer, in order to offer relevant and dedicated jobs for the graduates and students registered on the website.

2. A graduate can open a teacher's card, in order to offer private lessons, mentoring and accompaniment in final projects for the students.

3. A student, who can enjoy the multitude of features mentioned.

4. A Visitor, who may register or login. And in addition to watch articles, news and the multitude of free content that the site offers.


In addition, there is a forum, where the students and graduates can hold discussions among themselves. currently still in development stages.

Each registered user has access to the forum and in addition to the profile area, where he can make changes in the details concerning him.

### *Use Case Diagram (➕Current status)*

<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/diagram.png" alt="opening-screen">


---

<div id="implementation"><div>

## 🧠 Implementation

### *Performence*

- Loading expected modules at the idle time of the browser

- Using the onPushStrategy in order to reduce the running of the change detection,
And beyond performance contributes by keep controlling and understanding the logic.

### *Scalable, Loosely Coupling, Testable And Maintainable*

- Thin Application: the environment files, styles and assets, have been exported to directories so that they are external to the application.
Therefore, they have the ability to be shared with another additional future apps or micro frontends.

- Keeping the components, weakly associated with each other.

And all the components that are intended to provide a service, are reusable that of course also sit in dedicated libraries.

All this in order to allow easy changes, easy access, work order and realization of unitests more easily

### *Custom Design*

- Custom Angular Material Theme

- Angular Animations

- Css StoryTelling

### *More...*

- State Management by Akita. And in addition, some of the states were implemented, without involvement from Akita. in order to practice different patterns, as part of learning.

- HTML Semantic Elements for accessiblity

---

<div id="features"><div>

## ✨ Features

### *Client Side :*

✅ Smart Stepper 

✅ Login

✅ Modal 

✅ Google Maps 

✅ Youtube Player 

✅ Dynamic Reactive Form

✅ Custom Inputs (By "Control Value Accessor") 

✅ Custom Validtors

✅ Smooth Scrolling 

✅ Central Massage Service 

✅ Table 

✅ Carousel 

✅ Card 

✅ Spinner 

✅ Smart Button 

✅ SVG Feature 

✅ And More...


### *Server Side :*

✅ JWT Authentication

✅ Image Uploader

✅ Data Transfer Object

✅ MD5 Service

✅ First Code Approach (By Fluent API and Data annotation)

✅ Full OOP Powerfull

---

<div id="technologies"><div>

## 👑 Technologies

<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/technologies-image.jpg" alt="technologies-image">

----

<div id="screen-shoots"> </div>

## 🎥 ScreenShoots & Gifs
<div align="center">

### *Opening Screen*
</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/opening-screen/opening-screen.jpg" alt="opening-screen">

</br>
</br>

### *Menu*
</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/expend-menu/menu-modal.jpg" alt="opening-screen">

</br>
</br>

### *Articles*
</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/articles/articles-events.jpg" alt="opening-screen">

</br>
</br>

### *Login*

</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/Auth/Login/login.jpg" alt="login-screen">

</br>
</br>

### *Registeration*
</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/Auth/Registeration/registeration.jpg" alt="registeration-screen">

</br>
</br>

### *Profile*
</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/Auth/Profile/profile.jpg" alt="profile-screen">

</br>
</br>

### *Full Responsive*
</br>
<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/opening-screen/opening-responsive.gif" alt="opening-screen">

</br>
</br>
</br>

<img src="https://github.com/MaorLev/assets/blob/master/.github/ort-alumni-web/screenshoots/expend-menu/menu-modal.gif" alt="opening-screen">


</br>
</br>

### *And More In The <a href="https://youtu.be/kP-5U4KBrUs">Link</a>*
</div>



---

<div id="license"><div>

## 📜 License

[MIT](LICENSE)
