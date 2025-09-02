minimum order quantity = 5;
20% discount on 100 or more cartridges.

Equivalence partions:
Invalid: 0, 1, 2, 4
Valid - no discount: 5, 50, 99
Valid - discount: 100, 150, 1000

Boundary values:
4, 5, 6 = minimum order boundary
99, 100, 101 = discount threshold boundary

test case list: 
Invalid: 4
Valid, no discount: 5
Valid, no discount: 6
Valid, no discount: 50
Valid, no discount: 99
Valid, 20% discount: 100
Valid, 20% discount: 101
Valid, 20% discount: 150
Valid, 20% discount: 1000
