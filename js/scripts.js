// Business Logic for Bank ----------
 function Bank(){
   this.bankAccounts = [];
   this.currentId = 0;
 }

 Bank.prototype.addAccount = function(account){
   account.id = this.assignId();
   this.bankAccounts.push(account);
 }

Bank.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId;
}

Bank.prototype.findAccount = function(id){
  for (var i=0; i<this.bankAccounts.length; i++){
    if (this.bankAccounts[i]){
      if (this.bankAccounts[i].id == id){
        return this.bankAccounts[i];
      }
    }
  };
  return false;
}

 // Business Logic for BankAccount ----------
 function BankAccount(name, balance){
   this.name = name;
   this.balance = balance;
 }

 BankAccount.prototype.deposit = function(amount){
   this.balance += amount;
 }

 BankAccount.prototype.withdrawal = function(amount){
   this.balance -= amount;
 }

 BankAccount.prototype.showBalance = function(){
   $("#balance").text("$" + this.balance);
 }

// User Interface Logic
$(document).ready(function(){
  $("#account").submit(function(event){
    event.preventDefault();

    var nameInput = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());

    var account = new BankAccount(nameInput, initialDeposit);
    account.showBalance();

    $("#changeBalance").submit(function(event){
      event.preventDefault();
  
      var depositAmount = parseInt($("#deposit").val());
      var withdrawalAmount = parseInt($("#withdrawal").val());

      parseInt($("#deposit").val(""));
      parseInt($("#withdrawal").val(""));
  
      if (depositAmount>0){
        account.deposit(depositAmount);
      } else if (withdrawalAmount>0){
        account.withdrawal(withdrawalAmount);
      } else{
        alert("No amount changed.");
      }
      account.showBalance();
    });

  });

  
});