require_relative "../bank"

describe Bank do
  describe ".new" do
    it "creates a Bank object" do #this is just a message
      bank = Bank.new("Wells Fargo") #object
      # expect(bank).to_not eq nil
      expect(bank.name).to eq "Wells Fargo"
    end
  end
  describe "#create_account" do
    it "creates an account" do
      bank = Bank.new("Wells Fargo")
      bank.create_account("Bob", 200)
      expect(bank.accounts["Bob"]).to eq 200
    end
  end
end
