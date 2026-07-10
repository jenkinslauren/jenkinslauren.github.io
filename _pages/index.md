---
permalink: /
title: ""
layout: single
author_profile: false
---

<div class="about-section">
  <div class="photo-scroll-wrap">
    <div class="photo-scroll">
      <img src="/images/about/coweeta.jpg" alt="Field work">
    </div>

    <a href="/publications/" class="sticky-note">
      <span class="sticky-note__headline">📌 New paper!</span>
      <span class="sticky-note__subtext">Check it out here →</span>
    </a>
  </div>
</div>

<style>
.photo-scroll-wrap {
  position: relative;
}

.sticky-note {
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 10;
  display: inline-block;
  background: #eaf6ec;
  color: #3a3a3a;
  padding: 1.1em 1.6em;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #a8d5b0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
  transform: rotate(-2deg);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
}

.sticky-note:hover {
  transform: rotate(0deg) scale(1.03);
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}

.sticky-note__headline {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2e7d32;
  line-height: 1.25;
  margin-bottom: 0.2em;
}

.sticky-note__subtext {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #3a3a3a;
}
</style>