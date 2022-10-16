---
title: UPA phased antenna array steering vector derivation
# subtitle:

# Summary for listings and search engines
summary: In this article I will explain how the steering vector (or spatial signature) of a uniform planar area can be derived in a very simple and visual way.

# Link this post with a project
projects: []

# Date published
date: "2020-12-13T00:00:00Z"

# Date updated
lastmod: "2020-12-13T00:00:00Z"

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/CpkOjOcXdUY)'
  focal_point: ""
  placement: 2
  preview_only: false

authors:
- admin

tags:
- Academic

categories:
- Wireless Communications
 
_build:
  render: always
  list: always
---

In this article I will explain how the steering vector (or spatial signature) of a uniform planar area can be derived in a very simple and visual way.

Let’s start by writing down the frequency response $h$ of a single receive antenna:

$$
h = \alpha e^{-j(2\pi f\tau + \phi)}.
$$

In wireless communications, the wavefronts of an antenna emitting in all directions are spherical. However, one can assume that when the distance to the transmitter is sufficiently big, the wavefronts can be reasonably approximated by planes. In other words, the curvature of the sphere of big radius is small enough for the local patches to be approximated by their tangent planes, as show on figure 1. This assumption greatly simplifies calculations. One can observe that a plane wave travels in the direction normal to its plane, represented by the unit vector $\overrightarrow{u}$. In the case of the plane wave model, this direction is aligned with the radius of the sphere.

![The plane wave assumption holds for receivers at a great distance from the transmitter.](plane_wave_assumption.png "The plane wave assumption holds for receivers at a great distance from the transmitter.")

Let’s now start by considering two receive antennas $A$ and $B$ close enough to each other on the scale of the wavelength. Antenna $A$ is placed at the origin of a three-dimensional Cartesian space while antenna $B$ is at position $(x,y,z)$ represented by the vector $\overrightarrow{p}$ as shown on the figure bellow.

FIGURE

The frequency responses $h_1$ and $h_2$ corresponding to the first and second antenna respectively are as follows:

$$
h_1=\alpha e^{-j\phi}e^{-j2\pi f\tau} \quad \text{and} \quad h_2=\alpha e^{-j\phi}e^{-j2\pi (f\tau+\frac{d}{\lambda})},
$$

where $d$ is the distance the wave needs to further travel from the first antenna to attain the second antenna, assuming it is small enough for $\alpha$ to remain unchanged.

The objective now is to determine this distance knowing the position $\overrightarrow{p}$ of antenna $B$ relative to antenna $A$, and the direction of arrival (DoA) of the wave $\overrightarrow{u}$ (i.e. the unit normal to the wave plane). If the antenna $B$ is placed such that $\overrightarrow{p}$ is aligned with $\overrightarrow{u}$, then this distance is exactly the norm of $\overrightarrow{p}$ (i.e., $d=\Vert\overrightarrow{p}\Vert$). In the more general case however, this is not true. Luckily, we can easily derive the true quantity using simple geometry. Indeed, the distance $d$ is simply the distance between the two antennas orthogonally projected on the direction of travel of the wave:

$$
\begin{equation}
d = \overrightarrow{p}.\overrightarrow{u}.
\end{equation}
$$

<aside>
💡 If the signal reaches an antenna before reaching reference antenna, then the phase shift needs to be negative. This works out well in this case as the scalar product changes sign accordingly.
</aside>

In the case of an antenna array, the same principle holds: for each antenna, the objective is finding the distance the wave needs to further travel from one reference antenna to the rest of the antennas. Formally, for a UPA of size $N\times M$, we define a matrix $\mathbf{D}$ of those distances where each element corresponds to one antenna:

$$
\mathbf{D}=\begin{bmatrix} 
    d_{00} & \dots  & d_{0(M-1)}\\
    \vdots & \ddots & \vdots\\
    d_{(N-1)0} & \dots  & d_{(N-1)(M-1)} 
    \end{bmatrix}.
$$

Taking the top left antenna as reference, it follows that $d_{00}=0$. Using (1) we have:

{{< math >}}

$$
\mathbf{D}=\begin{bmatrix} 
    \overrightarrow{p}_{00}.\overrightarrow{u} & \dots  & \overrightarrow{p}_{0(M-1)}.\overrightarrow{u}\\
    \vdots & \ddots & \vdots\\
    \overrightarrow{p}_{(N-1)0}.\overrightarrow{u} & \dots  & \overrightarrow{p}_{(N-1)(M-1)}.\overrightarrow{u} 
    \end{bmatrix}.
$$
{{< /math >}}

In the case of UPAs, the array elements are usually separated by half a wavelength both horizontally and vertically, meaning that if the array belongs to the $xz$-plane, then $\overrightarrow{p}_{mn}=(-m\frac{\lambda}{2},0,-n\frac{\lambda}{2})$.

On the other hand, $\overrightarrow{u}$ is equivalently represented by the azimuth and elevation angles of arrival, noted $\theta$ and $\varphi$ respectively. Converting from polar to Cartesian coordinates, we obtain $\overrightarrow{u}=(-\cos{\varphi}\cos{\theta},-\cos{\varphi}\sin{\theta},-\sin{\varphi})$. Finally, we obtain $\overrightarrow{p}_{mn}.\overrightarrow{u}=m\frac{\lambda}{2}\cos \varphi \cos \theta + n\frac{\lambda}{2}\sin \varphi$. Matrix $\mathbf{D}$ then becomes:

$$
\mathbf{D}=\begin{bmatrix} 
    0 & \dots  & (M-1)\frac{\lambda}{2}\cos \varphi \cos \theta\\
    \vdots & \ddots & \vdots\\
    (N-1)\frac{\lambda}{2}\sin \varphi & \dots  & (M-1)\frac{\lambda}{2}\cos \varphi \cos \theta + (N-1)\frac{\lambda}{2}\sin \varphi 
    \end{bmatrix}.
$$

This form greatly simplifies the expression of the channel matrix $\mathbf{H}$ of the UPA:

$$
\mathbf{H}=\alpha e^{-j\phi}e^{-j2\pi f\tau}e^{-j\frac{2\pi}{\lambda}\mathbf{D}},
$$

where the last exponential is the element-wise operator.

One can then observe that $e^{-j\frac{2\pi}{\lambda}\mathbf{D}}$ can be written as the Kronecker product of two unit vectors:

$$
e^{-j\frac{2\pi}{\lambda}\mathbf{D}} = \sqrt{NM}\mathbf{a}_h^\top\otimes\mathbf{a}_v,
$$

where $\mathbf{a}_h=\frac{1}{\sqrt{M}}(1,\dots,e^{(M-1)\pi\cos{\varphi}\cos{\theta}})^\top$ and $\mathbf{a}_v=\frac{1}{\sqrt{N}}(1,\dots,e^{(N-1)\pi\sin{\varphi}})^\top$. These are called the steering vectors (or spatial signatures) of the antenna array. They depend on the direction of arrival of the signal and fully describe the system. They are a convient way to represent $\mathbf{H}$ whom final expression is:

$$
\mathbf{H}=\sqrt{NM}\alpha e^{-j\phi}e^{-j2\pi f\tau}\mathbf{a}_h^\top\otimes\mathbf{a}_v.
$$

It is worth noting that the same procedure could be used to derive the formula for different configurations of antenna arrays (ULA, circular, cylindrical…).

Bellow is an interactive figure of a UPA showing the distance $d$ (green segment) of one of its antenna elements (blue dots) to the wavefront (blue plane). You can move the red dot around to see how $d$ changes depending on the direction of arrival.

{{< geogebra UPA.ggb >}}