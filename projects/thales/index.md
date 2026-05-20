---
layout: header-footer-post.njk
---

# Thales Netherlands
<br><br>

## Overview
During my time at Thales, I worked on the Tacticos naval Combat Management System, used for the F126 frigate. My primary focus was research and development to integrate third-party training simulations with Tacticos.
<br><br>

Tacticos is the operating system which manages all of the systems on the warship. Any gun, sensor, radar, or camera on the ship is connected to Tacticos, and operators in the tactical command center of the ship will be able to view and control the subsystem.

<br><br>

## Training and Simulation
Using the real subsystems is expensive, so Tacticos also includes a training subset. The Tacticos Training & Simulation team is working on virtualizing every aspect of the ship and the world around it. 
<br><br>

By pushing a single button, operators can switch the actual ship's interface into a fully simulated, multi-ship training environment powered by third-party MAK VR-Vantage and VR-Forces engines. My role was to build the custom C++ enablers that bridged Tacticos with these virtual 3D environments.

<br><br>

### System Architecture & Integration
The simulation was developed to be distributed due to the large rendering load across the ship. Multiple instances of MAK VR-Vantage run across several GPU-powered servers to generate up to 30 concurrent virtual video streams at varying resolutions.
{% figure "/media/projects/thales/video-streams.jpg", "", "full" %}

To tie everything together without blocking the main system, I used **ZeroMQ Pub/Sub** and **Apache Avro** for low-latency messaging, connecting Tacticos with the external engines via HLA bridges.

<br><br>

### Virtual Camera Management
Just like the physical frigate, the 3D ship needs an exact replica of all camera feeds. I wrote a C++ Camera Plugin to parameterize the 3D ship model and dynamically attach virtual cameras to moving parts, like weapons or sensors. When the turret turns in the simulation, the video feed updates exactly as the real hardware would. Additionally, each camera sensor can be switched between EO/IR/NV, and the zoom level can be adjusted.
{% figure "/media/projects/thales/thales-gatekeeper.jpg", "", "full" %}

<br><br>

### Real-Time Weapon Overlays
Each weapon manufacturer has a unique GUI overlay for their cameras. For the simulation to be accurate, we had to draw these exact interfaces over the virtual video feeds in real-time. 

I built an OpenGL framework and specific plugins to handle this, simulating the UI of the weapon manufacturer.
{% figure "/media/projects/thales/thales-overlay.jpg", "", "full" %}

*All figures shown here are from a presentation my colleague and I gave at the 2025 MAK User Group conference in Oxford.*