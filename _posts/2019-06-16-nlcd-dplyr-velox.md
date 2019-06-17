---
title: "Pland calculation using Velox & dplyr"
layout: post
published: false
use_code: true
---
<i>This is a tutorial on efficiently calculating proportional landcover in R using velox and dplyr.</i>

<br>

## <span style="color:#881c1c">Introduction</span>

Some introductory text... pland from FRAGSTATS, the basis for using pland (ref eBird Best Prax)

## <span style="color:#881c1c">Methods</span>
---
### Generating sample coordinates

```r
library(rnaturalearth)
state = ne_states(iso_a2 = "US", returnclass = "sf") %>%  # pull admin. bounds. for US
  filter(iso_3166_2 == "US-MA") %>% # select Massachusetts
  st_transform(crs = "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80
+towgs84=0,0,0,0,0,0,0 +units=m +no_defs") # nlcd crs

library(sf)
pts = st_sample(state, size = 10, type = "regular") # sample 10 points in polygon

plot(pts, col="red", pch=20)
```
