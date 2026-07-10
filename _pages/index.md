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
      📌  New paper!<br>
      <span>Check it out here →</span>
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
  background: #fdf6ec;
  color: #3a3a3a;
  padding: 1.1em 1.6em;
  font-size: 1rem;
  line-height: 1.4;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #e8ddc7;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
  transform: rotate(-2deg);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.sticky-note:hover {
  transform: rotate(0deg) scale(1.03);
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}

.sticky-note span {
  font-weight: 600;
  color: #4a7c59;
}

.sticky-note::before {
  content: "🌱";
  position: absolute;
  top: -14px;
  left: -10px;
  font-size: 1.4rem;
  transform: rotate(-15deg);
}
</style>