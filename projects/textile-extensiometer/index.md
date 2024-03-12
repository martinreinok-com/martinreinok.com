---
layout: header-footer-post.njk
---

# Textile Extensiometer
<br><br>

## Project description
<br>
This project automates a fabric extensiometer used for quality control of textiles and fabrics. Beforehand the extensiometer had to be winded manually, with mechanically attached 3kg weight. This project replaces the winding with a motor and the weight with a load cell. Additionally a laser is added for more accurate results, however the ruler on the device will remain for double checking.  

<br>
Overall the system makes the textile testing process more convienient and accurate.
<br><br>

### Components used
<br>

- **Non-captive stepper motor** from Nanotec, with DMD560-SV controller.
- **Arduino Nano** for logic and stepper control
- **Siemens LOGO!** PLC for safety system (E-stop and 24V & 5V relays)
- **Panasonic HG-C1200-P laser distance sensor**
- 24V & 5V PSU

<br><br>

## Codebase of this project (C++)
[GitHub](https://github.com/martinreinok/SDL_Atlas) 
<br><br>

## Side by side
Here is an image that has the reworked robot, alongside the original, manual tool.
{% figure "/media/projects/textile-extensiometer/side-by-side.jpg", "" %}
<br><br>

## CAD design
{% figure "/media/projects/textile-extensiometer/cad-design.png", "" %}
<br><br>

## Electrical Box
{% gallery %}
![Box inside](/media/projects/textile-extensiometer/inside-box.jpg)
![Box outside](/media/projects/textile-extensiometer/outside-box.jpg)
{% endgallery %}
<br><br>

## Motor mount & Laser
{% figure "/media/projects/textile-extensiometer/motor-mount-laser.png", "" %}
<br><br>

## Force Sensor
{% figure "/media/projects/textile-extensiometer/force-sensor.png", "" %}
<br><br>

## Remote
{% figure "/media/projects/textile-extensiometer/robot-and-remote.jpg", "" %}
<br><br>