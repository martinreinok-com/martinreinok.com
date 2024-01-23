---
layout: header-footer-post.njk
---

# *This project is still in progress*
<br><br>

## Thesis link
[TBD]()
<br><br>

## Thesis code repository
[GitHub](https://github.com/martinreinok/master-thesis)
<br><br>

## Project description
This project aims to improve the shortcomings of MRI-guided endovascular procedures. MRI-guidance has some notable issues:  
<br>
- Low resolution
- Procedural device visibility
- Manual MRI image alignment
<br><br>
This project proposes improvements for these shortcomings, by implementing a software-hardware solution on the [CathBot](https://www.researchgate.net/figure/CathBot-robotic-platform-for-fluoroscopy-and-MR-guided-endovascular-interventions-Left_fig2_342230038) platform
<br><br>

## Project outline
The project is split into 4 phases:  
<br>

- Simulation of magnetic susceptibility artifacts
- Training a CNN on the simulated artifact image data 
- Finding the passive MRI guidewire from Real-Time MRI using the CNN
- Developing a safety layer on CathBot to prevent guidewire collisions with blood vessels
<br><br>

### Simulation of Susceptibility Artifacts
<br><br>

#### Simulated Artifact
{% figure "/media/projects/master-thesis/simulated-artifact-plots.png", "" %}
<br><br>

#### MRI Reference
{% figure "/media/projects/master-thesis/mri-phantom-guidewire.png", "" %}
<br><br>

### Training CNN
<br><br>

### Locating guidewire in Real-Time
<br><br>

### Safety layers
<br><br>
