class Deck
  attr_reader :cards
  def initialize
    @cards = [...]
  end

  def pick_card
    cards.sample(2)
  end
end