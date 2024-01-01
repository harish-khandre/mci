const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode();
  let current = dummy;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    } else {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    }
  }
  if (!list1) {
    current.next = list2;
  }
  if (!list2) {
    current.next = list1;
  }
  return dummy.next;
};
