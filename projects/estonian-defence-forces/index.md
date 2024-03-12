---
layout: header-footer-post.njk
---

# Estonian Defence Forces 
IT Department
<br><br>

## Project description
I was a network & DevOps engineer during my conscription. My main projects were:
- Custom Debian distribution with pre-installed software for quick setup on the field.
- Python GUI program for Switches and Routers configuring and firmare updating.
<br><br>

### Just some pictures :)
{% gallery %}
![1](/media/projects/estonian-defence-forces/group-photo.jpg)
![2](/media/projects/estonian-defence-forces/soduripaevad-2022.jpg)
{% endgallery %}
<br><br>

### Python program for configuring networking devices
I was assigned to rewrite scripts, written in PowerShell, which were used as CLI commands to either reconfigure or configure just a single networking device. I managed to rewrite and test the PowerShell scripts successfully, but I was not happy with the general functionality and end-user usability, so I proposed a new system.  
<br>
After some research into existing methods (paramiko, netmiko), I proposed a new system which can configure, reconfigure and update firmware or rommon for the most used networking devices in the networking infrastructure. 

This new system had a GUI, which made way easier to use for end-users and supported a lot more methods and devices. Development was done in a OOP way, so future new devices can be added rather easily.
<br><br>
Aside support for more devices, another main benefit of the program was the capability of reconfiguring or resetting networking device remotely, over SSH. The previous script required local presence to reconfigure over console connection only, whereas with the new method, operator does not have to leave the office :) (provided the device is online & configured).
<br><br>
{% figure "/media/projects/estonian-defence-forces/developed-configuration-software.png", "" %}
<br><br>

### Custom Debian Distribution
While debugging and supporting the networking infrastructure during an field training excercise, I got and idea to simplify the setup process for end-users. 
<br><br>
The current system relied on a hypervisor with multiple Virtual Machines, each one had to be installed and configured manually.
<br><br>
I proposed a new system which does not use any VMs, but instead uses a custom Debian distribution with preinstalled dockers. This required all the teams, which previously made software for pure-metal, to containerize their services. Thankfully this process had already begun to my suprise and building the distribution with pre-installed dockers was rather uncomplicated, but significantly simplified the setup of the service configurations.
<br><br>
- Built with '[live-build](https://www.debian.org/devel/debian-live/)'.
- The ISO was preseeded, meaning clients had to input very little information during installation.
- The Filesystem had all the microservices (docker) pre-installed, previously every service had to be manually installed.
<br><br>
Here is the splash of the Debian install :)
{% figure "/media/projects/estonian-defence-forces/debian-splash.png", "", "half"%}

