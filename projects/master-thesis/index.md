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

## Problem description
Endovascular surgery is an alternative to open surgery, and it has fewer complications, such as: 
<br>
- Shorter recovery time
- Benefit of local anesthesia instead of general
- Less pain and bleeding
<br><br>

**Endovascular procedures** typically rely on fluoroscopy for imaging, which uses X-rays, an ionizing radiation that increases cancer risk. Fluoroscopy also has limited soft-tissue visualization; for example, it cannot visualize blood vessels, the brain, organs, or muscles.

**Magnetic Resonance Imaging (MRI)** offers an alternative to fluoroscopy, providing excellent soft-tissue visualization without radiation exposure. 
<br><br>
However, MRI is not widely used for endovascular procedures because:
- The images have low resolution and slow update frequency
- the endovascular procedure devices (guidewire, catheter) are not visible very well, raising concerns about the procedure's safety.
<br><br>

This project aims to improve the shortcomings of MRI-guided endovascular procedures. The following research question was raised:
<br>**How to improve the safety of MRI-guided endovascular procedures?**
<br><br>

The research question was approached with the following objectives:
- Optimization of an **Interactive MRI sequence** for endovascular procedures.
- **Detect MR-safe passive guidewire** in real-time during interactive MRI sequence.
- Implement **haptic feedback** on the CathBot robotic platform.
<br><br>

## Background 
### Endovascular procedures
[Endovascular aneurysm repair](https://en.wikipedia.org/wiki/Endovascular_aneurysm_repair)
<br><br>

### CathBot
[CathBot](https://www.researchgate.net/figure/CathBot-robotic-platform-for-fluoroscopy-and-MR-guided-endovascular-interventions-Left_fig2_342230038) is an MR-safe robotic platform, which uses pneumatic stepper motors to rotate and translate endovascular guidewire and catheter. The MR-safe robot is controlled by an HMI called **Main Controller (left)**. The Main Controller sends commands to a **pneumatic controller (middle)**, which creates pneumatic pressure patterns for the **MR-safe robot (right)**.

{% gallery %}
![CathBot Main Controller](/media/projects/master-thesis/cathbot-main-controller.jpg)
![Pneumatic Controller](/media/projects/master-thesis/cathbot-pneumatic-controller.jpg)
![MR-safe robot](/media/projects/master-thesis/cathbot-pneumatic-robot.jpg)
{% endgallery %}
<br><br>

### MR imaging
[Magnetic resonance imaging](https://en.wikipedia.org/wiki/Magnetic_resonance_imaging)

The endovascular device visibility issue is demonstrated in the image below. Additionally to the image, MRI is not a "projection" based imaging (such as X-ray), but rather can only image a thin slice of an object. Anything outside of the slice is not visible.
{% figure "/media/projects/master-thesis/xray-vs-mri-guidewire.png", "Comparison of endovascular guidewire visibility under **a) X-ray** and **b) MRI**", 70 %}
<br><br>

## Project outline
The project is split into 4 phases:  
<br>
- Optimizing MR sequence for interactive imaging
- Simulation of magnetic susceptibility markers
- Training a CNN on the procedurally generated dataset
- Adding haptic feedback to the CathBot
<br><br>

## Optimizing MR sequence
With MR-imaging, higher image quality or resolution will take more time to acquire, whereas low resolution images can be acquire very quickly and provide a good image update frequency. To optimize the MR sequence, a trade-off between the quality (spatial resolution) and update frequency (temporal resolution) was found.

The outcome of this analysis was a bSSFP sequence with a repetition time of ~500 ms, and voxel size of 1.3 mm. Here is an example of what such sequence looks like:
{% figure "/media/projects/master-thesis/2fps-demo.gif", "2 Frames Per Second MRI sequence (bSSFP)", 50 %}
<br><br>

## Simulation of Susceptibility Markers
MR-safe passive guidewires have embedded markers so that the guidewires can be visible during imaging. Simulating the marker signal is necessary to procedurally generate a CNN training dataset and detect these markers during real-time imaging.
<br><br>

### Simulated Marker
The math and implementation of these simulations are shown in the thesis.
{% figure "/media/projects/master-thesis/simulated-artifact-plots.png", "" %}
<br><br>

## Training CNN
The simulated marker was augmented by contrast, shape, and size and placed on various MR background images. A dataset of around 700 images was created.
{% figure "/media/projects/master-thesis/generated-dataset-examples.jpg", "" %}
<br>

The dataset was used to train a nnU-Net model. After multiple iterations, the CNN reliably detected the markers in ~0.2 seconds. Below is an example of the detection.
{% figure "/media/projects/master-thesis/example-cnn-detection.jpg", "" %}

The CNN performance was analyzed against manual annotation, and the results can be viewed in this Jupyter Notebook: [**CNN Evaluation**](https://github.com/martinreinok/master-thesis/blob/master/susceptibility-simulation/cnn-manual-evaluation.ipynb)
<br><br>
Here is an example of real-time CNN detection:
{% figure "/media/projects/master-thesis/real-time-detection-example.gif", "Real-Time CNN detection", 80 %}
<br><br>

## Safety layers
*To be added.*
<br><br>
