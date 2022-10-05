---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Leveraging triplet loss and nonlinear dimensionality reduction for on-the-fly channel charting"
authors:
- admin
- Luc Le Magoarou
- Stéphane Paquelet
- Matthieu Crussière

date: 2022-06-20T00:17:56+02:00
doi: "10.1109/SPAWC51304.2022.9834035"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-06-20T00:17:56+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Workshop on Signal Processing Advances in Wireless Communications*
publication_short: In *IEEE SPAWC*

abstract: Channel charting is an unsupervised learning method that aims at mapping wireless channels to a so-called chart, preserving as much as possible spatial neighborhoods. In this paper, a model-based deep learning approach to this problem is proposed. It builds on a physically motivated distance measure to structure and initialize a neural network that is subsequently trained using a triplet loss function. The proposed structure exhibits a low number of parameters and clever initialization leads to fast training. These two features make the proposed approach amenable to on-the-fly channel charting. The method is empirically assessed on realistic synthetic channels, yielding encouraging results.

# Summary. An optional shortened abstract.
# summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: 'https://arxiv.org/pdf/2204.13996'
url_code:
url_dataset:
url_poster: 'poster.pdf'
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
