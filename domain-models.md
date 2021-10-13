 # Part 1
As a member of the public
I'd like to add an item to my basket
So I can order a bagel when I want to

As a member of the public,
I'd like to remove an item from my basket
So that I can change my order

| Objects | Properties                | Message            | Output           |
| ------- | ------------------------- | ------------------ | ---------------- |
| item    | -name(@String)            | -name()            | @String          |
| basket  | -basket(@array[@item])    | -addItem(@item)    | @basket          |
| ''      | ''                        | -removeItem(@item) | @basket          |
| ''      | ''                        | -findItem(@item)   | @Boolean         |
| member  | -member(@String, @Number) | -member()          | @String, @Number |

