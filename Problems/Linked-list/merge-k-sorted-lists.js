const mergeKLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const list1 = lists.shift();
    const list2 = lists.shift();

    const merged = mergeLists(list1, list2);
    lists.push(merged);
  }
  return lists[0];
};

const mergeLists = (list1, list2) => {
  let dummy = new ListNode(0);
  const head = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2 = list2.next;
    }
    dummy = dummy.next;
  }
  if (list1 === null) {
    dummy.next = list2;
  } else {
    dummy.next = list1;
  }
  return head.next;
};
