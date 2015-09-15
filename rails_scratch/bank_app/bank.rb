class Bank
  attr_accessor :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, dollars)
    @accounts[name] = dollars
  end
end
