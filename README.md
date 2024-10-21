# WK06

## What dataset did you use? 

I used the dataset of the street trees in NYC from the class site. This dataset contains differetn attributes of trees, such as species, location, and health status. 

[![Screenshot-2024-10-20-at-12-20-08-PM.png](https://i.postimg.cc/qR7LMGZ2/Screenshot-2024-10-20-at-12-20-08-PM.png)](https://postimg.cc/kVk8TWC5)

## Why did you choose this dataset?
I chose this dataset because it has a nice variety of spatial data (latitude and longitude) which makes it ideal for visualizing geographic distributions.


## Which fields/features/parameters of the dataset did you use?

latitude and longitude, in which these fields are used to map the position of trees on a canvas representing New York City. In my first iteration "HW06" - I wanted to have different colors for different range of longitude - however i feel that it doesn't really tell much because the colors are gonna be the same based off of the range shown on the screen.  

in my second iteration, i wanted to add another parameter, tree species.(spc_common)-  which is used to color-code different tree species, so each species is represented by a different color.

[![Screenshot-2024-10-20-at-12-19-40-PM.png](https://i.postimg.cc/Y9yx4mJZ/Screenshot-2024-10-20-at-12-19-40-PM.png)](https://postimg.cc/0MDSFr50)

I watched a youtube video about how to code a tree - i felt like the tree was just unnecessary in depicting data, its more like a decorative element. 


## How many data points did you use?
I used approximately over 2000 data points from the dataset, which represents trees across different boroughs of New York City.

## What are you visualizing? 
I visualized the geographic distribution of the trees based on their latitude and longitude coordinates. Each tree is represented as a triangle on the canvas. i picked the triangle because i feel that it is a common geometric representation of trees, such as the christmas tree, with it's symbolic structure. In other words, the triangluar shape reflects the tree's natural stability, growth, and expansion from a solid foundation to a pointed top, much like how a tree grows from the ground upward.

[![Screenshot-2024-10-20-at-11-47-54-AM.png](https://i.postimg.cc/Kc9xpv2z/Screenshot-2024-10-20-at-11-47-54-AM.png)](https://postimg.cc/V5bxdw5Q)

i definitely want to use a earthy tone palatte, since it feels relevant to trees, it also conveys a feeling of calm, warmth, and stability. Colors like browns, greens, and beiges remind us of nature, making things feel grounded and cozy. They create a relaxed and inviting mood, often feeling simple, timeless, and comforting.

## How do the shapes, colors or movement relate to the data values?

1) Size of the triangles are different sizes because they are being scaled based on the latitude value from the dataset
2) The position of the triangles on the canvas is currently determined by mapping the longitude of each tree to the x coordinate on the canvas using the map() function.
3) Color represents different species of trees, with a different shade for each species.

[![Screenshot-2024-10-20-at-12-27-40-PM.png](https://i.postimg.cc/PqTy0HW3/Screenshot-2024-10-20-at-12-27-40-PM.png)](https://postimg.cc/NKCRrWPm)









