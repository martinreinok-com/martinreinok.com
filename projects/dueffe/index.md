---
layout: header-footer-post.njk
---

# Modernizing the Dueffe Quilting Machine
<br><br>

## Overview
I was asked by the mattress manufacturer Hilding Anders Estonia to solve a bottleneck with their industrial quilting machines. Their two quilting machines were made by Dueffe, an Italian company that went bankrupt years ago, leaving clients with little technical support.
<br><br>

The factory needed a way to translate PDF designs into proprietary CNC patterns. The Dueffe workflow forced designers to use a unoptimized CAD program for the task (DesignCAD), and the Dueffe post-processor, that concerted DesignCAD to CNC, did zero path optimization, resulting in slow, incorrect, and hardware-straining toolpaths.
<br><br>

## The Software: Custom CNC Pipeline
To bypass the broken CAD workflow entirely, I reverse-engineered Dueffe's undocumented dual-head CNC dialect and built a custom software pipeline.<br><br>

{% figure "/media/projects/dueffe/video.mp4", "" %}

Instead of manually drawing perfectly ordered geometry, I created an algorithmic generator. Complex mattress patterns can now be generated programmatically, which automatically outputs optimized, continuous toolpaths.<br><br>

**Kinematic Compensation:** Because this project deals with industrial textiles rather than rigid materials, perfect digital designs don't always yield perfect physical results. During testing, we found that sewing circles on thick fabric caused stretching and distortion. I updated the generation algorithm so the machine cuts circles clockwise when the head moves right, and counter-clockwise when it moves left. This dynamic adjustment perfectly countered the fabric tension, in some special cases.<br><br>

{% figure "/media/projects/dueffe/dueffe-cnc.gif", "" %}

<br><br>

## The Hardware: Floppy Disk to Wi-Fi Upgrade
Because these machines are from the 1990s, the only way to load the generated CNC files was via physical floppy disks. Moving files from a modern PC to a floppy, and then walking it over to the factory floor, was a massive daily hassle.<br><br>

To fix this, I replaced the physical floppy drive with a hardened **Raspberry Pi Zero 2W** configured as a USB mass storage emulator. <br><br>

{% figure "/media/projects/dueffe/raspberrypizero.jpg", "", "half" %}

The floppy disk reader was replaced by a floppy to usb reader. Machine's legacy controller required a special format to recognize the USB: it expected 127 partitions, each the exact byte size of a standard floppy disk. I wrote a custom mounting system to handle this structure and exposed those 127 virtual floppies over the factory's Wi-Fi via an authenticated SMB server. <br><br>

Now, the designs can be simply drag- and dropped into a network folder. A background watchdog script remounts the virtual drive, and the files appear on the CNC machine in the factory.<br><br>
