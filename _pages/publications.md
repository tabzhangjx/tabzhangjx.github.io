---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<p class="research-line-intro">My work follows two connected research directions: trustworthy learning over structured data, and efficient multimodal foundation models for video understanding.</p>

<h2 class="archive__subtitle">Trustworthy and Structured Machine Intelligence</h2>
<div class="collection-grid collection-grid--publications">
{% assign structured_publications = site.publications | where: "research_track", "structured" %}
{% for post in structured_publications reversed %}
  {% include archive-card.html %}
{% endfor %}
</div>

<h2 class="archive__subtitle">Efficient Multimodal and Video Foundation Models</h2>
<div class="collection-grid collection-grid--publications">
{% assign multimodal_publications = site.publications | where: "research_track", "multimodal" %}
{% for post in multimodal_publications reversed %}
  {% include archive-card.html %}
{% endfor %}
</div>
