---
title: "MixupExplainer: Generalizing Explanations for Graph Neural Networks with Data Augmentation"
collection: publications
permalink: /publication/2023-08-05-paper-MixupExplainer-3
excerpt: 'This paper is about the MixupExplainer. The RegExplainer 4 is the following work.'
date: 2023-08-05
venue: '29TH ACM SIGKDD CONFERENCE ON KNOWLEDGE DISCOVERY AND DATA MINING'
paperurl: 'https://arxiv.org/abs/2307.07832'
citation: 'Jiaxing Zhang, Dongsheng Luo, Hua Wei. 2023. MixupExplainer: Generalizing Explanations for Graph Neural Networks with Data Augmentation. In Proceedings of the 29th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining.'
---

Graph Neural Networks (GNNs) have received increasing attention due to their ability to learn from graph-structured data. 
However, their predictions are often not interpretable. Post-hoc instance-level explanation methods have been proposed 
to understand GNN predictions. These methods seek to discover substructures that explain the prediction behavior of a 
trained GNN. In this paper, we shed light on the existence of the distribution shifting issue in existing methods, which
affects explanation quality, particularly in applications on real-life datasets with tight decision boundaries. 
To address this issue, we introduce a generalized Graph Information Bottleneck (GIB) form that includes a label-independent 
graph variable, which is equivalent to the vanilla GIB. Driven by the generalized GIB, we propose a graph mixup method, 
MixupExplainer, with a theoretical guarantee to resolve the distribution shifting issue. We conduct extensive experiments 
on both synthetic and real-world datasets to validate the effectiveness of our proposed mixup approach over existing 
approaches. We also provide a detailed analysis of how our proposed approach alleviates the distribution shifting issue.

[Download paper here](https://arxiv.org/abs/2307.07832)

Recommended citation: Jiaxing Zhang, Dongsheng Luo, Hua Wei. 2023. MixupExplainer: Generalizing Explanations for Graph Neural Networks with Data Augmentation. In Proceedings of the 29th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining.