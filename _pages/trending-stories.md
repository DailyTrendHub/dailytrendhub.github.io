---
layout: default
title: Trending Stories
description: Discover the most popular and viral trending stories from around the world
permalink: /trending-stories/
nav_order: 2
---

<div class="page-content">
 
<div class="stories-grid">
  {% for story in site.stories %}
  <article class="story-card">
    <a href="{{ story.url | relative_url }}">
      {% if story.image %}
      <img 
        src="{{ story.image | relative_url }}" 
        alt="{{ story.title }}" 
        class="story-thumb"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="story-thumb-placeholder" style="display: none;">
        <span>📰</span>
        <p>{{ story.title | truncate: 50 }}</p>
      </div>
      {% else %}
      <div class="story-thumb-placeholder">
        <span>📰</span>
        <p>{{ story.title | truncate: 50 }}</p>
      </div>
      {% endif %}
    </a>
    <div class="story-content">
      <div class="story-badge">Trending</div>
      <h2><a href="{{ story.url | relative_url }}">{{ story.title }}</a></h2>
      <p class="story-date">{{ story.date | date: "%B %d, %Y" }}</p>
      <p class="story-excerpt">{{ story.excerpt | strip_html | truncate: 120 }}</p>
      <div class="story-meta">
        {% if story.tags %}
        <div class="story-tags">
          {% for tag in story.tags limit: 3 %}
          <span class="tag">#{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      <a href="{{ story.url | relative_url }}" class="read-story">Read Story →</a>
    </div>
  </article>
  {% else %}
  <div class="no-stories">
    <h3>No trending stories yet!</h3>
    <p>Check back soon for the latest viral stories.</p>
  </div>
  {% endfor %}
</div>