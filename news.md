---
title: News
layout: default
use_fontawesome: true
---


<div class="row content-row">
<div class="col-12 col-sm-3">
  <h2>Latest Posts</h2>

  <ul class="post-list">
  {%- for post in site.posts -%}
    <li>

      {%- assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
      </h2>

      <span>{{ post.excerpt | markdownify | truncatewords: 50 }}</span>

    </li>
  {%- endfor -%}
  </ul>
</div>
<div class="col-12 col-sm-9">
  <center>
      <a class="twitter-timeline" 
         data-width="350" 
         data-height="500" 
         data-link-color="#E1BB67" 
         href="https://twitter.com/jagsmap?ref_src=twsrc%5Etfw"
         >Tweets by jagsmap</a> 
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </center>
</div>
</div>

<br>
<br>
<br>
<br>

<center>
  <a class="twitter-timeline" data-width="350" data-height="500" data-link-color="#E1BB67" href="https://twitter.com/jagsmap?ref_src=twsrc%5Etfw">Tweets by jagsmap</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
  </script>
</center>

<h2>Latest Posts</h2>

<ul class="post-list">
{%- for post in site.posts -%}
  <li>

    {%- assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }}</span>

    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
    </h2>

    <span>{{ post.excerpt | markdownify | truncatewords: 50 }}</span>

  </li>
{%- endfor -%}
</ul>
