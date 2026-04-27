---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
published: false
---

{% include base_path %}

Contact
======
* Jiaxing Zhang
* Research Scientist
* Bellevue, WA
* Email: tabzhangjx@gmail.com
* Phone: +1 (551) 290-9454
* Website: [tabzhangjx.github.io](https://tabzhangjx.github.io/)
* GitHub: [github.com/jz48](https://github.com/jz48)
* LinkedIn: [linkedin.com/in/jiaxing-zhang-45593b156](https://linkedin.com/in/jiaxing-zhang-45593b156)

Education
======
* PhD in Informatics, New Jersey Institute of Technology, Newark, NJ, US (Sep 2020 - May 2025)
* Bachelor of Computer Science (Honored Science Program), Xi'an Jiaotong University, Shaanxi, China (Sep 2016 - Jul 2020)
* Exchange Student, University of Minnesota Twin Cities, MN, US (Jan 2019 - Jul 2019)
* Summer School, University of Alberta, Edmonton, Alberta, Canada (Jul 2017 - Aug 2017)

Experience
======
* Research Scientist, TikTok Inc., Bellevue, WA (Jun 2025 - Present)
  * Built end-to-end multimodal LLM (LVLM) systems for video moderation.
  * Optimized training/inference stack with HF Accelerate, torchrun, DeepSpeed, Megatron-LM, FSDP/ZeRO, mixed precision, and FlashAttention-2.
  * Extended model architectures across Qwen2.5-VL, InternVL, LLaMA, and DeepSeek-R1 (including MoE routing, vision projector modules, and 3D-RoPE).
  * Drove multi-stage pipelines across pre-training, fine-tuning, SFT, and post-training.
  * Collaborated with moderation policy/product/infra teams to ship reliable serving.
  * Selected works:
    * Revisiting Attention Sink in Large Vision-Language Models: Insights from Video Moderation (under review)
    * Teaching LVLMs to Rank via Capability-Shift Tuning (under review)
    * RB-FT: Rationale-Bootstrapped Fine-Tuning for Video Classification (under review)

* Senior Data Scientist (Full-time), Walmart Global Tech, Hoboken, NJ (Sep 2024 - May 2025)
  * Built recommendation systems using regularization/penalization, LLM-augmented ranking, and KG features.
  * Designed business-KG-driven RAG + agentic framework for enterprise reasoning and actions.
  * Selected work:
    * [SIGKDD 2025] Is Your Explanation Reliable: Confidence-Aware Explanation on Graph Neural Networks.

* Applied Scientist Intern, Amazon, Bellevue, WA (Jun 2024 - Aug 2024)
  * Developed a Smart Model Re-Training framework to handle time-based data distribution drift.

* Research Assistant (Explainable AI on GNN), LabDaRL, New Jersey Institute of Technology, Newark, NJ (Sep 2022 - May 2025)
  * [NeurIPS 2024] RegExplainer: Generating Explanations for Graph Neural Networks in Regression Task.
  * [ICML 2024] Interpreting Graph Neural Networks with In-Distributed Proxies.
  * [SIGKDD 2023] MixupExplainer: Generalizing Explanations for Graph Neural Networks with Data Augmentation.

* Research Assistant (Natural Language Processing), SPACE Lab, New Jersey Institute of Technology, Newark, NJ (Sep 2020 - Jul 2022)
  * [ESEC/FSE 2023] Commit-level, Neural Vulnerability Detection and Assessment.
  * [ESEC/FSE 2023] DeMinify: Neural Variable Name Recovery and Type Inference.

* Research Assistant Intern (Computer Vision), Park Lab, University of Minnesota Twin Cities, Minneapolis, MN (May 2019 - Aug 2019)
  * Worked on 3D reconstruction using projective geometry and CNNs for point cloud generation.
  * Developed image segmentation and object detection methods to improve reconstruction quality.

Publications
======
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

Talks
======
<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html %}
{% endfor %}</ul>

Teaching
======
<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

Services and Membership
======
* Reviewer/PC: NeurIPS, ICML, ICLR, KDD, AISTATS, WACV, PKDD, AAAI (PC)
* President, Chinese Students and Scholars Association (CSSA) at NJIT (2023 - 2025)
* VP of Student Involvement Committee, 32nd CAST-GNY Annual Conference (Oct 2024)
* Professional Member, ACM (2025 - 2026, invited by ACM President Yannis Ioannidis)

Skills
======
* Tools and Languages: Python, C/C++, Java, C#, JavaScript, Matlab, Anaconda, Docker, Linux, Git, LaTeX, Markdown, S3, Merlin
* Framework and Infra: PyTorch, TensorFlow, DeepSpeed, Megatron-LM, FSDP/ZeRO, HF Accelerate, torchrun, CUDA, Ray
* Models and Methods: LVLMs (Qwen2.5-VL, InternVL, LLaMA, DeepSeek), MoE, 3D-RoPE, vision projector, retrieval RAG, KG (GraphSAGE/TransE), temporal modeling, calibration, post-training (RLHF/DPO)
* Machine Learning: NLP, code analysis, GNN, explainable AI, information theory, time series, spatio-temporal graph, traffic flow prediction, LLM
* Communication: English, Chinese
