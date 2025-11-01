# Depth First Search (DFS) - In-order

The traversal you just saw (["A", "B", "D", "E", "C", "F", "G"]) is Depth First Search – Preorder traversal.

Why Preorder?

In Preorder traversal, we visit the node first, then traverse its children (from left to right).

Order: Root → Left → Right

That’s exactly what happens:

Visit A

Go into B, then its children (D, E)

Then go to C, then its children (F, G)

Other DFS orders (if you change the order of visiting):

Inorder (for binary trees only): Left → Root → Right

Postorder: Children → Root
