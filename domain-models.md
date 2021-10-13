 # Part 1
 ## User story 1
As a member of the public
I'd like to add an item to my basket
So I can order a bagel when I want to

| Objects | Properties                | Message         | Output           |
| ------- | ------------------------- | --------------- | ---------------- |
| item    | -name(@String)            | -name()         | @String          |
| basket  | -basket(@array[@item])    | -addItem(@item) | @basket          |
| member  | -member(@String, @Number) | -member()       | @String, @Number |

## User story 2
As a member of the public,
I'd like to remove an item from my basket
So that I can change my order

| Objects | Properties             | Message            | Output  |
| ------- | ---------------------- | ------------------ | ------- |
| basket  | -basket(@array[@item]) | -removeItem(@item) | @basket |


# Part 2

## User story 3
As a member of the public,
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.
So that I can not overfill my small bagel basket
| Objects | Properties             | Message                | Output   |
| ------- | ---------------------- | ---------------------- | -------- |
| basket  | -basket(@array[@item]) | -checkIfBasketIsFull() | @Boolean |

## User story 4
As a Bob's Bagels manager,
I’d like to create baskets with larger capacity when I need to.
So that I can record more sales
| Objects | Properties             | Message                | Output  |
| ------- | ---------------------- | ---------------------- | ------- |
| basket  | -basket(@array[@item]) | -createBasket(@Number) | @basket |

## User story 5
As a member of the public
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.
So that I can maintain my sanity

| Objects | Properties             | Message                  | Output   |
| ------- | ---------------------- | ------------------------ | -------- |
| item    | -basket(@array[@item]) | -checkIfItemExist(@item) | @Boolean |

