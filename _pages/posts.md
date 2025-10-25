---
layout: default
title: All Posts
description: Browse all posts and articles from Daily Trend Hub
permalink: /posts/
---

<div class="page-content">
  <h1>All Posts</h1>
  <p class="page-description">Browse our complete collection of articles and trending topics.</p>
  
  <div class="posts-grid">
    {% for post in site.posts %}
    <article class="post-card">
      <a href="{{ post.url | relative_url }}">
        {% if post.image %}
        <img 
          src="{{ post.image | relative_url }}" 
          alt="{{ post.title }}" 
          class="post-thumb"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="post-thumb-placeholder" style="display: none;">
          <span>📖</span>
          <p>{{ post.title | truncate: 50 }}</p>
        </div>
        {% else %}
        <div class="post-thumb-placeholder">
          <span>📖</span>
          <p>{{ post.title | truncate: 50 }}</p>
        </div>
        {% endif %}
      </a>
      <div class="post-content">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-date">
          {{ post.date | date: "%B %d, %Y" }}
          {% if post.categories %}
          • {{ post.categories | join: ', ' }}
          {% endif %}
        </p>
        <p class="excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
      </div>
    </article>
    {% endfor %}
  </div>
</div>