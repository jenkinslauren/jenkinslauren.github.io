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
      📌 New paper just out!<br>
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
  right: 30px;
  z-index: 10;
  display: inline-block;
  background: #fff69b;
  color: #333;
  padding: 1.1em 1.6em;
  font-size: 1rem;
  line-height: 1.4;
  text-decoration: none;
  text-align: center;
  transform: rotate(-3deg);
  box-shadow: 3px 4px 10px rgba(0,0,0,0.25);
  border-radius: 2px;
  transition: transform 0.15s ease;
}

.sticky-note:hover {
  transform: rotate(-1deg) scale(1.04);
}

.sticky-note span {
  font-weight: 600;
}

.sticky-note::before {
  content: "";
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #e74c3c;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.4);
}
</style>