/**
 * Pairwise Swap Elements of a given Linked List
 * https://www.geeksforgeeks.org/dsa/pairwise-swap-elements-of-a-given-linked-list/
 */
// Define a node in the linked list
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Function to insert a new node
// at the beginning of the list
function insertAtFront(head, x) {
  let newNode = new Node(x);
  newNode.next = head;
  return newNode; // return the new head of the list
}

// Function to print the contents
// of the linked list
function printList(head) {
  let curr = head;
  while (curr !== null) {
    process.stdout.write(curr.data.toString());
    if (curr.next !== null) {
      process.stdout.write(" -> ");
    }
    curr = curr.next;
  }
  console.log();
}

// Driver code
function main() {
  // Create the linked list 2->3->4->5
  let head = new Node(2);
  head.next = new Node(3);
  head.next.next = new Node(4);
  head.next.next.next = new Node(5);

  // Insert a new node at
  // the front of the list
  let x = 1;
  head = insertAtFront(head, x); // Update head with the new head

  // Print the updated list
  printList(head);
}

main();

/** Improvized code by gpt */
function insertAtFront(head, data) {
  if (head === null) return new Node(data); // edge case: handle empty list
  const newNode = new Node(data);
  newNode.next = head;
  head = newNode; // explicitly reassign head
  return head;
}
/**
 * Algorithm:
    Make the first node of Linked List linked to the new node
    Remove the head from the original first node of Linked List
    Make the new node as the Head of the Linked List.
 */
