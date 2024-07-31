let balanceLari = 100.00;

    function updateBalance() {
        document.getElementById('balance').innerText = balanceLari.toFixed(2);
    }

    document.getElementById('transfer-btn').addEventListener('click', function() {

        const transferAmount = parseFloat(document.getElementById('amount').value);
        const recipient = document.getElementById('recipient').value;
        const transferMessage = document.getElementById('transfer-message');


        if (recipient.trim() === '') {
            transferMessage.innerText = 'Please enter a recipient.';
            transferMessage.className = 'error';
            return;
        }

        if (isNaN(transferAmount) || transferAmount <= 0) {
            transferMessage.innerText = 'Please enter a valid amount to transfer.';
            transferMessage.className = 'error';
            return;
        }


        if (transferAmount > balanceLari) {
            transferMessage.innerText = 'Insufficient balance.';
            transferMessage.className = 'error';
            return;
        }


        balanceLari -= transferAmount;
        transferMessage.innerText = `Successfully transferred ₾${transferAmount.toFixed(2)} to ${recipient}.`;
        transferMessage.className = 'success';


        updateBalance();
    });

    updateBalance(); 