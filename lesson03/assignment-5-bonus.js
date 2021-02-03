let arr = [['Clubs', 'Diamonds', 'Hearts', 'Spades'], ['Ace', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']];

cardSuit = arr[0].forEach(function(cardSuit) {
  card = arr[1].forEach(function(card) {
    console.log(card + " " + "of" + " " + cardSuit);
  })
})
