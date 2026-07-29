# Jiaxing Zhang's Personal Website

[![Website](https://img.shields.io/badge/website-tabzhangjx.github.io-0f77a8)](https://tabzhangjx.github.io)

This repository contains the source code for my academic personal website:
[tabzhangjx.github.io](https://tabzhangjx.github.io).

I am a Research Scientist at TikTok in Bellevue, Washington. I received my
PhD in Informatics from New Jersey Institute of Technology in May 2025,
advised by [Prof. Hua Wei](https://www.public.asu.edu/~hwei27/) and
[Prof. Michael Lee](https://people.njit.edu/profile/mjlee). Before that, I
earned my bachelor's degree in Computer Science from Xi'an Jiaotong University
in 2020.

My research interests include multimodal large language models (LVLMs), graph
neural networks, explainable AI, information bottleneck methods, and natural
language/code analysis.

## About the site

The site is built with [Jekyll](https://jekyllrb.com/) and hosted on
[GitHub Pages](https://pages.github.com/). It is based on the
[Academic Pages](https://academicpages.github.io/) template and the
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme, with
custom layouts and styling.

The main sections are:

- **About** — biography, research interests, and contact information
- **Publications** — papers, abstracts, citations, and external paper links
- **Talks** — talks and poster presentations
- **Teaching** — teaching experience
- **Portfolio** — selected projects
- **Blog Posts** — date-based post archive

## Repository structure

```text
_config.yml          Site-wide settings and author metadata
_pages/              Top-level pages and collection indexes
_publications/       Publication entries
_talks/              Talk and presentation entries
_teaching/           Teaching entries
_portfolio/          Portfolio entries
_layouts/            Jekyll page layouts
_includes/           Reusable Liquid components
_sass/               Theme and custom styles
assets/              Compiled CSS, JavaScript, and fonts
images/              Profile images and site artwork
files/               Downloadable files
markdown_generator/  TSV/BibTeX-to-Markdown utilities
talkmap/             Generated Leaflet talk-location map
```

## Run locally

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open <http://localhost:4000> in a browser. Changes to `_config.yml` require
restarting the Jekyll server.

## Updating content

### Profile and navigation

- Edit `_pages/about.md` for the homepage biography.
- Edit the `author` section of `_config.yml` for the sidebar, contact details,
  and academic/social links.
- Edit `_data/navigation.yml` to change the top navigation.

### Publications

Add a Markdown file to `_publications/` with YAML front matter similar to:

```yaml
---
title: "Paper title"
collection: publications
permalink: /publication/YYYY-MM-DD-paper-slug
excerpt: "Short description of the paper."
date: YYYY-MM-DD
venue: "Conference or journal"
paperurl: "https://example.com/paper"
citation: "Recommended citation."
---
```

Publication files can also be generated from
`markdown_generator/publications.tsv` by running `publications.py` from the
`markdown_generator/` directory. Similar utilities are available for talks.

### Styling

Site-specific visual customizations live in `_sass/_custom-theme.scss`.
`assets/css/main.scss` imports this file after the base theme modules.

## Deployment

Changes pushed to the repository's publishing branch are built and deployed by
GitHub Pages. The production URL is:
[https://tabzhangjx.github.io](https://tabzhangjx.github.io).

## License and attribution

The underlying Academic Pages and Minimal Mistakes theme code is distributed
under the MIT License. See [LICENSE](LICENSE) and
[Academic Pages](https://github.com/academicpages/academicpages.github.io) for
details.
