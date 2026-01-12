**File: src/components/Projects.astro**

**1. Modified Project Data (`const projects = [...]`)**

The `image` and `vertical` properties for "The Blog" and "WordPress Theme" entries were changed from their respective image imports (`dbdVHS`, `dbdVert`) to `null`. This allows for conditional rendering of placeholders when no image is specified.

```diff
 const projects = [
     {
         title: "Dead by Daylight 90's Generator",
         description: "Custom Icon Generator for Dead by Daylight",
         image: dbdVHS,
         vertical: dbdVert,
         preview: "../src/assets/90s-preview.png",
     },
     {
         title: "TimeWizard",
         description: "Another cool project",
         image: twVHS,
         vertical: twVert,
         preview: "../src/assets/TW-preview.png",
     },
     {
         title: "The Blog",
         description: "Custom Wordpress Theme inspired by Shirtz.cool",
-        image: dbdVHS,
-        vertical: dbdVert,
+        image: null,
+        vertical: null,
         preview: "../src/assets/blog-preview.png",
     },
     {
         title: "WordPress Theme",
         description: "Custom Wordpress Theme inspired by Shirtz.cool",
-        image: dbdVHS,
-        vertical: dbdVert,
+        image: null,
+        vertical: null,
         preview: "https://placecats.com/millie_neo/300/200",
     },
 ];
```

**2. Modified Horizontal Project Rendering Block**

The rendering logic was updated to conditionally display either the `<img>` tag (if `project.image` exists) or a styled `<div>` placeholder. The placeholder now includes "Coming Soon" text, aesthetic styling, and ensures preview functionality.

```diff
 <div class="vhs-stack md:flex hidden px-[5px] col-span-1 text-center mr-5">
     {
         projects.map((project) =>
             project.image ? (
                 <img
                     class="tape"
                     src={project.image.src}
                     alt={project.title}
                     data-preview={project.preview}
                 />
             ) : (
                 <div
                     data-preview={project.preview}
                     class="tape flex items-center justify-center bg-gray-500 text-white text-lg text-center p-2 rounded-md"
-                    style="width: 250px; height: 150px;"
+                    style="width: 200px; height: 120px;"
                 >
                     Coming Soon
                 </div>
             ),
         )
     }
 </div>
```

**3. Modified Vertical Project Rendering Block**

Similar to the horizontal images, the vertical rendering block was updated to conditionally display either the `<img>` tag (if `project.vertical` exists) or a styled `<div>` placeholder. This placeholder also shows "Coming Soon", has vertical text orientation, and supports preview functionality.

```diff
 <div class="md:hidden flex items-center h-[280px] px-[5px] text-center mr-5">
     {
         projects.map((project) =>
             project.vertical ? (
                 <img
                     class="tape h-[260px] w-auto mr-4"
                     src={project.vertical.src}
                     alt={project.title}
                     data-preview={project.preview}
                 />
             ) : (
                 <div
                     data-preview={project.preview}
                     class="tape flex items-center justify-center bg-gray-500 text-white text-lg text-center p-2 rounded-md"
                     style="width: 150px; height: 260px; margin-right: 1rem; writing-mode: vertical-rl;"
                 >
                     Coming Soon
                 </div>
             ),
         )
     }
 </div>
```